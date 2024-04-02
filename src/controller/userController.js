const getLogin = (req, res) => {
  return res.render("login");
};
const postLogin = (req, res) => {
  console.log(req.body);
  return res.render("/");
};

const getJoin = (req, res) => {
  return res.render("join");
};

const postJoin = (req, res) => {
  const { name, email, id, password, password_check } = req.body;
};

export { getLogin, postLogin, getJoin, postJoin };
