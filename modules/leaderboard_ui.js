import LeaderBoardService from "./leaderboard_service";
import User from "./user";

const list = document.querySelector(".scores-list");
const refreshButton = document.querySelector(".refresh-button")
const nameInput = document.querySelector("#name")
const scoreInput = document.querySelector("#score")
const submitButton = document.querySelector(".submit")



const createElement = (data,isWhite) => {
 const element =  document.createElement("p");
    element.classList.add("item");
    if(isWhite) {
      element.classList.add("white")
    }
    element.innerHTML = `${data.user} : ${data.score}`;
    return element

}
export const renderItems = async () => {

  const result = await LeaderBoardService.getData();
  /** @type {Array} */
  const data = result.result

  for(let i = 0; i < data.length; i ++) {
    const element = createElement(data[i],i % 2 === 0)
    setTimeout(() => {
      list.appendChild(element);
    }, 400 * i)
  }

}

refreshButton.addEventListener("click",() => {
  list.innerHTML = ``;
  renderItems()
})

submitButton.addEventListener("click", () => {
  const user = new User(nameInput.value ,scoreInput.value);

 const element = createElement(user,list.children.length % 2 == 0);
 list.appendChild(element);

 LeaderBoardService.sendData(user)
})

