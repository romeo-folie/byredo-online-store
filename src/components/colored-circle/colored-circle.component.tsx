import {MouseEvent} from "react";
import {Container, Circle} from "./colored-circle.styles";

interface Props {
  color: string;
  active: boolean;
  handleClick: (e: MouseEvent<HTMLDivElement>, color: string) => void;
}

const ColoredCircle: React.FC<Props> = ({color, active, handleClick}) => {
  return (
    <Container
      active={active}
      onClick={(e: MouseEvent<HTMLDivElement>) => handleClick(e, color)}
    >
      <Circle color={color} />
    </Container>
  );
};

export default ColoredCircle;
