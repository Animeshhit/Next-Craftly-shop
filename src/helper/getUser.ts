import store from "@/lib/store/store";
import { getUser } from "@/lib/store/slices/authSlice";

export const getAuthState = async () => {
  try {
    // Step 1: Check if the user is already in the Redux store
    const currentState = store.getState();
    const existingUser = currentState.auth.user;

    if (existingUser) {
      // If the user is already authenticated, return the state from Redux
      return {
        isAuth: true,
        user: existingUser,
      };
    }

    // Step 2: If user data is not available, fetch it from the API
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_HOST}/api/auth/login`,
      {
        method: "GET",
        credentials: "include", // Important to include cookies
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch user data: ${response.statusText}`);
    }

    const data = await response.json();
    const state = {
      isAuth: true,
      user: data.user,
    };

    // Step 3: Dispatch the user data to the Redux store
    store.dispatch(getUser(state));
    return state;
  } catch (error) {
    console.error("Error fetching auth state:", error);
    const state = {
      isAuth: false,
      user: null,
    };

    // Dispatch the failure state to the Redux store
    store.dispatch(getUser(state));
    return state;
  }
};
