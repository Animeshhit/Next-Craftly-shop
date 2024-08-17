import store from "@/lib/store/store";
import { getUser } from "@/lib/store/slices/authSlice";

export const getAuthState = async () => {
  const authState = store.getState().auth;

  if (authState.isAuth !== null) {
    return authState;
  }

  try {
    const response = await fetch(`${process.env.HOST}/api/auth/login`, {
      method: "GET",
      credentials: "include", // Important to include cookies
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch user data: ${response.statusText}`);
    }

    const data = await response.json();
    const state = {
      isAuth: true,
      user: data.user,
    };

    store.dispatch(getUser(state));
    return state;
  } catch (error) {
    console.error("Error fetching auth state:", error);
    const state = {
      isAuth: false,
      user: null,
    };

    store.dispatch(getUser(state));
    return state;
  }
};
