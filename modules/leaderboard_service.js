import { toJson } from './json';

class LeaderBoardService {
  static baseUrl =
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

  static gameId = 'JQ7Lbh97oLP8YsLHeosO';

  static getData = async () => {
    const resp = await fetch(`${this.baseUrl}games/${this.gameId}/scores`);
    return resp.json();
  };

  /** @param {User} user */
  static sendData = async (user) => {
    const result = await fetch(`${this.baseUrl}games/${this.gameId}/scores`, {
      method: 'POST',
      body: toJson(user),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    const res = await result.json();
    return res;
  };
}

export default LeaderBoardService;
