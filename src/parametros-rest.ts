function parametros(equipo:string, ...champions:number[]){
    return equipo + "" + champions.join(", ") + "!"
}
console.log(parametros("real madrid",15))