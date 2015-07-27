// Definición del modelo de Quiz

module.exports = function(sequilize, DataTypes) {
	return sequilize.define('Quiz',
		{ pregunta: DataTypes.STRING,
		  respuesta: DataTypes.STRING,
		});
}