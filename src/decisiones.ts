function suma (a:number, b:number){
    if (a <= 0 || b <= 0){
        throw new Error ("Los numeros no son mayores a 0")
    }
    return a + b
    }

    const numero1 = 90;
    const numero2 = 70;
    const rsultado = suma(numero1, numero2)

    console.log(rsultado)