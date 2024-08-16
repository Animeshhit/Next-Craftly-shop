export const getUser = async () => {
  let user;
  try {
    if (user) {
      return user;
    }
    const req = await fetch("/api/auth/login", {
      method: "GET",
      credentials: "include", // Important to include cookies
    });
    const data = await req.json();
    if (req.status == 200) {
      user = data.user;
      return data.user;
    }

    return false;
  } catch (error) {
    return false;
  }
};
