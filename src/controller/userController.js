const getLogin = (req, res) => {
  return res.render("login");
};
const postLogin = (req, res) => {
  return res.render("/");
};

export { getLogin, postLogin };
