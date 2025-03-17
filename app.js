let grupoAmigos = [];
let listaAmigos = document.getElementById('listaAmigos');
let listaResultado = document.getElementById('resultado');

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
    listaAmigos.innerHTML = '';

    for (let amigo of grupoAmigos){
        let nuevoElemento = document.createElement('li');
        nuevoElemento.textContent = amigo;
        listaAmigos.appendChild(nuevoElemento);
    }
    return;
}

function sortearAmigo(){
    let numeroAmigos = grupoAmigos.length;
    let numeroRandom = Math.floor(Math.random()*numeroAmigos);

    if(numeroAmigos == 0){
        alert('Se necesita al menos un nombre para sortear.');
    } else{
        listaAmigos.innerHTML = '';
        listaResultado.innerHTML = '';

        let nuevoElemento = document.createElement('li');
        nuevoElemento.textContent = 'El amigo secreto sorteado es: ' + grupoAmigos[numeroRandom];
        listaResultado.appendChild(nuevoElemento);
    }
    return;
}