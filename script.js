
function validateForm() {
    var nome = document.getElementById("Nome").value;
    var cpf = document.getElementById("CPF").value;
    var email = document.getElementById("Email").value;
    var dataChegada = document.getElementById("Data_Chegada").value;
    var numeroNoites = document.getElementById("Numero_noites").value;
    var aceite = document.getElementById("Aceite").checked;

    
    if (nome == "" || cpf == "" || email == "" || dataChegada == "" || numeroNoites == "" || !aceite) {
        alert("Todos os campos devem ser preenchidos e o aceite deve ser marcado.");
        return false;
    }

    if (!/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/.test(cpf)) {
        alert("Por favor, insira um CPF válido.");
        return false;
    }

    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Por favor, insira um email válido.");
        return false;
    }

    return true;
}

function calculateStayValue() {
    var numeroNoites = document.getElementById("Numero_noites").value;
    var valorPorNoite = 200; // Valor fixo por noite
    var valorEstadia = numeroNoites * valorPorNoite;
    document.getElementById("valor_estadia").value = "R$ " + valorEstadia.toFixed(2);
}

$(document).ready(function(){
    $('#CPF').mask('000.000.000-00');
    $('#Data_Chegada').mask('00/00/0000');
});
