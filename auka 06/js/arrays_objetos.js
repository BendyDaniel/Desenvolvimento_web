var banco = []

var nome = String(prompt("digite seu nome:"))
var idade = Number(prompt("digite sua idade:"))
var telefone = String(prompt("digite seu telefone:"))

var pessoa = {
nomePessoa: nome,
idadePessoa: idade,
telefonePessoa: telefone
}
var pNome=document.getElementById("nome")
var pIdade=document.getElementById("idade")
var pTelefone=document.getElementById("telefone")

banco.push(pessoa)
document.write(pessoaNome)
document.write(pessoa.idadePessoa)
document.write(pessoa.telefonePessoa)

pNome.innerHTML=pessoa.nomePessoa
pIdade.innerHTML=pessoa.idadePessoa
pTelefone.innerHTML=pessoa.telefonePessoa


