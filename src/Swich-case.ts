function Mostrarjugador(jugador:string){
    switch (jugador){
case "Mbappe" :
    console.log("Real Madrid")
    break
    case "Cristiano":
        console.log("Al Nassar")
        break
        case "Messi":
            console.log("Inter Miami")
            break
case "Vinicius":
    console.log("brasil")
    break
    case "Luis Diaz":
        console.log("Liverpool")
        break
        case "james" : 
        console.log("colombia")
        break
        default:
            throw new Error ("jugador no valido")

    }
}
Mostrarjugador("james")