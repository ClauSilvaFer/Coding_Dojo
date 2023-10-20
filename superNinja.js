class Ninja{
    constructor(nombreAtr, saludAtr, velocidadAtr, fuerzaAtr){
        this.nombre = nombreAtr;
        this.salud = saludAtr;
        this.velocidad = velocidadAtr;
        this.fuerza = fuerzaAtr;
    }
    drinkSake(){
        console.log(this.salud + 10)

    }
}
class Sensei extends Ninja{
    constructor(nombreAtr, saludAtr, velocidadAtr, fuerzaAtr, sabiduriaAtr){
        super(nombreAtr, saludAtr, velocidadAtr, fuerzaAtr)
        this.sabudiria = sabiduriaAtr;
    }

    speakWisdom(){
        this.drinkSake()
    }

    }


const Ninja1 = new Ninja("Lee", 100, 3, 3);
console.log(Ninja1);

const Sensei1 = new Sensei("Chan", 200, 10, 10, 10);
console.log(Sensei1);


