var express    = require('express'),
    path       = require('path'),
    app        = express(), // call express
    bodyParser = require('body-parser'),
    port,
    router,
    open = require('open');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use('/app', express.static(path.join(__dirname, 'dist/')));

port = 3100;

router = express.Router();

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/dist/index.html'));

});

router.get('/angular-base', function (req, res) {

    res.sendFile(path.join(__dirname, '/dist/angular-base.html'));
});

router.get('/angular-routes', function (req, res) {

    res.sendFile(path.join(__dirname, '/dist/angular-routes.html'));
});

router.get('/bootstrap-base', function (req, res) {

    res.sendFile(path.join(__dirname, '/dist/bootstrap-base.html'));
});

router.get('/bootstrap-grid', function (req, res) {

    res.sendFile(path.join(__dirname, '/dist/bootstrap-grid.html'));
});


app.use('/app', router);

module.exports = app;

app.listen(port);
console.log('Start project ' + port);
console.log("");
console.log("");
console.log("Amei for Framework");
console.log("------------------------------------------");
console.log("    #       #        #  # # # # #   # # # #   ");
console.log("   #  #     ##      ##  #              #     ");
console.log("  #    #    #  #   # #  # # # # #      #     ");
console.log(" # # # ##   #   # #  #  #              #      ");
console.log("#        #  #    #   #  # # # # #   # # # #  ");
console.log("------------------------------------------");
console.log("");
open('http://localhost:3100/app/');
