export default function outsideClick(element, events, callback) {
  const html = document.documentElement;
  const outside = 'data-outside';

  if(!element.hasAttribute(outside)){
    events.forEach(userEvent => {
      html.addEventListener(userEvent, handleOustideClick);
    });
    element.setAttribute(outside, '');
  }
  
  function handleOustideClick(event) {
    if(!element.contains(event.target)) {
      element.removeAttribute(outside);
      events.forEach(userEvent => {
        html.removeEventListener(userEvent, handleOustideClick);
      })
      callback();
    }
  }
}