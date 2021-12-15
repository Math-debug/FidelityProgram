$(document).ready(() => {
    $('#cep').blur(()=>{
        let cep = document.getElementById('cep').value
        let rua = document.getElementById('rua')
        let bairro = document.getElementById('bairro')
        $.get(`https://viacep.com.br/ws/${cep}/json/`,data =>{
            rua.value = data.logradouro
            bairro.value = data.bairro
        })
    })
})