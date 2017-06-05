jQuery(document).ready(function($){
  // Validação Formulario
  $("#btn-enviar").click(function(){
     var cont = 0;
     var conf = $('#mensagem-confirmada');
     var erro = $('#mensagem-errada');
     $("#formulario input").each(function(){
		if($(this).val() == ""){
			cont++;
		}else{
			$("img").addClass('animated wobble');
		}
	});
     if(cont > 0){
     	$("img").addClass('animated wobble');
        erro.show('slow');
        erro.delay(2000).fadeOut();
     }else{
      $("#formulario").submit();
        conf.show('slow');
        conf.delay(2000).fadeOut();
      }
  });
});
