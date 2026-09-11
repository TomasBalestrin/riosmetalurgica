/* Metalúrgica Rios — comportamentos da página */
(function () {
  'use strict';

  var WHATSAPP = '5527999946719';

  /* --------------------------------------------------- cabeçalho fixo --- */
  var topo = document.getElementById('topo');
  var fixarTopo = function () {
    topo.classList.toggle('fixado', window.scrollY > 40);
  };
  fixarTopo();
  window.addEventListener('scroll', fixarTopo, { passive: true });

  /* ------------------------------------------------------ menu mobile --- */
  var menuBtn = document.getElementById('menuBtn');
  var nav = document.getElementById('nav');

  menuBtn.addEventListener('click', function () {
    var aberto = menuBtn.getAttribute('aria-expanded') === 'true';
    menuBtn.setAttribute('aria-expanded', String(!aberto));
    menuBtn.setAttribute('aria-label', aberto ? 'Abrir menu' : 'Fechar menu');
    topo.classList.toggle('aberto', !aberto);
  });

  nav.addEventListener('click', function (e) {
    if (e.target.closest('a')) {
      menuBtn.setAttribute('aria-expanded', 'false');
      menuBtn.setAttribute('aria-label', 'Abrir menu');
      topo.classList.remove('aberto');
    }
  });

  /* ------------------------------------------- filtro do catálogo ------ */
  var filtros = document.querySelectorAll('.filtro');
  var produtos = document.querySelectorAll('#listaProdutos .produto');

  filtros.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var alvo = btn.dataset.filtro;

      filtros.forEach(function (b) {
        b.setAttribute('aria-pressed', String(b === btn));
      });

      produtos.forEach(function (card) {
        card.hidden = !(alvo === 'todos' || card.dataset.tipo === alvo);
      });
    });
  });

  /* ------------------------------------------------------- lightbox ---- */
  var lightbox = document.getElementById('lightbox');
  var lightboxImg = document.getElementById('lightboxImg');
  var lightboxFechar = document.getElementById('lightboxFechar');
  var ultimoFoco = null;

  var abrirLightbox = function (src, legenda) {
    ultimoFoco = document.activeElement;
    lightboxImg.src = src;
    lightboxImg.alt = legenda || 'Foto ampliada';
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
    lightboxFechar.focus();
  };

  var fecharLightbox = function () {
    lightbox.hidden = true;
    lightboxImg.removeAttribute('src');
    document.body.style.overflow = '';
    if (ultimoFoco) ultimoFoco.focus();
  };

  document.querySelectorAll('.galeria__item').forEach(function (item) {
    item.addEventListener('click', function () {
      abrirLightbox(item.dataset.full, item.dataset.legenda);
    });
  });

  lightboxFechar.addEventListener('click', fecharLightbox);
  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) fecharLightbox();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !lightbox.hidden) fecharLightbox();
  });

  /* ------------------------------------------ formulário → WhatsApp ---- */
  var form = document.getElementById('formOrcamento');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var d = new FormData(form);
    var nome = (d.get('nome') || '').toString().trim();
    var telefone = (d.get('telefone') || '').toString().trim();

    if (!nome || !telefone) {
      form.reportValidity();
      return;
    }

    var linhas = [
      'Olá! Gostaria de um orçamento.',
      '',
      'Nome: ' + nome,
      'Empresa: ' + ((d.get('empresa') || '').toString().trim() || '—'),
      'WhatsApp: ' + telefone,
      'Cidade/UF: ' + ((d.get('cidade') || '').toString().trim() || '—'),
      'Produto: ' + d.get('produto'),
      '',
      'Detalhes: ' + ((d.get('mensagem') || '').toString().trim() || '—')
    ];

    window.open(
      'https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(linhas.join('\n')),
      '_blank',
      'noopener'
    );
  });

  /* ----------------------------------------------- revelar no scroll --- */
  var alvos = document.querySelectorAll('.revelar');

  if (!('IntersectionObserver' in window)) {
    alvos.forEach(function (el) { el.classList.add('visivel'); });
  } else {
    var obs = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (entrada) {
        if (entrada.isIntersecting) {
          entrada.target.classList.add('visivel');
          obs.unobserve(entrada.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

    alvos.forEach(function (el) { obs.observe(el); });
  }

  /* ------------------------------------------------------------ ano ---- */
  document.getElementById('ano').textContent = new Date().getFullYear();
})();
