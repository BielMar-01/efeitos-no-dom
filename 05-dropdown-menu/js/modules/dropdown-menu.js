export default function dropDown() {

}

const dropdpwnMenus = document.querySelectorAll('[data-dropdown]');

dropdpwnMenus.forEach(menu => {
  ['touchstart', 'click'].forEach(userEvent => {
    menu.addEventListener(userEvent, handleClick);
  });
});

function handleClick(event) {
  event.preventDefault();
  this.classList.toggle('active');
}