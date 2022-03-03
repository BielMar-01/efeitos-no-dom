// FORMS
// É comum utilizarmos inputs de formulários para criarmos uma interface entre funções de JavaScript e o usuário final do site. Para isso precisamos aprender como pegar os valores dos formulários.
document.forms; // lista com os formulários
document.forms.contato; // form com nome contato
document.forms.contato.elements; // elementos
document.forms[0].elements[0].value; // valor do primeiro


// VALUES
// A propriedade value retorna o valor do elemento no formulário. Se adicionarmos um callback ao keyup (tecla levantar), podemos ficar de olho no evento e puxar o valor sempre que ele mudar. change dispara quando houver mudanças.
const form = document.getElementById('contato');
function handleKeyUp(event) {
  console.log(event.target.value);
}
form.addEventListener('keyup', handleKeyUp);


// VALIDAÇÃO
// O método checkValidity verifica se um input com o atributo required, é válido ou não. A propriedade validationMessage possui a mensagem padrão de erro do browser. É possível modicar com setCustomValidity('')
const form = document.getElementById('contato');
function handleChange(event) {
  const target = event.target;
  if(!target.checkValidity()) {
    target.classList.add('invalido');
    target.nextElementSibling.innerText = target.validationMessage;
  } else {
    target.classList.remove('invalido');
  }
}
form.addEventListener('change', handleChange);