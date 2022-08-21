/*
let gradosF, centigrados

gradosF = prompt("Ingrese los grados en Fahrenheith");
gradosF = parseInt(gradosF);


centigrados = (gradosF-32)/1.8;


//document.write(gradosF+" grados FahrenHeith son equivalentes a: "+centigrados+" grados centigrados");


alert(`${gradosF} grados FahrenHeith son equivalentes a: ${centigrados}grados centigrados`)
*/
//Hacer un programa que simule una alcansia

//Programa que soliciite  Nombre apellido edad y telefono  y muestre  "Tu nombre es nombre  y tu apellido es tienes edad y tu telefono "


//Programa que diga si es mayor de edad diga bienvenido y si es menor diga que es menor y si dojita una edad menor a cero decirle qu dijite una edad que corresponda

//Alcansia

let ingresos,valorTotal = 0, repeticiones=0

alert("Bienvenido a tu alcansia");

do {
    ingresos = prompt("Cuanto vas a agregar a tu alcansia?");
    ingresos = parseInt(ingresos);

    valorTotal = parseInt(valorTotal);

    valorTotal = ingresos+valorTotal

alert(`Tu alcansia tiene: ${valorTotal}`);

repeticiones = prompt(`Quieres agregar mas dinero?
                                    1.SI
                                    2.NO`)
repeticiones = parseInt(repeticiones);

} while (repeticiones ==1);

alert("Bye");





//Nombres y Apellidos
/*
let nombre,apellido,telefono,edad

nombre = prompt("Ingresa tu Nombre");
apellido = prompt("Ingresa tu apellido");
edad = prompt("Ingresa tu edad");
telefono = prompt("Ingresa tu telefono");


edad = parseInt(edad);
telefono = parseInt(telefono);

alert(`Tu nombre es: ${nombre} y tu apellido ${apellido}, tienes ${edad} años y tu telefono es: ${telefono}`)

*/

//Bar
/*
var edad;
edad = prompt("Ingresa tu edad");
edad = parseInt(edad);

if(edad > 18){
    let mensaje = "Bienvenido al bar";
    alert(`${mensaje}`)
} else if(edad < 18){
    mensaje="Eres menor no puedes entrar";
    alert(`${mensaje}`)
}else if(edad <0){
    mensaje="Pon una edad correspondiente";
    alert(`${mensaje}`)
}
*/