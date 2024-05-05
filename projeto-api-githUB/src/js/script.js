import { getUser } from "./services/user.js"
import { getRepos } from "./services/repos.js";

import { user } from "./objects/user.js"
import { screen } from "./objects/screen.js";


document.getElementById('btn-search').addEventListener('click', () => {

    const userName = document.getElementById('input-search').value;
    getUserProfile(userName);

});

document.getElementById('input-search').addEventListener('keyup', (e) => {
    const userName = e.target.value
    const key = e.which || e.keyCode
    const isEnterKEyPressed = key === 13

    if (isEnterKEyPressed) {
        getUserProfile(userName)
    }

});


async function getUserProfile(userName) {

    const userResponse = await getUser(userName) 
    user.setInfor(userResponse)
    screen.renderUser(user)

};

function getUserRepositories(userName) {

    getRepos(userName).then(reposData => {
        let respositoriesItens = ""

        reposData.forEach(repo => {
            respositoriesItens += `<li> <a href="${repo.html_url}" target="_blank"> ${repo.name} </a> </li>`
        })

        document.querySelector('.profile-data').innerHTML += `
            
        <div class="repositories section">
            <h2> Repositórios</h2>
            <ul> ${respositoriesItens}  </ul>
        </div>
        `

    });
};
