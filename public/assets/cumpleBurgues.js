let participantes = [
    { id: 1001, name: 'Oscar', telefono: 51991817556 },
    { id: 1002, name: 'Jose', telefono: 51921170648 },
    { id: 1003, name: 'Victor', telefono: 51955126022 },
    { id: 1004, name: 'Michael', telefono: 51992973122 },
    { id: 1005, name: 'Felix', telefono: 51994705884 },
    { id: 1006, name: 'Patrick', telefono: 51999947642 }
];

let contenidoTable = {
    nombre: '',
    cuota: '',
    mensaje: ''
};

let mensajes = [];

let evento = {
    id: 200,
    descripcion: 'Cumple Burgues',
    montoGastado: 696.00,
    fecha: '',
    participantesIds: [
        1001,
        1002,
        1003,
        1004,
        1005,
        1006
    ]
};

participantes.forEach(element => {
    let cuota = (evento.montoGastado / evento.participantesIds.length);
    contenidoTable.nombre = element.name;
    contenidoTable.cuota = cuota;
    contenidoTable.mensaje = urlMensajeWsp(
        element.telefono,
        replaceBlankSpace(mensaje(evento.descripcion, element.name, cuota))
    );
    mensajes.push(contenidoTable);
    contenidoTable = clean();
});

let htmlTbody = '';

mensajes.forEach(element => {
    htmlTbody += ` 
            <tr>
                    <td>${element.nombre}</td>
                    <td>${element.cuota}</td>
                    <td><a target="_blank" class="btn btn-info" href="${element.mensaje}">Enviar</a></td>
            </tr> 
            `;
});

function mensaje(eventoDesc, name, cuota) {
    return ` *${name}*, tu cuota es de S/. *${cuota}* del evento *${eventoDesc}*.`;
}

function replaceBlankSpace(mensaje) {
    array = mensaje.split(' ');
    for (let index = 0; index < array.length; index++) {
        mensaje = mensaje.replace(' ', '%20');
    }
    return mensaje;
}

function urlMensajeWsp(telefono, mensaje) {
    return `https://wa.me/${telefono}?text=${mensaje}`;
};

function clean() {
    return {
        nombre: '',
        cuota: '',
        mensaje: ''
    }
}