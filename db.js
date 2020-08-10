const Sequelize = require('sequelize');

const FilmModel = require('./models/films');

const sequelize = new Sequelize('Node-Server', 'DQS-Dev', 'Quito.2019', {
    host: '192.168.100.10',
    dialect: 'mysql'
});

const Film = FilmModel(sequelize, Sequelize);

sequelize.sync({ force: false})
    .then(() => {
        console.log('Tablas Sincronizadas');
    });

module.exports = {
    Film
}