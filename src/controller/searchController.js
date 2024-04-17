import Search from "../model/searchModel.js";
class SearchController {
  constructor() {
    this.Search = new Search();
  }
  getSearchRecod(req, res) {
    const search = new Search();
    const nickName = req.query.name;
    search.myRecod(nickName, (err) => {
      if (err) {
        const errorMessage = err;
        return res.status(400).render("teamSearch", { errorMessage });
      }
      return res.render("teamSearch");
    });
  }
  postSearchRecod(req, res) {
    return;
  }
}

export default SearchController;
