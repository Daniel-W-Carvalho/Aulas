const btnSearch = document.getElementById("btn-search");
const inputSearch = document.getElementById("input-search");
const profileResults = document.getElementById("profile-results")

const BASE_URL = "https://api.github.com";


btnSearch.addEventListener('click', async () => {
    const userName = inputSearch.value;
    if (userName) {
        profileResults.innerHTML = `<p class="loading">Carregando...</p>`;

        try {
            const response = await fetch(`${BASE_URL}/users/${userName}`);

            if (!response.ok) {
                alert('Usuário não encontrado');
                profileResults.innerHTML = "";
                return;
            }

            const userData = await response.json();

            profileResults.innerHTML = `
                <div class="profile-card">
                    <img src="${userData.avatar_url}" alt="Avatar de ${userData.name}" class="profile-avatar">
                    <div class="profile-info">
                        <h2>${userData.name || 'Nome não disponivel'}</h2>
                        <p>${userData.bio || 'Bio não disponivel'}</p>
                    </div>
                </div>
                
                <div class="profile-counters">
                    <div class="followers">
                        <h4>👥Seguidores</h4>
                        <span>${userData.followers}</span>
                    </div>
                    <div class="following">
                        <h4>👀Seguindo</h4>
                        <span>${userData.following}</span>
                    </div>
                </div>
                `
                

        } catch (error) {
            console.error("Erro ao buscar o perfil do usuário", error);
            alert("Ocorreu um erro ao buscar o perfil do usuário. Por favor, tente novamente.")
            profileResults.innerHTML = "";
        }

    } else {
        alert('Por favor, digite um nome de usuário do GitHub');
        profileResults.innerHTML = "";
    }
});