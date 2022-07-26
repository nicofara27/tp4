// 1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.

const auto = {
    color: `rojo`,
    marca: `Honda`,
    modelo: `Civic`,
    encendido: false,
    encender: () => {
        auto.encendido = true;
        document.write(`El auto se ha encendido`)},
    apagar: () => {
        auto.encendido = false;
        document.write(`El auto se ha apagado`)}
}

