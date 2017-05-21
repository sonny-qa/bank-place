module.exports = function(app){
    var musicians = require('./controllers/musicians');

    app.post('/register', musicians.add);

}