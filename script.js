let contador = 1 


function drag(){ }

function over() { }

function drop() {}









function adicionar(elemento){

    const ulId = elemento.previousElementSibling.id
    const tarefa = prompt("qual a tarefa ?")
    const board = document.getElementById(ulId)
      

const template = `

<li id="${contador++}">   ${tarefa}    <p  onclick="remover(this)" >X</p>     </li>


`

console.log(template)

board.innerHTML += template
}




function remover(elemento){
   document.getElementById(elemento.parentElement.id).remove()  
    
}