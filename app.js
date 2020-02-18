const github = new Github();
const ui = new Ui();
var debounce;

let searchUser = document.getElementById("searchUser");
searchUser.addEventListener("keyup", (e) => {
    let user = e.target.value;
    
    if(user !== ""){
        
        clearTimeout(debounce);
        debounce = setTimeout(() => {github.getUser(user)
        .then(data => {
            if(data.profile.message !== "Not Found"){
                
                ui.displayUi(data.profile);
                console.log(data.profile);
                ui.displayUirepos(data.repos);
                // console.log(data.repos);
            }else{
                // show alert
                    ui.profileNotFound(data.profile.message, "alert alert-danger");
                
                // console.log(data.profile.message);
                
            }


        })}, 250);

        // github.getUser(user)
        // .then(data => {
        //     if(data.profile.message !== "Not Found"){
                
        //         ui.displayUi(data.profile);
        //         console.log(data.profile);
        //         ui.displayUirepos(data.repos);
        //         // console.log(data.repos);
        //     }else{
        //         // show alert
        //             ui.profileNotFound(data.profile.message, "alert alert-danger");
                
        //         // console.log(data.profile.message);
                
        //     }


        // });
    }else{
        // clear ui 
        ui.clearUi();
        // console.clear();
    }

});