import dotenv from "dotenv";
import axios from "axios";
class Search {
  constructor(nickName, tag) {
    dotenv.config();
    this.RIOT_API_KEY = process.env.RIOT_API_KEY;
    this.nickName = nickName;
    this.tagLine = "KR1";
    this.RIOT_BASE_URL = "https://asia.api.riotgames.com";
    // https://asia.api.riotgames.com/lol/match/v5/matches/by-puuid/{puuid}/ids?start={start}&count={count}
  }
  async myProfile(callback) {
    const API_URL = `${this.RIOT_BASE_URL}/riot/account/v1/accounts/by-riot-id/${this.nickName}/${this.tagLine}?api_key=${this.RIOT_API_KEY}`;
    try {
      const response = await axios.get(API_URL);
      const { puuid } = response.data;
      const SUMMONER_URL = `https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/${puuid}?api_key=${this.RIOT_API_KEY}`;
      const userProfile = await axios.get(SUMMONER_URL);
      return userProfile.data;
    } catch (err) {
      // console.log(err);
      // if (err.response.status == 403) {
      //   ("라이엇 api 키가 유효하지 않습니다 api키를 갱신해주세요");
      //   callback(errorMessage);
      //   return;
      // } else if (err.response.status == 404) {
      //   const errorMessage = "전적을 찾을 수 없습니다";
      //   callback(errorMessage);
      // } else {
      //   const errorMessage = err.response.status + "오류가 발생했습니다";
      //   callback(errorMessage);
      // }
      return;
    }
  }
  async myRecod(userProfile, callback) {
    const { puuid } = await userProfile;
    try {
      const matchlistResponse = await axios.get(
        `https://asia.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?api_key=${this.RIOT_API_KEY}&start=0&count=2`
      );
      const matchId = matchlistResponse.data;
      let matchList = [];
      for (let data of matchId) {
        const matchData = await axios.get(
          `https://asia.api.riotgames.com/lol/match/v5/matches/${data}?api_key=${this.RIOT_API_KEY}`
        );
        matchList.push(matchData.data.info.participants);
      }

      return matchList;
    } catch (err) {
      // console.log(err);
      // if (err.response.status == 403) {
      //   const errorMessage =
      //     "라이엇 api 키가 유효하지 않습니다 api키를 갱신해주세요";
      //   callback(errorMessage);
      //   return;
      // } else if (err.response.status == 404) {
      //   const errorMessage = "전적을 찾을 수 없습니다";
      //   callback(errorMessage);
      // } else {
      //   const errorMessage = err.response.status + "오류가 발생했습니다";
      //   callback(errorMessage);
      // }
      return;
    }
  }
}

export default Search;
