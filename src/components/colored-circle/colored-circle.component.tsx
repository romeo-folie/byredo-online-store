import {Container, Circle} from "./colored-circle.styles";

const ColoredCircle: React.FC<{color: string, active?:boolean}> = ({color, active}) => {
  return (
    <Container active={active}>
      <Circle color={color} />
    </Container>
  );
};

export default ColoredCircle;
