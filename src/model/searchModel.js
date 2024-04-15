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
  async myRecod() {
    const API_URL = `${this.RIOT_BASE_URL}/summoner/v4/summoners/by-name/${this.nickname}?api_key=${this.RIOT_API_KEY}`;

    try {
      const response = await axios.get(API_URL);
      const { puuid } = response.data;

      const matchlistResponse = await axios.get(
        `https://asia.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?api_key=${this.RIOT_API_KEY}&start=0&count=5`
      );
      const { data } = matchlistResponse;
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  }
}

export default Search;
