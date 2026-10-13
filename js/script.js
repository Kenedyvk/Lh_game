document.addEventListener('DOMContentLoaded', () => {
  const ano = document.getElementById('ano-atual');
  if (ano) ano.textContent = new Date().getFullYear();
  let totalCarrinho = 0;
  const contador = document.getElementById('contador-carrinho');
  const toastEl = document.getElementById('toastCarrinho');
  const toast = toastEl && window.bootstrap ? bootstrap.Toast.getOrCreateInstance(toastEl, { delay: 2400 }) : null;
  document.querySelectorAll('.adicionar-carrinho').forEach((botao) => botao.addEventListener('click', () => {
    totalCarrinho++; if (contador) contador.textContent = totalCarrinho;
    const nome = botao.dataset.produto || 'Produto';
    const texto = document.getElementById('toast-texto'); if (texto) texto.textContent = nome + ' adicionado ao carrinho. Total de itens: ' + totalCarrinho + '.';
    if (toast) toast.show();
    const mensagem = document.getElementById('mensagem-carrinho'); if (mensagem) { mensagem.textContent = nome + ' foi adicionado ao carrinho. Você tem ' + totalCarrinho + ' item(ns).'; mensagem.classList.remove('d-none'); }
  }));
  const botaoCarrinho = document.getElementById('btn-carrinho');
  if (botaoCarrinho) botaoCarrinho.addEventListener('click', () => alert(totalCarrinho === 0 ? 'Seu carrinho ainda está vazio.' : 'Você tem ' + totalCarrinho + ' item(ns) no carrinho.'));
  const formNewsletter = document.getElementById('form-newsletter');
  if (formNewsletter) formNewsletter.addEventListener('submit', (event) => { event.preventDefault(); const email = document.getElementById('email-newsletter'); if (!email.checkValidity()) { email.reportValidity(); return; } document.getElementById('mensagem-newsletter').textContent = 'E-mail registrado para demonstração. Obrigado!'; formNewsletter.reset(); });
  const formLogin = document.getElementById('form-login');
  if (formLogin) formLogin.addEventListener('submit', (event) => { event.preventDefault(); formLogin.classList.add('was-validated'); if (!formLogin.checkValidity()) return; const alerta = document.getElementById('login-alerta'); alerta.className = 'alert alert-info'; alerta.textContent = 'Formulário validado. Esta é uma demonstração; não há autenticação real configurada.'; });
  const mostrarSenha = document.getElementById('mostrar-senha');
  if (mostrarSenha) mostrarSenha.addEventListener('click', () => { const senha = document.getElementById('senha'); const visivel = senha.type === 'text'; senha.type = visivel ? 'password' : 'text'; mostrarSenha.textContent = visivel ? 'Mostrar senha' : 'Ocultar senha'; });
  const formCadastro = document.getElementById('form-cadastro');
  if (formCadastro) formCadastro.addEventListener('submit', (event) => { event.preventDefault(); formCadastro.classList.add('was-validated'); if (!formCadastro.checkValidity()) return; const alerta = document.getElementById('cadastro-alerta'); alerta.className = 'alert alert-success mt-3'; alerta.textContent = 'Cadastro demonstrativo validado! Nenhum dado foi enviado ou armazenado.'; formCadastro.reset(); formCadastro.classList.remove('was-validated'); });
  const voltarTopo = document.getElementById('voltar-topo');
  if (voltarTopo) { const atualizar = () => { voltarTopo.style.display = window.scrollY > 350 ? 'inline-grid' : 'none'; }; window.addEventListener('scroll', atualizar, {passive:true}); atualizar(); voltarTopo.addEventListener('click', () => window.scrollTo({top:0,behavior:'smooth'})); }
});