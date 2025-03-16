let grupoAmigos = [];

function agregarAmigo(){
    let nombreAmigo = document.getElementById('amigo').value;

    if (nombreAmigo == ''){
        alert('Por favor, inserte un nombre.');
    } else {
        grupoAmigos.push(nombreAmigo);
        agregarALista();
    }
    
    document.getElementById('amigo').value = '';    
    return;
}

function agregarALista(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for (let n of grupoAmigos){
        let amigo = document.createElement('li');
        amigo.textContent = n;
        lista.appendChild(amigo);
    }
    return;
}