const createElement = (data, isWhite) => {
  const element = document.createElement('p');
  element.classList.add('item');
  if (isWhite) {
    element.classList.add('white');
  }
  element.innerHTML = `${data.user} : ${data.score}`;
  return element;
};
export default createElement;