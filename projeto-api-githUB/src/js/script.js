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


async function user(userName) {
    const response = await fetch(`https:api.github.com/users/${userName}`)
    return await response.json();
};

async function repos(userName) {
    const response = await fetch(`https:api.github.com/users/${userName}/repos`)
    return await response.json();
}


function getUserProfile(userName) {

    user(userName).then((userData) => {
        let userInfo = `
        
        <div class="info">
            <img src="${userData.avatar_url}" alt="Foto de perfil do Usuárioi">
            <div class="data">
                <h1>${userData.name ?? 'Não possue nome cadastrada'}</h1>
                <p>${userData.bio ?? 'O usuário não possui bios cadastrada'}
            </div> 
        </div>`
        document.querySelector('.profile-data').innerHTML = userInfo

        getUserRepositories(userName)

    });

};

function getUserRepositories(userName) {

    repos(userName).then(reposData => {
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
