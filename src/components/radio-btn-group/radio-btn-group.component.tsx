import {
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormHelperText,
} from "@material-ui/core";
import {useState, ChangeEvent} from "react";
import RadioBtn from "../radio-btn/radio-btn.component";
import styled from "styled-components";

interface IRadio {
  label: string;
  value: string;
  price?: string;
}

interface IRadioGroup {
  name: string;
  value: string;
  aria: string;
  error?: string | undefined;
  fields: IRadio[];
}

const Row = styled.div`
  display: flex;
  align-items: center;
`;

const Price = styled.span`
  font-size: 1.2rem;
  margin-left: 30px;
`;

const RadioBtnGroup: React.FC<IRadioGroup> = ({
  value,
  aria,
  name,
  error,
  fields,
  ...otherProps
}) => {
  //TODO: Need to clean this up. Remove unused props
  const [option, setOption] = useState<string>(value);

  return (
    <FormControl component="fieldset">
      <RadioGroup
        {...otherProps}
        aria-label={aria}
        // name={name}
        // value={option}
        // onChange={handleChange}
      >
        {fields.map(({label, value, price}, idx) => (
          <Row key={idx}>
            <FormControlLabel
              label={label}
              value={value}
              control={<RadioBtn />}
            />
            {price ? <Price>{`$${price}`}</Price> : null}
          </Row>
        ))}
      </RadioGroup>
      {error ? <FormHelperText error>{error}</FormHelperText> : null}
    </FormControl>
  );
};

export default RadioBtnGroup;
