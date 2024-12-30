const container_musicas = document.getElementById("container-musicas");
const container_memorias = document.getElementById("container-memorias");

async function pegarJSON(caminho){
    const resposta = await fetch(caminho);
    const dados_ = await resposta.json();
    
    return dados_;
};

function gerarMusica(musica){
    const container_menor = document.createElement('div');
    container_menor.classList.add("musica");

    const video = document.createElement('video');
    video.src = musica.caminho;
    video.controls = true;
    video.width = "250";

    const texto = document.createElement('p');
    texto.classList.add("descricao");
    texto.innerText = musica.descricao;

    container_menor.appendChild(video);
    container_menor.appendChild(texto);

    container_musicas.appendChild(container_menor);
};

if (document.body.classList.contains("pagina-musicas")) {
    pegarJSON("./dados/playlist.json").then((playlist) => {playlist.forEach((musica) => {
        gerarMusica(musica);
    })});
};

function gerarMemorias(memoria){
    const container_menor = document.createElement('div');
    container_menor.classList.add('memoria');

    const foto = document.createElement('img');
    foto.src = memoria.caminho;
    
    const data = document.createElement('h3');
    data.innerText = memoria.data;

    const texto = document.createElement('p');
    texto.classList.add('descricao');
    texto.innerText = memoria.descricao;

    container_menor.appendChild(foto);
    container_menor.appendChild(data);
    container_menor.appendChild(texto);

    container_memorias.appendChild(container_menor);
}

if (document.body.classList.contains("galeria")) {
    pegarJSON("./dados/memorias.json").then((memorias) => {memorias.forEach((memoria) => {
        gerarMemorias(memoria);
    })});
};