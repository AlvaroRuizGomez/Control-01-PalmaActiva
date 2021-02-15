//VARIABLES

// Posición inicial de racing-car img
const RUN_CAR = 30;

// Se localiza en la posicion de inicio la imagen del coche racing-car
const ImgRacingCar = document.getElementById("coche");
ImgRacingCar.style.transform = `translate(0px, ${RUN_CAR}px)`;

//variables posicion del coche
let racingCar_x = 0;
let racingCar_y = RUN_CAR;

//variables para controlar si hemos llegado a las metas
let starMeta1 = false;
let starMeta2 = false;
let starMeta3 = false;

//nombre de las flechas y espacio
//para cambiar solo tendremos que cambiar desde aqui
const tecla = {
    Acelerar: ["arrowdown"],
    Izquierda: ["arrowleft"],
    Derecha: ["arrowright",],
}

//variables con las posiciones donde tenemos que mostrar las metas
//al alcanzar lso distintos puntos mostramos la meta
// const ALCANZADA_META_1 = 80;
// const ALCANZADA_META_2 = 85;
// const ALCANZADA_META_3 = 90;
const ALCANZADA_META_1 = 50;
const ALCANZADA_META_2 = 40;
const ALCANZADA_META_3 = 30;


//leyenda
const ACELERA = document.getElementById("contolesAdelante");
const IZQUIERDA = document.getElementById("contolesIzda");
const DERECHA = document.getElementById("contolesDcha");


//metas que iran apareciendo
const meta_uno = document.getElementById("meta_1");
const meta_dos = document.getElementById("meta_2");
const meta_tres = document.getElementById("meta_3");


//le añadimos a la clase ver que tiene un display:block
const muestra_meta = (mostrar) => {
    mostrar.classList.add("ver");
};

//funcio controla movimiento hacia abajo del coche
const Acelerar = (elemento) => {
    // movimiento del coche
    racingCar_y += 30;
};

//funcion controla movimiento hacia izquierda del coche
const Izquierda = (elemento) => {
    racingCar_y += 10;
    racingCar_x -= 10;
};

//movimiento hacia la derecha del coche
const Derecha = (elemento) => {
    racingCar_y += 10;
    racingCar_x += 10;
};

// Control
const comprobar_posiciones_coche = (posicion_y) => {
    //el coche va llegando a las distintas posiciones para mostrar las metas
    if (racingCar_y >= ALCANZADA_META_3 && starMeta3 === false) {
        starMeta3 = true;
        muestra_meta(meta_3);
    }
    else if (racingCar_y >= ALCANZADA_META_2 && starMeta2 === false) {
        starMeta2 = true;
        muestra_meta(meta_2);
    }
    else if (racingCar_y >= ALCANZADA_META_1 && starMeta1 === false) {
        starMeta1 = true;
        muestra_meta(meta_1);
    }
};

/***********************************
 * ****************** LÓGICA *******
 ************************************/
// Control de entrada de pulsación de teclas
document.addEventListener("keydown", (evento) => {
    evento.preventDefault();

    console.log('racingCar_x racingCar_y :',racingCar_x, racingCar_y)

    comprobar_posiciones_coche(racingCar_y);

    switch (evento.key.toLowerCase()) {
        case tecla.Acelerar[0]: 
             Acelerar(ACELERA);
        break;

        case tecla.Izquierda[0]: 
            Izquierda(IZQUIERDA);
        break;

        case tecla.Derecha[0]:
            Derecha(DERECHA);
        break;

        default:
            // console.log('** No entró en ningun case en el switch **')
        return;
    }

    //pintamos racing-car en la posicion actual
    ImgRacingCar.style.transform = `translate(${racingCar_x}px, ${racingCar_y}px)`;

    // ponemos en movimiento la carretera
    window.scrollTo({
        top: racingCar_y - RUN_CAR * 3,
        left: racingCar_x,
    });
});

// Muestra metas
window.addEventListener("scroll", () => {
    comprobar_posiciones_coche(scrollY);
});

