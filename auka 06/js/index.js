var pessoa1 = {
nome: "senku",
idade: 13
}
var pessoa2 = {
nome: "ichigo kurosaki",
idade:16
}
var pessoa3 = {
nome:"sonic",
idade:13
}

if(pessoa1.idade>pessoa2.idade && pessoa1.idade>pessoa3.idade){
     console.log(`${pessoa.nome}é a mais velho `);
} else if(pessoa2.idade>pessoa1.idade && pessoa2.idade>pessoa3.idade){
  console.log(`${pessoa2.nome} é a mais velho`)  
}else if(pessoa3.idade>pessoa1.idade && pessoa3.idade>pessoa2.idade){
    console.log(`${pessoa3.nome}é a mais velho`)
}