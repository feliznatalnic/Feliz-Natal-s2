// Toca a musica assim que a imagem é selecionada
const img_presente = document.getElementById("presente");
const div_ativacao = document.getElementById("ativacao");
const div_principal = document.getElementById("main-index");
const neve = document.getElementById("neve");

img_presente.addEventListener('click', () => {
    const audio = document.getElementById("audio");
    audio.play();
    
    div_ativacao.classList.add("fora-de-cena");
    div_principal.classList.remove("fora-de-cena");
    neve.classList.remove("fora-de-cena");
});

// Formata a data da entrada da página inicial
function formatarData(texto) {
    let valor = texto.value.replace(/\D/g, '');

    if (valor.length > 2 && valor.length <= 4) {
        valor = valor.replace(/(\d{2})(\d{0,2})/, '$1/$2');
    } else if (valor.length > 4) {
        valor = valor.replace(/(\d{2})(\d{2})(\d{0,4})/, '$1/$2/$3');
    }

    texto.value = valor;
}

//Verifica a data
const botao_envio = document.getElementById("entrar");

function verificarData(data){
    if (data === "20/09/2022"){
        window.location.href = "/paginainicial.html";
    }
}

// Percebe o botão
botao_envio.addEventListener('click', () => {
    const senha_submetida = document.getElementById("senha").value;
    verificarData(senha_submetida);
})
