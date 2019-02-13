import Auto from "./Auto.js";

let auto1 = new Auto("Ford", 2000, "rojo", 100);
let auto2 = new Auto("Nissan", 2010, "Azul",);
let auto3 = new Auto("Toyota", 2018, "blanco");

console.log(auto1.modelo);
auto1.modelo = 2019;
auto1.color = "Blanco";

auto1.encender();
auto1.avanzar(50, 1.5);
auto1.apagar();
auto1.avanzar(50, 1.5);

console.log(`Kilometraje ${auto1.kilometraje}`);
auto1.kilometraje = 5;
console.log(`Kilometraje ${auto1.kilometraje}`);