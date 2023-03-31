import { UserForm } from "../user/UserForm";
import { ShowUser } from "../user/ShowUser";

const UserLayout = () => {
  return (
    <div>
      <UserForm />
      <hr />
      <ShowUser />
    </div>
  );
};

export default UserLayout;
