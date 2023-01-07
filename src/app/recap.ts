//TYPESCRIPT
//Se puede trabajar en tipados tanto en funciones como en variables
const username: string = "ulisescandela";
const sum = (a: number, b: number) => {
return a+b;
}
//Reduce errores, ya que se deben recibir los tipos de variables previamente configurados
sum(1,3);

//Es un lenguaje orientado a objetos
class Person{
    constructor(public age: number, public lastName: string){}
}

const nico = new Person(15, "Molina");
//Se pueden tener variables privadas:
nico.age;

