import { getUser } from "./services/user.js"
import { getRepos } from "./services/repos.js";

import { user } from "./objects/user.js"
import { screen } from "./objects/screen.js";


document.getElementById('btn-search').addEventListener('click', () => {
    const userName = document.getElementById('input-search').value;

    if(validateEmptyInput(userName)) return
    getUserData(userName);

});

document.getElementById('input-search').addEventListener('keyup', (e) => {
    const userName = e.target.value
    const key = e.which || e.keyCode
    const isEnterKEyPressed = key === 13

    if (isEnterKEyPressed) {
        if(validateEmptyInput(userName)) return
        getUserProfile(userName)
    }
});

function validateEmptyInput(userName) {
    if (userName.length === 0) {
        alert("Coloque o nome do usuário para a busca.")
        return true
    }
}

async function getUserData(userName) {

    const userResponse = await getUser(userName)

    if (userResponse.message === "Not Found") {
        screen.renderNotFound()
        return
    }

    const repositoriesResponse = await getRepos(userName)

    user.setInfor(userResponse)
    user.setRepos(repositoriesResponse)

    screen.renderUser(user)
};


