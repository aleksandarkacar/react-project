import { Counter } from "../counter/Counter";
import { TextComponent } from "../counter/TextComponent";

const AppLayout = () => {
  return (
    <div>
      <Counter />
      <hr />
      <TextComponent />
    </div>
  );
};

export default AppLayout;
