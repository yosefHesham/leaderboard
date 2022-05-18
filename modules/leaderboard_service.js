import User from "./game";
import { toJson } from "./json";

class LeaderBoardService {
  static basUrl = "https://us-central1-js-capstone-backend.cloudfunctions.net/api/";
  static gameId = "JQ7Lbh97oLP8YsLHeosO"
  static getData = async () => {
    try {
    const resp = await fetch(`${this.basUrl}/games/${this.gameId}/scores`);
    return resp
    }catch(e) {
      throw e;
    }
  };


  /** @param {User} user */
  static sendData = async (user) => {
    const req = new XMLHttpRequest();
    req.open("POST",`${this.basUrl}/games/${this.gameId}/score`);
    req.send(toJson(user));
  }
}

export default LeaderBoardService;
