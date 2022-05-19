import createElement from './create_element';
import createRecord from './create_record';
import LeaderBoardService from './leaderboard_service';

const list = document.querySelector('.scores-list');
const refreshButton = document.querySelector('.refresh-button');

const submitButton = document.querySelector('.submit');

/** @param {Array} data */
const sortScores = (data) => {
  const sortedData = data.sort((a, b) => Number(b.score) - Number(a.score));
  return sortedData;
};

const renderItems = async () => {
  const result = await LeaderBoardService.getData();
  /** @type {Array} */
  const basic = result.result;
  const data = sortScores(basic);
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

submitButton.addEventListener('click', createRecord);

export default renderItems;