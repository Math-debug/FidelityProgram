$(document).ready(() => {
    $('.adicionar').on('click',e =>{
        alert('Selo Adicionado')
        var id = e.target.id
        $.ajax({
            type: 'PUT',
            headers: {
                "x-access-token": sessionStorage.getItem('token')
              },
            url: `/log/consulta/${id}`,
            success: data =>{
                $('#etiqueta').html('Selos: '+data.id)
            }
        })
    })
    $('.remover').on('click',e =>{
        alert('Selo Removido')
        var id = e.target.id
        $.ajax({
            type: 'PUT',
            headers: {
                "x-access-token": sessionStorage.getItem('token')
              },
            url: `/log/consulta/rm/${id}`,
            success: data =>{
                $('#etiqueta').html('Selos: '+data.id)
            }
        })
    })
})