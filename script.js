let contador = 1 
const input = document.getElementById("nome");


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

<li id="${contador++}" draggable="true" ondragstart="drag(event)">   ${tarefa}    <p  onclick="remover(this)" >X</p>     </li>


`

// console.log(template)

board.innerHTML += template
}

}


function remover(elemento){
   document.getElementById(elemento.parentElement.id).remove()  
    
}