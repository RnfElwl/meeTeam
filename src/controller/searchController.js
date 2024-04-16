import Search from "../model/searchModel.js";
class SearchController {
  constructor() {
    this.Search = new Search();
  }
  getSearchRecod(req, res) {
    const search = new Search(req.query.name);
    search.myRecod((err) => {
      if (err) {
        const errorMessage = err.errorMessage;
        return res.render("teamSearch", { errorMessage });
      }
    });
    return res.render("teamSearch.pug");
  }
  postSearchRecod(req, res) {
    return;
  }
}

export default SearchController;
