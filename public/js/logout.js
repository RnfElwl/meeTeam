const logout = document.querySelector(".logout");

const handleLogout = async () => {
  await fetch("user/logout", {
    method: "POST",
  });
  return location.reload(true);
};

logout.addEventListener("click", handleLogout);
