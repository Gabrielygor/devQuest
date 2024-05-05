const screen = {

    userProfile: document.querySelector('.profile-data'),

    renderUser(user) {

        this.userProfile.innerHTML = `
        
        <div class="info">
            <img src="${user.avatarUrl}" alt="Foto de perfil do Usuárioi">
            <div class="data">
                <h1>${user.name ?? 'Não possue nome cadastrada'}</h1>
                <p>${user.bio ?? 'O usuário não possui bios cadastrada'}
            </div> 
        </div>`


        let repositoriesIntens = ''
        user.repositories.forEach(repo => repositoriesIntens += `<li> <a href="${repo.html_url}" target="_blank"> ${repo.name} </a> </li>`)

        if(user.repositories.length > 0 ) {
            this.userProfile.innerHTML += ` 
            
            <div class="repositories section">
                <h2> Repositórios</h2>
                <ul> ${repositoriesIntens}  </ul>
            </div>
            
            `
        }
    }
};


export { screen }
