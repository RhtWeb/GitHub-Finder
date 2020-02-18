class Github {
    constructor(){
        this.userUserId = "";
        this.userClientSecret = "";
        this.reposCount = 5;
        this.reposSort = "created: asc"
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.userUserId}&client_secret=${this.userClientSecret}`);

        const profileRepos = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.reposCount}&sort=${this.reposSort}&client_id=${this.userUserId}&client_secret=${this.userClientSecret}`);

        const profile = await profileResponse.json();
        const repos = await profileRepos.json();


        return {
            profile : profile,
            repos : repos
        }
    }
}