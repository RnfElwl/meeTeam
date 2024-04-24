import Search from "../model/searchModel.js";
class SearchController {
  constructor() {
    this.Search = new Search();
  }
  async getSearchRecod(req, res) {
    const nickName = req.query.name;
    const search = new Search(nickName);

    const userProfile = search.myProfile((err) => {
      if (err) {
        const errorMessage = err;
        return res.status(400).render("teamSearch", { errorMessage });
      }
    });

    const recod = await search.myRecod(userProfile, (err) => {
      if (err) {
        const errorMessage = err;
        return res.status(400).render("teamSearch", { errorMessage });
      }
    });
    const profileData = await userProfile;
    const searchData = recod.data.info.participants;
    console.log(profileData);
    return res.render("teamSearch", { nickName, profileData, searchData });
  }
  postSearchRecod(req, res) {
    return;
  }
}

export default SearchController;
