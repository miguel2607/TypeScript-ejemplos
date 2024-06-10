type UnionMiguel = {
    nombre : string
    edad : number
} | {
    cumpleaños: string 
    celular : number 
}
let x: UnionMiguel = {nombre:"mbappe", edad:25};
x = {cumpleaños: "25 de enero", celular: 320308457845,}

console.log(x)