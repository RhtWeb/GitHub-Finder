class Ui {
    constructor(){
        this.profileDispaly = document.getElementById("profile");
    }

    displayUi(user){
        this.profileDispaly.innerHTML = `
        <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img src="${user.avatar_url}" alt="profile.pic" class="img-fluid mb-2">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
    
          </div>
          <div class="col-md-9">
            <span class="badge badge-primary">Public Repos : ${user.public_repos}</span>
            <span class="badge badge-secondary">Public Gists : ${user.public_gists}</span>
            <span class="badge badge-success">Followers : ${user.followers}</span>
            <span class="badge badge-info">Following : ${user.following}</span>
            <br><br>
            <ul class="list-group">
              
              <li class="list-group-item">Company : ${user.company}</li>
              <li class="list-group-item">Website/Blog : ${user.blog}</li>
              <li class="list-group-item">Location : ${user.location}</li>
              <li class="list-group-item">Member Since : ${user.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading mb-3">Latest Repos</h3>
      <div id="repos"></div>
        `;
        
    }

    displayUirepos(userRepos){
        let reposDispaly = document.getElementById("repos");

        let output= "";
        userRepos.forEach(repo => {
            // console.log(repo);
            output += `
            <div class="card card-body mb-2">
                <div class="row">
                    <div class="col-md-6">
                        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                    </div>
                    <div class="col-md-6">
                        <span class="badge badge-primary">Stars : ${repo.stargazers_count}</span>
                        <span class="badge badge-success">Watchers : ${repo.watchers_count}</span>
                        <span class="badge badge-info">Forks : ${repo.forks_count}</span>        
                    </div>
                </div>
            </div>
            `;
        });
        reposDispaly.innerHTML = output;
    }

    profileNotFound(message, className){
        // let sc = document.getElementsByClassName("searchContainer");
        // let nw = document.createElement("h3");
        // nw.appendChild(document.createTextNode(${message}));
        // div.insertBefore(nw, sc);
        this.clearAlert();
        let div = document.createElement("div");
        div.className = className;
        div.appendChild(document.createTextNode(message));

        let container = document.querySelector(".searchContainer");
        let search = document.querySelector(".search");

        container.insertBefore(div, search);

        setTimeout(() => {
            this.clearAlert();
        }, 2000);
    }

    clearAlert(){
        const currentAlert = document.querySelector(".alert");

        if(currentAlert){
            currentAlert.remove();
            // console.log(currentAlert);
        }
    }

    clearUi(){
        this.profileDispaly.innerHTML = ``;
    }
}