var path = require('path');

// Cargar modelo ORM
var Sequelize = require('sequelize');

// Usar BBDD SQlite:
var sequelize = new Sequelize(null,null,null,
						{dialect: "sqlite", storage: "quiz.sqlite"}
						);

// Importar la definición de la tabla Quiz en quiz.js
var Quiz = sequelize.import(path.join(__dirname,'quiz'));

exports.Quiz = Quiz; //exportar definición de tabla Quiz

// sequelize.sinc() crea e inicializa tabla de preguntas en DB
sequelize.sync().then(function()	{
	//success(..) ejecuta el manejador una vez creada la tabla
	Quiz.count().then(function (count){
		if(count === 0) { 	// la tabla se inicializa sólo si está vacía
			Quiz.create({ pregunta: 'Capital de Italia',
						  respuesta: 'Roma'
						})
			.then(function(){console.log('Base de datos inicializada')});
		};
	});
});	