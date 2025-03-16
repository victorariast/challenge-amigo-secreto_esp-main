// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let grupoAmigos = [];

function agregarAmigo(){
    let nombreAmigo = document.getElementById('amigo').value;

    if (nombreAmigo == ''){
        alert('Por favor, inserte un nombre.');
    } else {
        grupoAmigos.push(nombreAmigo);
    }
    
    document.getElementById('amigo').value = '';
    console.log(grupoAmigos);
    return;
}

