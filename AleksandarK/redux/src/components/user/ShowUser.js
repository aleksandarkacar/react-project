import { useSelector } from "react-redux";
import { userSelector } from "../../store/user/selectors";

export const ShowUser = () => {
  const user = useSelector(userSelector);
  return (
    <div>
      <h1>ShowUser:</h1>
      <p>
        User: {user.username} Email: {user.email}
      </p>
    </div>
  );
};
