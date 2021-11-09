GamePlayManager = {
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
    },
    //una vez cargue recursos llama create
    create: function () {
        //agregar sprite (coordenadas, id imagen)
        game.add.sprite(0, 0, 'background');
    },
    //frame a frame lo llama
    update: function () {
        console.log('update');
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