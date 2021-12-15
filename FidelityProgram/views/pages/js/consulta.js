$(document).ready(() => {
    $('#btn').on('click', ()=>{
        $('tbody').html('')
        let parametro = document.getElementById('parametro').value
        let input = document.getElementById('input').value
        $.ajax({
            type: 'POST',
            url: '/log/lista-consulta',
            headers: {
                "x-access-token": sessionStorage.getItem('token')
              },
            data: { parametro : parametro, input: input},
            success: data =>{
                for(let i of data){
               var html = `<tr><th scope="row"><a onclick="buscaCadastro(this)"id="${i.id}"href="#">${i.id}</a></th><td>${i.nome}</td><td>${i.celular}</td><td>${i.profissao}</td></tr>`
               $('tbody').append(html)
                }
            }
        })
    })
})
function buscaCadastro(data){
    $.ajax({
        type: 'GET',
        url: '/log/consulta/'+data.id,
        headers: {
            "x-access-token": sessionStorage.getItem('token')
          },
        success: data => {
            $('#pagina').html(data)
        }
    })
}