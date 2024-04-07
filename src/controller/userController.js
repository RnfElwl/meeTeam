import User from "../model/userModel.js";

class UserController {
  getLogin(req, res) {
    return res.render("login");
  }
  postLogin(req, res) {
    return res.render("/");
  }
  getJoin(req, res) {
    return res.render("join");
  }
  postJoin(req, res) {
    const userData = req.body;

    const user = new User();
    user.create(userData, (err, userId) => {
      if (err) {
        const errorMessage = err.errorMessage;
        return res.status(500).render("join", { errorMessage });
      }
      return res.redirect("/");
    });
  }
}

export default UserController;
