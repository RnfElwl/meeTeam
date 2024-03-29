const getLogin = (req, res) => {
  return res.render("login");
};
const postLogin = (req, res) => {
  console.log(req.body);
  // return res.render("/");
};

export { getLogin, postLogin };
