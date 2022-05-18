import User from "./user";
import { toJson } from "./json";

class LeaderBoardService {
  static baseUrl =
    "https://us-central1-js-capstone-backend.cloudfunctions.net/api/";
  static gameId = "JQ7Lbh97oLP8YsLHeosO";
  static getData = async () => {
    try {
      const resp = await fetch(`${this.baseUrl}games/${this.gameId}/scores`);
      return await resp.json();
    } catch (e) {
      throw e;
    }
  };

/** @param {User} user */
  static sendData = async (user) => {
    try {
    const result = await fetch(`${this.baseUrl}games/${this.gameId}/scores`, {
      method: "POST",
      body: toJson(user),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const res = await result.json();
  }catch(e) {
    throw e;
  }
  };
}

export default LeaderBoardService;
