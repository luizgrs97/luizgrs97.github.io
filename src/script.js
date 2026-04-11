hoje = new Date();
idade = hoje.getFullYear() - 2003;
if ( hoje.getMonth() < 6 || ( hoje.getMonth() == 6 && hoje.getDate() < 9 )) {
    idade--;
}
id_idade = document.getElementById("idade")
if (id_idade) {
    id_idade.textContent = idade;
}

var ano = hoje.getFullYear();
if (ano) {
document.getElementById("ano").textContent = ano;
}