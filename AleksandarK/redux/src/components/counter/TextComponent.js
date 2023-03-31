import { useSelector } from "react-redux";
import { counterSelector } from "../../store/counter/selectors";

export const TextComponent = () => {
  const counterValue = useSelector(counterSelector);
  return (
    <div>
      <div>Result: {counterValue}</div>
    </div>
  );
};
