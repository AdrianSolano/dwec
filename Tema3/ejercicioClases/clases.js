class libro{
    //array de libros
    constructor(nombre,autor,fechaLanzamiento,genero,precio,votosArrayList){
        this.nombre=nombre;
        this.autor=autor;
        this.fechaLanzamiento=fechaLanzamiento;
        this.genero=genero;
        this.precio=precio;
        //this.votosArrayList=votosArrayList;
    }
    get nombre() {
        return this._nombre;
    }
    get autor() {
        return this._autor;
    }
    get fechaLanzamiento() {
        return this._fechaLanzamiento;
    }
    get genero() {
        return this._genero;
    }
    get precio(){
        return this._precio;
    }
    set nombre(nombre) {
        this._nombre=nombre;
    }
    set autor(autor) {
        this._autor=autor;
    }
    set fechaLanzamiento(fechaLanzamiento) {
        this._fechaLanzamiento=fechaLanzamiento;
    }
    set genero(genero) {
        this._genero=genero;
    }
    set precio(precio) {
        this._precio=precio
    }

    mostrarLibro(){
        return " Nombre libro: "+this.nombre+" Autor: "+this.autor+ " Fecha Lanzamiento: "+this.fechaLanzamiento + " Genero: "+this.genero;
    }
    calcularPuntuacion(){

    }

}

class libreriaTienda{
    //arrays
    constructor(nombre,clientes,libros,dependiente,direccion,estado){
        this.nombre=nombre;
        this.clientes=clientes;
        this.libros=libros;
        this.dependiente=dependiente;
        this.direccion=direccion;
        this.estado=estado;
    }
    get nombre() {
        return this._nombre;
    }
    get clientes() {
        return this._clientes;
    }
    get libros() {
        return this._libros;
    }
    get dependiente() {
        return this._dependiente;
    }
    get direccion() {
        return this._direccion;
    }
    get estado() {
        return this._estado;
    }
    set nombre(nombre) {
        this._nombre=nombre;
    }
    set clientes(clientes) {
        this._clientes=clientes;
    }
    set libros(libros) {
        this._libros=libros;
    }
    set dependiente(dependiente) {
        this._dependiente=dependiente;
    }
    set direccion(direccion) {
        this._direccion=direccion;
    }
    set estado(estado) {
        this._estado=estado;
    }
    mostrarTienda(){
        return " Nombre tienda: "+this.nombre+" clientes: "+this.clientes+ " Libros: "+ this.libros + " direccion: "+this.direccion+ " Estado: "+this.estado;
    }
    addLibros(libros){

    }
    add(){

    }
    borrarLibro(libros){

    }
    borrarCliente(){

    }
    ordenarLibro(){

    }
    buscarLibro(){

    }


}

class persona{
    constructor(nombre,apellidos,dni,telefono,direccion,gustos){
        this.nombre=nombre;
        this.apellidos=apellidos;
        this.dni=dni;
        this.telefono=telefono;
        this.direccion=direccion;
        this.gustos=gustos;
    }
    comprar(libros){

    }

}

//clase que extienden de persona Dependiente-->ventas , Cliente, Autor
//DNI,Telefono,para cliente solo// gustos Array

class votos{
    constructor(puntuacion,comentario,usuario,libro){
        this.puntuacion=puntuacion;
        this.comentario=comentario;
        this.usuario=usuario;
        this.libro=libro;
    }

}

//Personas
var persona1= new persona("Adrian","Solano Fernandez","12345678Z",954511371,"C/lmao 5","reguleros");
var dependiente1 = new persona("Paco","REPACO","12345677F",954511372,"C/lmaoo 15","ninguno")

//Tienda
var latiendaencasa = new libreriaTienda("NombreGenericoTienda",persona1,harrypoter,dependiente1,"C/ Amargura 13","Abierta");

//Libros
var harrypoter = new libro("Harry Poter","J.K.Rowling",1997,"Fantasia",40);
var lawealibro2 = new libro("LaWea","YOmismo",2018,"Horror",100)

//logs
console.log(latiendaencasa.mostrarTienda())
console.log(harrypoter.mostrarLibro());
console.log(lawealibro2.mostrarLibro());