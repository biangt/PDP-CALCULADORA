const readline = require('readline'); //este es el modulo que permite leer desde la consola
//funcinones para cada operacion
function suma(a, b) {
	return a + b;
}

function resta(a, b) {
	return a - b;
}

function multiplicacion(a, b) {
	return a * b;
}

function division(a, b) {
	if (b === 0) {
		return 'Error: División por cero';
	}
	return a / b;
}

//funcion que selecciona la operacion
function calcular(operando1, operando2, operador) {
	switch (operador) {
		case '+':
			return suma(operando1, operando2);
		case '-':
			return resta(operando1, operando2);
		case '*':
			return multiplicacion(operando1, operando2);
		case '/':
			return division(operando1, operando2);
		default:
			return 'Operador no válido';
	}
}

//en esta parte le pido los datos y se muestran en consola
const rl = readline.createInterface({ //crea la interfaz de lectura, es como un puente entre lo que escribo y lo que se muestra
    input: process.stdin,
    output: process.stdout
});

console.log('------CALCULADORA-------');
function pedirdatos() {
	rl.question('Ingresa el primer numero: ', (num1) => { //question es una funcion que hace una pregunta y espera la respuesta;
	const numero1 = parseFloat(num1); //parseFloat convierte el string a numero decimal,const lo declara como que no va a cambiar;
if (isNaN(numero1)) { //isNaN verifica si no es un numero
	console.log('Error: El primer valor no es un numero valido');
	return pedirdatos(); //si no es un numero vuelve a pedir los datos
	};
	rl.question('Ingresa el segundo numero: ', (num2) => {
		const numero2 = parseFloat(num2);
if (isNaN(numero2)) {
	console.log('Error: El segundo valor no es un numero valido');
	return pedirdatos();
	}
	rl.question('Ingresa la operacion (+, -, *, /): ', (oper) => {
		const resultado = calcular(numero1, numero2, oper); //llama a la funcion calcular y guarda el resultado
		console.log(`El resultado de ${numero1} ${oper} ${numero2} es: ${resultado}`); //${} es para insertar variables en un string
		//pregunta si desea hacer otra operacion o salir
	rl.question("¿Qué deseas hacer? Presione:\n1. Para hacer otra operación\nCualquier tecla para [Salir]\nOpción: ", (opcion) => {
					if (opcion === "1") {
						pedirDatos();
					} else{
						console.log("¡Gracias por usar la calculadora!");
						rl.close(); //cierra la interfaz de lectura
					}
				});
	});
});
});
};
pedirdatos(); //llama a la funcion para iniciar el proceso