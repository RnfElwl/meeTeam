import Search from "../model/searchModel.js";
class SearchController {
  constructor() {
    this.Search = new Search();
  }
  getSearchRecod(req, res) {
    const search = new Search(req.query.name);
    search.myRecod();
    return res.render("teamSearch.pug");
  }
  postSearchRecod(req, res) {
    return;
  }
}

export default SearchController;
