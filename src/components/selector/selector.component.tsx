import {Input, Option, Container} from "./selector.styles";

interface Props {
  name: string;
  options?: string[];
}

const Selector: React.FC<Props> = ({name, options}) => {
  return (
    <Container>
      <Input name={name}>
        <Option>{name}</Option>
      </Input>
    </Container>
  );
};

export default Selector;
