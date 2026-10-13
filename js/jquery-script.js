$(function () {
  $('#form-cadastro').hide();
  $('#mostrar-cadastro').on('click', function () {
    const formulario = $('#form-cadastro');
    formulario.stop(true, true).slideToggle(250);
    const aberto = formulario.is(':visible');
    $(this).text(aberto ? 'Fechar cadastro' : 'Criar minha conta');
    if (aberto) $('#novo-usuario').trigger('focus');
  });
  $('a[href^="#"]').on('click', function (evento) {
    const destino = $(this.getAttribute('href'));
    if (destino.length) { evento.preventDefault(); $('html, body').stop().animate({scrollTop:destino.offset().top-75},350); }
  });
});