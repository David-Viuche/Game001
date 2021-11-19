'use strict'
let GamePlayManager = {
    //inicializa estado se ejecuta con start 
    //se inicializan variables
    init: function () {
        //lo que se muestra en pantalla se adapta a las dimensiones de la pantalla
        game.scale.scaleMod = Phaser.ScaleManager.SHOW_ALL;

        //alinear juego horizontal y verticalmente en la pantalla
        game.scale.pageAlignVertically = true;
        game.scale.pageAlignHorizontally = true;
    },
    //carga recursos del proyecto
    preload: function () {
        //se carga imagen de fondo
        game.load.image('background', 'assets/images/background.png');

        //cargar sprite sheet (varios sprites en una sola imagen)
        //(id, ruta, ancho sprite, alto sprite, cantidad)
        game.load.spritesheet('horse', 'assets/images/horse.png', 84, 156, 2);

        game.load.spritesheet('diamonds', 'assets/images/diamonds.png', 81, 84, 4);
    },
    //una vez cargue recursos llama create
    create: function () {
        //agregar sprite (coordenadas, id imagen)
        game.add.sprite(0, 0, 'background');

        //guardar instacia del sprite en el objeto manager
        this.horse = game.add.sprite(0, 0, 'horse');

        this.diamonds = game.add.sprite(0, 0, 'diamonds');

        this.diamonds.frame = 0;

        //propiedad numero de sprinte a mostrar
        this.horse.frame = 1;
        //mover sprite al centro de la pantalla
        this.horse.x = game.width / 2;
        this.horse.y = game.height / 2;

        //set el punto de rotacion en la pantalla o movimiento relativo
        this.horse.anchor.setTo(0.5,0.5);

        //rotar sprite
        this.horse.angle = 15; //valor en grados
    },
    //frame a frame lo llama
    update: function () {
        
    }
}

// instancia del juego (dimesiones de la pantalla, tipo de renderizado)
// Phaser.CANVAS por defecto
// Phaser.WEBGL usa la tarjeta grafica 
// Phaser.AUTO intenta usar WEBGL si no encuentra tarjeta grafica usa CANVAS
let game = new Phaser.Game(1136, 640, Phaser.CANVAS);

//se asgina estado al objeto GamePlayManager con el id gameplay
game.state.add('gameplay', GamePlayManager);

//inicia el state con id gameplay
game.state.start('gameplay');