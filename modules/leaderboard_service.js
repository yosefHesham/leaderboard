import User from "./user";
import { toJson } from "./json";

class LeaderBoardService {
  static basUrl =
    "https://us-central1-js-capstone-backend.cloudfunctions.net/api/";
  static gameId = "JQ7Lbh97oLP8YsLHeosO";
  static getData = async () => {
    try {
      const resp = await fetch(`${this.basUrl}games/${this.gameId}/scores`);
      return await resp.json();
    } catch (e) {
      throw e;
    }
  };

/** @param {User} user */
  static sendData = async (user) => {
    const result = await fetch(`${baseUrl}games/${gameId}/scores`, {
      method: "POST",
      body: JSON.stringify({
        user: user.name,
        score: user.score,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const res = await result.json();
    console.log(res.result);
  };
}

export default LeaderBoardService;
