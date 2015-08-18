// Definición del modelo de Quiz

module.exports = function(sequilize, DataTypes) {
	return sequilize.define(
		'Quiz',
		{ pregunta: {
        	type: DataTypes.STRING,
        	validate: { notEmpty: {msg: "-> Falta Pregunta"}}
      	},
        respuesta: {
     	   type: DataTypes.STRING,
        	validate: { notEmpty: {msg: "-> Falta Respuesta"}}
    	}
	});
}