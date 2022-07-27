// 2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
//* Una propiedad titular con el valor "Alex".
//* Una propiedad saldo, teniendo como valor inicial 0.
//* Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
//* Un método extraer() que permita retirar la cantidad pasada como parámetro.
//* Un método informar() que retorne la información del estado de la cuenta. 

// Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.

let cuenta = {
    titular: `Alex`,
    saldo: 0,
    ingresar(deposito){this.saldo += deposito;},
    extraer(montoExtraer){
        if(this.saldo >= montoExtraer){
            this.saldo -=montoExtraer;
        } else {
            alert(`Usted no tiene dinero insuficiente`);
        }
    },
    informar(){
        console.log(this)
        document.write(`<p class="texto">La cuenta perteneciente a ${this.titular} tiene un balance de ${this.saldo}<br></p>`);}
};

cuenta.informar();

let deposito = parseFloat(prompt(`Ingrese un monto`));
cuenta.ingresar(deposito);

cuenta.informar();

let montoExtraer = parseFloat(prompt(`Ingrese un monto a retirar`));
cuenta.extraer(montoExtraer);

cuenta.informar();
