import { fromJson } from "./json";
import LeaderBoardService from "./leaderboard_service";

const list = document.querySelector(".scores-list");

export const renderItems = async () => {

  const result = await LeaderBoardService.getData();
  /** @type {Array} */
  const data = result.result
  console.log(data)

  for(let i = 0; i < data.length; i ++) {
    const element = document.createElement("p");
    element.classList.add("item");
    if(i % 2 == 0) {
      element.classList.add("white")
    }
    element.innerHTML = `${data[i].user} : ${data[i].score}`;
    list.appendChild(element);
  }

 
}