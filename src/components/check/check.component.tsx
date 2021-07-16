import {
  Checkbox,
  CheckboxProps,
  FormControlLabel,
  withStyles,
} from "@material-ui/core";
import {useState, ChangeEvent} from "react";

interface ICheckProps extends CheckboxProps {
  label: string;
}

const StyledCheck = withStyles({
  root: {
    color: "#000000",
    '& $checked': {
      color: "transparent",
      backgroundColor: "#000000",
    },
  },
})(Checkbox);

const Check: React.FC<ICheckProps> = ({label, ...otherProps}) => {
  const [checked, setChecked] = useState<boolean>(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(!checked);
  };

  return (
    <FormControlLabel
      control={
        <StyledCheck
          color="default"
          checked={checked}
          onChange={handleChange}
          {...otherProps}
        />
      }
      label={label}
    />
  );
};

export default Check;
