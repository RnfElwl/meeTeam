import User from "../model/userModel.js";

class UserController {
  constructor() {
    this.user = new User();
  }
  getLogin(req, res) {
    return res.render("login");
  }
  postLogin(req, res) {
    const user = new User();
    const data = req.body;
    user.login(data, req.session, (err) => {
      if (err) {
        const errorMessage = err.errorMessage;
        return res.status(500).render("login", { errorMessage });
      }
      return res.redirect("/");
    });
  }
  getJoin(req, res) {
    return res.render("join");
  }
  postJoin(req, res) {
    const user = new User();
    const userData = req.body;
    user.createUser(userData, (err) => {
      if (err) {
        const errorMessage = err.errorMessage;
        return res.status(500).render("join", { errorMessage });
      }
      return res.redirect("/");
    });
  }
}

export default UserController;
