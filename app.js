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

function sortearAmigo(){
    let numeroAmigos = grupoAmigos.length;
    let numeroRandom = Math.floor(Math.random()*numeroAmigos);
    lista = document.getElementById('resultado');

    if(numeroAmigos == 0){
        alert('Se necesita al menos un nombre para sortear.');
    } else{
        document.getElementById('listaAmigos').innerHTML = '';
        lista.innerHTML = '';

        let a = document.createElement('li');
        a.textContent = 'Gana ' + grupoAmigos[numeroRandom];
        lista.appendChild(a);
    }

    console.log(numeroAmigos)
    console.log(numeroRandom)
}