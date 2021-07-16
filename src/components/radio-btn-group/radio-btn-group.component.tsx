import {RadioGroup, FormControlLabel} from "@material-ui/core";
import {useState, ChangeEvent} from "react";
import RadioBtn from "../radio-btn/radio-btn.component";

interface IRadio {
  label: string;
  value: string;
}

interface IRadioGroup {
  name: string;
  value: string;
  aria: string;
  fields: IRadio[];
}

const RadioBtnGroup: React.FC<IRadioGroup> = ({value, aria, name, fields}) => {
  const [option, setOption] = useState<string>(value);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setOption(event.target.value);
  };

  return (
    <RadioGroup
      aria-label={aria}
      name={name}
      value={option}
      onChange={handleChange}
    >
      {fields.map(({label, value}, idx) => (
        <FormControlLabel
          value={value}
          control={<RadioBtn />}
          label={label}
          key={idx}
        />
      ))}
    </RadioGroup>
  );
};

export default RadioBtnGroup;
