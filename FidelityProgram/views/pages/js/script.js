$(document).ready(() => {
    $.ajax({
        type: 'GET',
        url: '/aniversario',
        headers: {
            "x-access-token": sessionStorage.getItem('token')
          },
        success: data =>{
            for(let i of data){
              $('#aniversarios').append(i.nome + ' | ' + i.celular + ' | ' + i.aniversario.replace('T00:00:00.000Z','') +'<br><hr>')
            }
        }
    })
    $.ajax({
      type: 'GET',
      url: '/fidelidade',
      headers: {
          "x-access-token": sessionStorage.getItem('token')
        },
      success: data =>{
          for(let i of data){
            $('#fidelidade').append(i.nome + ' | ' + i.celular + ' | ' + i.aniversario.replace('T00:00:00.000Z','') +'<br><hr>')
          }
      }
  })
    $('#cadastro').on('click',()=>{
            $('#pagina').load('/cadastro')
    })
    $('#dash').on('click',()=>{
        let html = 	`			
        <div class="row mb-3">
				<div class="col-md-6">
				  <div class="card">
				  <div class="card-header">
					Aniversariantes do mes
				  </div>
				  <div class="card-body" id="aniversarios">
					 
				  </div>
				</div>
			  </div>
			
			</div>
			<div class="row mb-3">
				<div class="col-md-6">
				  <div class="card">
				  <div class="card-header">
					Ag. Corte Fidelidade
				  </div>
				  <div class="card-body" id="fidelidade">
					 
				  </div>
				</div>
			  </div>
			
			</div>`;
        $('#pagina').html(html)
        $.ajax({
            type: 'GET',
            url: '/aniversario',
            headers: {
                "x-access-token": sessionStorage.getItem('token')
              },
            success: data =>{
                for(let i of data){
                  $('#aniversarios').append(i.nome + ' | ' + i.celular + ' | ' + i.aniversario.replace('T00:00:00.000Z','') +'<br><hr>')
                }
            }
        })
        $.ajax({
          type: 'GET',
          url: '/fidelidade',
          headers: {
              "x-access-token": sessionStorage.getItem('token')
            },
          success: data =>{
              for(let i of data){
                $('#fidelidade').append(i.nome + ' | ' + i.celular + ' | ' + i.aniversario.replace('T00:00:00.000Z','') +'<br><hr>')
              }
          }
      })
    })
    $('#consulta').on('click',()=>{
      $.ajax({
        type: 'GET',
        url: '/log/consulta',
        headers: {
            "x-access-token": sessionStorage.getItem('token')
          },
        success: data =>{
          $('#pagina').html(data)
        }
    })
  })
})