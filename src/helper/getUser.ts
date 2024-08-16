export const getUser = async () => {
  try {
    const req = await fetch("/api/auth/login", {
      method: "GET",
      credentials: "include", // Important to include cookies
    });
    const data = await req.json();
    if (req.status == 200) {
      return data.user;
    }
    return false;
  } catch (error) {
    return false;
  }
};
