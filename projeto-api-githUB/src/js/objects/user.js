

const user = {

    avatarUrl: ' ',
    name: '',
    bio: '',
    userName: '',
    repositories: [],

    setInfor ( gitHubUser ) {
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name 
        this.bio = gitHubUser.bio
        this.userName = gitHubUser.login
    },

    setRepos ( repositories ) {
        this.repositories = repositories
    }
};

export { user }