const logout = document.querySelector(".logout");

const handleLogout = async () => {
  await fetch("user/logout", {
    method: "POST",
  });
};

logout.addEventListener("click", handleLogout);
