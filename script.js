function calcular() {
    const f = Number(document.querySelector("#inputfrequencia").value); // frequencia
    const l = Number(document.querySelector("#inputcomprimento").value); // comprimento
    
    const v = f * l //fórmula

    document.querySelector("#resultado").textContent = "Velocidade:" + v.toFixed(2) + "m/s"; // oque faz o resultado aparecer
   
}

document.addEventListener("DOMContentLoaded", () => {
    const calcularButton = document.querySelector("#calcular");
    calcularButton.addEventListener("click", calcular); // oque faz o botão calcular a fórmula
});