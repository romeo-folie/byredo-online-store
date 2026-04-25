import {Input, Option, Container} from "./selector.styles";

interface Props {
  name: string;
  options?: string[];
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Selector: React.FC<Props> = ({name, options, onChange}) => {
  return (
    <Container>
      <Input name={name} onChange={onChange} defaultValue={name}>
        <Option disabled value={name}>
          {name}
        </Option>
        {options?.map((opt) => (
          <Option key={opt} value={opt}>
            {opt}
          </Option>
        ))}
      </Input>
    </Container>
  );
};

export default Selector;
