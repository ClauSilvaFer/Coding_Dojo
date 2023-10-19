class Ninja {
    constructor(nombreAtr, saludAtr, velocidadAtr, fuerzaAtr){
        this.nombre = nombreAtr;
        this.salud = saludAtr;
        this.velocidad = velocidadAtr;
        this.fuerza = fuerzaAtr;
    }

    sayName(){
        console.log(this.nombre);

    }
    showStats(){
        console.log(this.nombre);
        console.log(this.salud);
        console.log(this.velocidad);
        console.log(this.fuerza);
    }
    drinkSake(){
        console.log(this.salud + 10)
    }

    }
        


const Ninja1 = new Ninja("Lee", 100, 3, 3);
Ninja1.sayName();
Ninja1.showStats();
Ninja1.drinkSake();
console.log(Ninja1)