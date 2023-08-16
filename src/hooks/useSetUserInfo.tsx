import { useDispatch } from "react-redux";
import { setUser } from "~/slices/userSlice";
import { UserInfo } from "~/shared/types";

const useSetUserInfo = () => {
  const dispatch = useDispatch();
  const updateUser = (user: UserInfo) => {
    dispatch(setUser(user));
  };

  return updateUser;
};

export default useSetUserInfo;
