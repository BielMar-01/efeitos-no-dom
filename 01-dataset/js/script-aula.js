// EXERCÍCIOS
// Adicione um atributo data-anime="show-down" e data-anime="show-right" a todos as section's com descricão dos animais.

// <section data-anime="show-down"></section>
// <section data-anime="show-right"></section>

// Utilizando estes atributos, adicione a classe show-down ou show-right a sua respectiva section assim que a mesma aparecer na tela (animacao tab)

// const direcao = tabContent[index].dataset.anime;
// tabContent[index].classList.add('ativo', direcao);

// No CSS faça com que show-down anime de cima para baixo e show-right continue com a mesma animação da esquerda para a direita

/*
[data-tab="content"] section.ativo.show-right {
  animation: show-right .5s forwards;
}

[data-tab="content"] section.ativo.show-down {
  animation: show-down .5s forwards;
}

@keyframes show-right {
  from {
    opacity: 0;
    transform: translate3d(-30px, 0, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

@keyframes show-down {
  from {
    opacity: 0;
    transform: translate3d(0, -30px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
*/

// Substitua todas as classes js- por data atributes.

// const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
// const tabContent = document.querySelectorAll('[data-tab="content"] section');