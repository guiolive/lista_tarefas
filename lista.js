let tarefas = [];

function Adicionar() {
  const input = document.getElementById("inputTarefa");
  const textoTarefa = input.value;

  if (textoTarefa === "") {
    alert("Tarefa vazia, digite uma tarefa");
    return;
  }

  tarefas.push(textoTarefa);

  input.value = "";

  mostrarTarefas();
  salvarTarefas();
}

function mostrarTarefas() {
  const lista = document.getElementById("lista");
  lista.innerHTML = "";

  tarefas.forEach((tarefa, indice) => {
    const li = document.createElement("li");
    li.textContent = tarefa + " ";
    const botaoRemover = document.createElement("button");
    botaoRemover.textContent = "X";

    botaoRemover.onclick = function () {
      removerTarefa(indice);
    };

    li.appendChild(botaoRemover);
    lista.appendChild(li);
  });

  const contador = document.getElementById("contador");
  const numeroTarefas = tarefas.length;
  contador.textContent = `Voce tem ${numeroTarefas} tarefas`;
}

function removerTarefa(indice) {
  tarefas.splice(indice, 1);
  mostrarTarefas();
  salvarTarefas();
}

function salvarTarefas() {
  localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

function carregarTarefas() {
  const tarefasString = localStorage.getItem("tarefas");
  if (tarefasString) {
    tarefas = JSON.parse(tarefasString);
    mostrarTarefas();
  }
}

window.onload = function () {
  carregarTarefas();
};
