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

    }
};


export { screen }