let pessoas =[{
    nome:"Cassiano",
    idade:32,
    cargo: "Professor"
},
{
    nome:"José",
    idade:32,
    cargo: "Programador"
}]

// console.log(pessoas[0])
// console.log(pessoas[0].idade)
// console.log(pessoas[0].cargo)

// console.log(pessoas[1])
// console.log(pessoas[1].idade)
// console.log(pessoas[1].cargo)

if(pessoas[0].idade > pessoas[1].idade){

    console.log(pessoas[0].nome, " é mais velho que ", pessoas[1].nome)

}else if(pessoas[0].idade < pessoas[1].idade){

    console.log(pessoas[0].nome, " w mais novo que " , pessoas[1].nome)

}else{

    console.log(pessoas[0].nome, " tem a mesma iadde que " , pessoas[1].nome)

}