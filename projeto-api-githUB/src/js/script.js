import { getUser } from "./services/user.js"
import { getRepos } from "./services/repos.js";

import { user } from "./objects/user.js"
import { screen } from "./objects/screen.js";


document.getElementById('btn-search').addEventListener('click', () => {

    const userName = document.getElementById('input-search').value;
    getUserData(userName);

});

document.getElementById('input-search').addEventListener('keyup', (e) => {
    const userName = e.target.value
    const key = e.which || e.keyCode
    const isEnterKEyPressed = key === 13

    if (isEnterKEyPressed) {
        getUserProfile(userName)
    }

});


async function getUserData(userName) {

    const userResponse = await getUser(userName) 
    const repositoriesResponse = await getRepos(userName)

    user.setInfor(userResponse)
    user.setRepos(repositoriesResponse)

    screen.renderUser(user)
};


