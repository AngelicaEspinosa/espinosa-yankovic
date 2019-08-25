var trabajos = [{
    figure: "media/Conalma1.png",
    alt: "Cojín gris claro con forma de letra J, bajo este un logo con forma de hoja de árból color celeste que dice Conalma en minúscula en blanco y más pequeño mi recuerdo contigo tambien en color blanco y minúsculas",
    title: "Conalma",
    about: "Cojín que mediante su forma y un sistema para incorporarle prendas, permite abrazarlas y sentir su olor y textura , entregando una sensación de cercanía",
    url: "https://player.vimeo.com/video/354655439"
}, {
    figure: "media/mupportafolio.png",
    alt: "Ciclo de uso de Mup; primero una mano con el guante con transparencia, la mano con guante agarrando un pañal usado cerrado, la misma mano con el borde del guante en la muñeca para sacarselo,se saca el guante y el pañal queda dentro de este cerrandolo tirando del hilo del extremo superior, el pañal queda dentro del guante cerrado por el hilo. El proceso anterior en ilustraciones ordenadas en un circulo, en su interior el logo de Mup en letra minúscula de color amarillo y una gota de agua celeste dentro de la letra U",
    title: "Mup",
    about: "Bolsa biodegradable que neutraliza los olores,tiene forma de guante y está cubierta de wipe",
    url: "https://drive.google.com/drive/folders/1qo5hoxRFV_VyNSj8JRd-Ii_WECxEmLE4"
}, {
    figure: "media/merengosa.png",
    alt: "Vaso de galleta de nuez con merengue duro arriba simulando helado, con gotas de caramelo de vino tinto. Todo sobre una servilleta de papel blanca",
    title: "La Merengosa",
    about: "Es un rico postre helado basado en el clásico turrón de vino, rescatando así la tradición chilena, el cual se presentó en una feria gastronómica en el campus para la cual se creó una marca y stand",
    url: "https://drive.google.com/drive/folders/1mK60e2dKIbLyqXo0GZTu9fMDGiGIi7jr"
}, {
    figure: "media/pad.png",
    alt: "En la izquierda una persona con amputación en su brazo bajo el codo usando la paleta de ping pong Pad, al lado derecho una persona sin amputación utilizando la misma paleta de tenis de mesa. En el centro el logo de Pad en minúscula en dos colores, rojo arriba, un corte blanco en el medio y negro abajo",
    title: "Pad",
    about: "Paleta para tenis de mesa, que se pone abajo del codo, permitiendo que personas con falta de extremidades superiores también puedan jugar este deporte",
    url: "https://player.vimeo.com/video/355590258"
}, {
    figure: "media/protection.png",
    alt: "Tapa de olla transparente de forma de cúpula con bordes negros en su parte inferior,con un largo mango negro con pomo, sobre su packaging de color negro con rojo. Al lado derecho el revolvedor en forma de paleta negro.",
    title: "Protection",
    about: "Tapa anti salpicaduras con revolvedor removible, que permite cocinar distintas preparaciones sin necesidad de destapar, reduciendo el olor en el ambiente",
    url: "https://player.vimeo.com/video/355735733"
}, {
    figure: "media/Estampado.jpg",
    alt: "Arriba de izquierda a derecha; dos baberos con forma de bandana blancos con estampados en color celeste y amarillos, un conejo de peluche con retazos de tela de color blanco y amarillo, dos tutos de tela blanca estampada en celeste y amarillo, bolsa de crea natural con el nombre Florencia estampado en negro y el logo de la tienda, tarjetas de presentación en papel craft con letra negra. Abajo de izquierda a derecha; archivador blanco con fotos de patrones, timbres de madera con diferentes figuras y letras, madera con hoyos para introducir timbres y crear patrones",
    title: "Sistema de Estampado",
    about: "Trabajo colaborativo con microemprendedora de productos para guaguas",
    url: "https://drive.google.com/drive/folders/1YpG-acDx0vudmEPfXf-a_urnK4TtQMER"
}, {
    figure: "media/Maquina.png",
    alt: "Modelo en 3D de una máquina de escribir marca Erika de color negro",
    title: "Modelos 3D",
    about: "Manejo de programas de modelado tridimensional y animación",
    url: "https://drive.google.com/drive/folders/1bF6MROF3JyNpH3EhsxQ1cb56G3nBOXa9",

}];
// LUEGO CREAMOS PARTES DEL SITIO CON CADA DATO CONTENIDO EN LA VARIABLE
$.each(trabajos, function(i, val) {
    var uno = '<figure><img src="' + trabajos[i].figure + '" alt="' + trabajos[i].alt + '"/></figure>';
    var dos = '<h4>' + trabajos[i].title + '</h4>';
    var tres = '<p>' + trabajos[i].about + '</p>';
    var cuatro = '<p><a href= "' + trabajos[i].url + '" >Ver más</a><p>';
    $('#portafolio').append('<div class="item">' + uno + dos + tres + cuatro + '</div>')
});
