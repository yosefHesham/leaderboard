import LeaderBoardService from './leaderboard_service';
import User from './user';

const list = document.querySelector('.scores-list');
const refreshButton = document.querySelector('.refresh-button');
const nameInput = document.querySelector('#name');
const scoreInput = document.querySelector('#score');
const submitButton = document.querySelector('.submit');

const createElement = (data, isWhite) => {
  const element = document.createElement('p');
  element.classList.add('item');
  if (isWhite) {
    element.classList.add('white');
  }
  element.innerHTML = `${data.user} : ${data.score}`;
  return element;
};
const renderItems = async () => {
  const result = await LeaderBoardService.getData();
  /** @type {Array} */
  const data = result.result;

  for (let i = 0; i < data.length; i += 1) {
    const element = createElement(data[i], i % 2 === 0);
    setTimeout(() => {
      list.appendChild(element);
    }, 400 * i);
  }
};

refreshButton.addEventListener('click', () => {
  list.innerHTML = '';
  renderItems();
});

submitButton.addEventListener('click', async () => {
  const user = new User(nameInput.value, scoreInput.value);
  const score = Number(user.score);
  if (Number.isNaN(score)) {
    alert('score should be number');
    return;
  }

  try {
    await LeaderBoardService.sendData(user);
    const element = createElement(user, list.children.length % 2 === 0);
    scoreInput.value = '';
    nameInput.value = '';
    list.appendChild(element);
  } catch (e) {
    alert('Something went wrong');
  }
});

export default renderItems;