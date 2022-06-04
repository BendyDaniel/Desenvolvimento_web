var idade=15
var estaAcompanhado=false

if(idade>=18) {
console.log("você é maior de idade pode entrar na festa")
}else if (idade<18 ||estaAcompanhado== false){
console.log("você é menor de idade e não esta acompanhado(a)portanto não pode entrar na festa")
}else if(idade<18 && estaAcompanhado == true){
console.log("você é menor de idade porém você está acompanhado(a) portanto pode entrar na festa")
}