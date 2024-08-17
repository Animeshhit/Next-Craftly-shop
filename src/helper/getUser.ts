import store from "@/lib/store/store";
import { getUser } from "@/lib/store/slices/authSlice";
export const getAuthState = async () => {
  let authState = store.getState().auth;
  if (authState.isAuth) {
    return authState;
  } else {
    const getUserFromServer = async () => {
      const req = await fetch(`${process.env.HOST}/api/auth/login`, {
        method: "GET",
        credentials: "include", // Important to include cookies
      });
      const data = await req.json();
      if (req.status == 200) {
        return data.user;
      }

      return false;
    };
    let user = await getUserFromServer();
    if (user) {
      store.dispatch(getUser({ isAuth: true, user }));
    } else {
      store.dispatch(getUser({ isAuth: false, user: null }));
    }
    return authState;
  }
};
