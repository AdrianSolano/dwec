class cocheVacio{

}
let toyota = new cocheVacio();
// console.log(toyota);
//PADRE (Herencia)
class coche{
    constructor(marca,modelo,ruedas){
        this.marca = marca;
        this.modelo = modelo;
        this.ruedas = ruedas;
    }
    mostrarCoche(){
        return "Marca: " + this.marca + " Modelo: "+ this.modelo + " Ruedas: " + this.ruedas;
    }
    get marca(){
        return this._marca;
    }
    get modelo(){
        return this._modelo;
    }
    get ruedas(){
        return this._ruedas
    }

    set ruedas(ruedas){
        this._ruedas=ruedas;
    }
    set marca(marca){
        this._marca=marca;
    }
    set modelo(modelo){
        this._modelo=modelo;
    }
    static tieneCuatroRuedas(ruedas){
        return  ruedas < 4;
    }
    toString(){
        return "MARCA: "+ this.marca;
    }
}

let lexus = new coche("Lexus","Is300", 4 );
let ford = new coche("Ford","Mondeo", 4 )
let audi = new coche("Audi","A4", 4 );
// audi.marca="Krupp";
// audi.modelo="Maybach";
let bmw = new coche("BMW","Iseta", 3 )
// audi2["marca"]="GIT";
// audi2["modelo"]="GUD CASUL";
//lexus["marca"]="Lesu";


lexus.function=function() {}

for (const key in lexus) {
    console.log(key+":"+lexus[key])
}

console.log(coche.tieneCuatroRuedas(bmw))
console.log(""+bmw); // LLAMADA A TOSTRING
console.log(bmw.mostrarCoche());
console.log(audi.mostrarCoche());
console.log(lexus.mostrarCoche());
console.log(ford.mostrarCoche());
//Se llama casi siempre al del hijo (herencia)
//HIJO (herencia)
class cocheElectrico extends coche{
    constructor(marca,modelo,ruedas){
        super(marca,modelo,ruedas);
    }
    get marca(){
        return this._marca;
    }
    get modelo(){
        return this._modelo;
    }
    get ruedas(){
        return this._ruedas
    }

    set ruedas(ruedas){
        this._ruedas=ruedas;
    }
    set marca(marca){
        this._marca=marca;
    }
    set modelo(modelo){
        this._modelo=modelo;
    }
}

let bmwElectrico=new cocheElectrico("BMW electric","I3",4);

console.log(bmwElectrico.mostrarCoche());