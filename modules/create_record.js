import User from "./user";

const createRecord = async () => {
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
}

export default createRecord