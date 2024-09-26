

let listado = []

cargarListado();

function cargarListado() {

    const listadoGuardado = localStorage.getItem('listado');

    if (listadoGuardado) {
        listado = JSON.parse(listadoGuardado);

        mostrarListado();
    }
}

function mostrarListado() {

    const lista = document.getElementById('contenedor');
    lista.innerHTML = '';

    listado.forEach(elementoLista => {
        const li = document.createElement('li');
        li.textContent = elementoLista;
        lista.appendChild(li);
    });

}


function agregarElemento() {
    const nuevoElemento = document.getElementById('item').value;

    if (nuevoElemento.trim() !== '') {
        listado.push(nuevoElemento); 
        localStorage.setItem('listado', JSON.stringify(listado)); 
        mostrarListado(); 
        document.getElementById('item').value = ''; 
    }
}

function limpiarListado() {
    localStorage.removeItem('listado'); 
    listado = []; 
    mostrarListado(); 
}

document.getElementById('agregar').addEventListener('click', agregarElemento);
document.getElementById('limpiar').addEventListener('click', limpiarListado);
