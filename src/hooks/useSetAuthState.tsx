import { useDispatch } from "react-redux";
import { setAuthState } from "~/slices/userSlice";
import { UserInfo } from "~/shared/types";

const useSetAuthState = () => {
  const dispatch = useDispatch();
  const updateUser = (user: UserInfo) => {
    dispatch(setAuthState(user));
  };

  return updateUser;
};

export default useSetAuthState;
