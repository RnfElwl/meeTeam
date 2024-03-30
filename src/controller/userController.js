const getLogin = (req, res) => {
  return res.render("content/login");
};
const postLogin = (req, res) => {
  console.log(req.body);
  // return res.render("/");
};

export { getLogin, postLogin };
