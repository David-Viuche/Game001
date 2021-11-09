GamePlayManager = {
    //inicializa estado se ejecuta con start 
    //se inicializan variables
    init: function () {
        console.log('init');
    },
    //carga recursos del proyecto
    preload: function () {
        console.log('preload');
    },
    //una vez cargue recursos llama create
    create: function () {
        console.log('create');
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
let game = new Phaser.Game(1136, 640, Phaser.AUTO);

//se asgina estado al objeto GamePlayManager con el id gameplay
game.state.add('gameplay', GamePlayManager);

//inicia el state con id gameplay
game.state.start('gameplay')