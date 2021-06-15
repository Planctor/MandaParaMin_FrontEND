function menu() {
  var menu_mobile = document.querySelector('[data-menu-mobile]');
  var itens_menu = document.querySelector('[data-itens_menu]').children;
  var menu = document.querySelector('[data-itens_menu]');
  var array_menu = Array.from(itens_menu);

  function myFunction() {
    // cria a animação de X
    var hambuguer = Array.from(menu_mobile.children);
    hambuguer.forEach(function (e) {
      e.classList.toggle('ativo');
    }); // adiciona ao Ul a classe ativo

    menu.classList.toggle('ativo'); //muda de none pra block

    var menuLink = array_menu.map(function (x) {
      x.classList.toggle('ativo');
      return x.firstElementChild;
    }); //remove tudo qnd clica em um link

    menuLink.forEach(function (a) {
      a.addEventListener('click', function (e) {
        var x = Array.from(e.target.parentNode.parentNode.children);
        x.forEach(function (i) {
          i.classList.remove('ativo');
        });
        menu.classList.remove('ativo');
        hambuguer.forEach(function (e) {
          e.classList.remove('ativo');
        });
      });
    });
  }

  menu_mobile.addEventListener('click', myFunction);
}

menu()