let contador = 0;

function drag(event){
    event.dataTransfer.setData("card", event.target.id)
 }

function over(event) {
    event.preventDefault()
 }

function drop(event, id) {
    event.preventDefault();
    const target = document.getElementById(id);
    const data = event.dataTransfer.getData("card");
    const card = document.getElementById(data);
    target.appendChild(card);
    event.dataTransfer.clearData();
}


function adicionar(elemento){

    const ulId = elemento.previousElementSibling.id
    const tarefa = prompt("qual a tarefa ?")
    const board = document.getElementById(ulId)
    

if(tarefa !== ""){
    
    const template = `
        <li id="${contador++}" draggable="true" ondragstart="drag(event)">
           ${tarefa}    
           <p onclick="remover(this)" >X</p>
        </li>`

    board.innerHTML += template
      }
    }

function remover(elemento){
   document.getElementById(elemento.parentElement.id).remove()  
    
}


function mudarCor(){
    var corNOVA = document.getElementById("cor").value; //buscando o id da cor do input de cor
     document.getElementById(`container`).style.backgroundColor = corNOVA//esta selecionando a div pra pegar e trocar a cor do fundo
} 
function mudarCor1(){
    var corNOVA = document.getElementById("cor1").value; //buscando o id da cor do input de cor
     document.getElementById(`container1`).style.backgroundColor = corNOVA//esta selecionando a div pra pegar e trocar a cor do fundo
} 
function mudarCor2(){
    var corNOVA = document.getElementById("cor2").value; //buscando o id da cor do input de cor
     document.getElementById(`container2`).style.backgroundColor = corNOVA//esta selecionando a div pra pegar e trocar a cor do fundo
} 