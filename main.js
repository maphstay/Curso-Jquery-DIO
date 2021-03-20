function consultaCep() {
    
    let cep = document.getElementById("cep").value
    if (cep === "") {
        alert("Digite um valor!!!")
    }else {
        $(".barra-progresso").show();
        $.ajax({
            url: `https://viacep.com.br/ws/${cep}/json/`,
            type: "GET",
            success: function(response){
                console.log(response)
                $("#logradouro").html(response.logradouro);
                $("#bairro").html(response.bairro);
                $("#localidade").html(response.localidade);
                $("#uf").html(response.uf);
                $("#titulo").html("CEP " + response.cep);
                $(".teste").show();
                $(".barra-progresso").hide();
            }
        })  
    }
}

$(function(){
    $(".barra-progresso").hide();
    $(".teste").hide();
});