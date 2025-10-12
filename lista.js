let tarefas = [];

window.onload = function () {
  carregarTarefas();
};

function Adicionar() {
  const input = document.getElementById("inputTarefa");
  const textoTarefa = input.value;

  if (textoTarefa === "") {
    alert("Tarefeu a vazia");
    return;
  }

  tarefas.push(textoTarefa);
  input.value = "";

  salvarTarefas();
  mostrarTarefas();
}

function salvarTarefas() {
  localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

function mostrarTarefas() {
  // Parte 1: Pegar o elemento e depois limpar
  const lista = document.getElementById("lista");
  lista.innerHTML = "";

  // Loop que cria cada item
  tarefas.forEach((tarefa, indice) => {
    // Cria <li>
    const li = document.createElement("li");
    li.textContent = tarefa + " ";

    // Cria botao
    const botaoRemover = document.createElement("button");
    botaoRemover.textContent = "X";

    //Define o que o botão faz
    botaoRemover.onclick = function () {
      removerTarefa(indice);
    };

    //Adiciona botao no <li>
    li.appendChild(botaoRemover);

    //Adiciona <li> na lista
    lista.appendChild(li);
  });

  const contador = document.getElementById("contador");
  const numeroTarefas = tarefas.length;
  let palavra;
  if (numeroTarefas === 1) {
    palavra = "tarefa";
  } else {
    palavra = "tarefas";
  }
}

function removerTarefa(indice) {
  tarefas.splice(indice, 1);

  salvarTarefas();
  mostrarTarefas();
}

function limparTodas() {
  tarefas = [];
  salvarTarefas();
  mostrarTarefas();
}
