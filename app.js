//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Array para armazenar os amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo () {
    const nome = document.getElementById('amigo').value.trim();
   
if (nome!=='') {
    amigos.push(nome);

    const lista = document.getElementById("listaAmigos");
        const li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild(li);

        document.getElementById("amigo").value = "";

        if (amigos.length > 1) {
            document.querySelector(".button-draw").disabled = false;
        }
    } else {
        alert("Por favor, insira um nome.");
    }

}

// Função para sortear amigo secreto
function sortearAmigo() {
    if (amigos.length <= 1) {
        alert("Você precisa de pelo menos dois amigos para o sorteio.");
        return;
    }

    let sorteados = embaralhar([...amigos]);

    // Garante que ninguém tire a si mesmo
    while (temAlguemQueTirouASiMesmo(amigos, sorteados)) {
        sorteados = embaralhar([...amigos]);
    }

    const resultadoList = document.getElementById("resultado");
    resultadoList.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = `${amigos[i]} tirou ${sorteados[i]}`;
        resultadoList.appendChild(li);
    }

    document.querySelector(".button-draw").disabled = true;
}

// Função auxiliar para embaralhar array (algoritmo de Fisher-Yates)
function embaralhar(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Função para verificar se alguém tirou a si mesmo
function temAlguemQueTirouASiMesmo(original, sorteado) {
    for (let i = 0; i < original.length; i++) {
        if (original[i] === sorteado[i]) return true;
    }
    return false;
}
