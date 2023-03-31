import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "../../store/user/selectors";
import { setUser } from "../../store/user/slice";

export const UserForm = () => {
  const user = useSelector(userSelector);
  const [newUser, setNewUser] = useState({ username: "", email: "" });

  const dispatch = useDispatch();

  const handleSubmit = () => {
    console.log(newUser);
    dispatch(setUser(newUser));
  };

  return (
    <div>
      <h1>UserForm:</h1>
      <input
        value={newUser.username}
        onChange={(e) => {
          setNewUser({ ...newUser, username: e.target.value });
        }}
      ></input>
      <input
        value={newUser.email}
        onChange={(e) => {
          setNewUser({ ...newUser, email: e.target.value });
        }}
      ></input>
      <button onClick={() => handleSubmit()}>Submit</button>
    </div>
  );
};
