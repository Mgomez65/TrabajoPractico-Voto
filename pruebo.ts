class VotoElectronico {
    partidosPoliticos: string[];
    votantes: string[];
    dni: number[]
    votos:number[];
    listas:string[];
    candidatos:string[];

    constructor() {
        this.partidosPoliticos = [];
        this.votantes = [];
        this.votos = [];
        this.candidatos=[];
        this.listas=[];
        this.dni=[];
    }
    mostrarPartido(){
        for (let x=0;x<this.listas.length; x++)   
            console.log('el  nombre del partido es: '+this.partidosPoliticos[x]+
        ' Con la lista numero: '+ this.listas[x] +'con el candidato: '+this.candidatos[x])
    }
    mostrarVotantes(){
        for (let x=0;x<this.votantes.length; x++){
            console.log('El votante con nombre de : '+ this.votantes[x] +' Con DNI de: '+this.dni[x] +'Voto la lista:'+this.votos[x])
        }
    }
}

class Candidato {
    agregarCandidato(nombres:string[]) {
        votoElectronico.candidatos.push(...nombres)
    }
}

class Listas{
    agregarLista(nombre:string[]){
        votoElectronico.listas.push(...nombre)
    }
}

class partidosPoliticos{
    agregarPartido(nombre:string[]){
        votoElectronico.partidosPoliticos.push(...nombre)
    }
}
class Votantes{
    agregarVotante(nombre:string[],dni:number[]){ 
        votoElectronico.votantes.push(... nombre)
        votoElectronico.dni.push(... dni)
    }
    votar(NumDeLista:number[]){
        votoElectronico.votos.push(...NumDeLista)
    }
}

let votoElectronico = new VotoElectronico() 
let candidato = new Candidato()
let lista = new Listas()
let partidoPolitoco = new partidosPoliticos()
let votantes = new Votantes()

let NombreCanditos = ['candidato 1', 'candidato 2','candidato 3']
let NombresListas = ['Lista 1','lista 2','lista 3']
let NombrePartido = ['partido 1','partido 2','partido 3']
let NombreVotante = ['Matias gomez','Gisela Gomez','Gustavo Gomez']
let dni = [44552211,26323214,44475125]
let votos = [1,2,1]

candidato.agregarCandidato(NombreCanditos)
lista.agregarLista(NombresListas)
partidoPolitoco.agregarPartido(NombrePartido)
votantes.agregarVotante(NombreVotante,dni)
votantes.votar(votos)


votoElectronico.mostrarPartido()
votoElectronico.mostrarVotantes()


