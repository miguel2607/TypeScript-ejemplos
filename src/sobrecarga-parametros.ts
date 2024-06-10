function unico(a:number, b:number): number

function unico(a:string, b:string):string

function unico(a:any, b:any): any{
    return a+b
}
console.log(unico("miguel", "el mejor"))
console.log(unico(30,70))

//no se pueden colocar la sobrecarga de parametros si hay diferentes parametros
