'use strict'

let AMOUNT_DIAMONDS = 30;

let GamePlayManager = {
    //inicializa estado se ejecuta con start 
    //se inicializan variables
    init: function () {
        //lo que se muestra en pantalla se adapta a las dimensiones de la pantalla
        game.scale.scaleMod = Phaser.ScaleManager.SHOW_ALL;

        //alinear juego horizontal y verticalmente en la pantalla
        game.scale.pageAlignVertically = true;
        game.scale.pageAlignHorizontally = true;

        this.flagFirstMouseDown = false;
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
        this.horse.anchor.setTo(0.5, 0.5);

        //rotar sprite
        //this.horse.angle = 0; //valor en grados

        //escala del sprite
        //this.horse.scale.setTo(0.5,0.5);

        //opacidad del sprite
        //this.horse.alpha = 0.3;

        game.input.onDown.add(this.onTap, this);

        this.diamonds = [];

        for (let i = 0; i < AMOUNT_DIAMONDS; i++) {
            let diamond = game.add.sprite(100, 100, 'diamonds');
            diamond.frame = game.rnd.integerInRange(0, 3);
            diamond.scale.setTo(0.3 + game.rnd.frac()); //frac retorna un valor entre 0 y 1
            diamond.anchor.setTo(0.5);
            diamond.x = game.rnd.integerInRange(50, 1050);
            diamond.y = game.rnd.integerInRange(50, 600);
        }
    },
    onTap: function () {
        this.flagFirstMouseDown = true;
    },
    //frame a frame lo llama
    update: function () {
        // this.horse.angle += 1;

        if (this.flagFirstMouseDown) {
            let pointerX = game.input.x;
            let pointerY = game.input.y;

            let distX = pointerX - this.horse.x;
            let distY = pointerY - this.horse.y;

            if (distX > 0) {
                this.horse.scale.setTo(1, 1);
            } else {
                this.horse.scale.setTo(-1, 1);
            }

            this.horse.x += distX * 0.02;
            this.horse.y += distY * 0.02;
        }
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