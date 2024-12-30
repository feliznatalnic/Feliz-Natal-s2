// Quanto tempo nos conhecemos
const data = document.getElementById("data-conhecidos");
const dataInicial = new Date("2022-09-20T00:00:00").getTime();

function atualizarTimer() {
    const agora = new Date().getTime();
    const tempoPassado = agora - dataInicial;

    const anos = Math.floor(tempoPassado / (1000 * 60 * 60 * 24 * 365.25));
    const diasRestantes = tempoPassado % (1000 * 60 * 60 * 24 * 365.25);
    const dias = Math.floor(diasRestantes / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diasRestantes % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diasRestantes % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diasRestantes % (1000 * 60)) / 1000);

    data.innerHTML = `${anos}a ${dias}d ${horas}h ${minutos}m ${segundos}s`;
}

atualizarTimer();
setInterval(atualizarTimer, 1000);