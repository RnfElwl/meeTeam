import dotenv from "dotenv";
import axios from "axios";
class Search {
  constructor(nickname) {
    dotenv.config();
    this.RIOT_API_KEY = process.env.RIOT_API_KEY;
    this.nickname = nickname;
    this.RIOT_BASE_URL = "https://kr.api.riotgames.com/lol";
    // https://asia.api.riotgames.com/lol/match/v5/matches/by-puuid/{puuid}/ids?start={start}&count={count}
  }
  async myRecod(callback) {
    const API_URL = `${this.RIOT_BASE_URL}/summoner/v4/summoners/by-name/${this.nickname}?api_key=${this.RIOT_API_KEY}`;

    try {
      const response = await axios.get(API_URL);
      const { puuid } = response.data;

      const matchlistResponse = await axios.get(
        `https://asia.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?api_key=${this.RIOT_API_KEY}&start=0&count=5`
      );
      const matchId = matchlistResponse.data[0];
      const m = matchlistResponse.request;
      const matchGame = await axios.get(
        `https://asia.api.riotgames.com/lol/match/v5/matches/${matchId}?api_key=${this.RIOT_API_KEY}`
      );
      console.log(Object.entries(matchGame.data.info).length);
    } catch (err) {
      if (err.response.status == "403") {
        const errorMessage =
          "라이엇 api 키가 유효하지 않습니다 api키를 갱신해주세요";
        callback(errorMessage);
        return;
      } else if (err.response.status == "400") {
        const errorMessage = "전적을 찾을 수 없습니다";
        callback(errorMessage);
      }
    }
  }
}

export default Search;
