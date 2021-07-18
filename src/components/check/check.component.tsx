import {
  Checkbox,
  CheckboxProps,
  FormControl,
  FormHelperText,
  FormControlLabel,
  withStyles,
} from "@material-ui/core";
import {useState, ChangeEvent} from "react";

interface ICheckProps extends CheckboxProps {
  label: string;
  error?: string | undefined;
}

const StyledCheck = withStyles({
  root: {
    color: "#000000",
    "& $checked": {
      color: "transparent",
      backgroundColor: "#000000",
    },
  },
})(Checkbox);

const Check: React.FC<ICheckProps> = ({label, error, ...otherProps}) => {
  // const [checked, setChecked] = useState<boolean>(false);

  // const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   setChecked(!checked);
  // };

  return (
    <FormControl component="fieldset">
      <FormControlLabel
        control={
          <StyledCheck
            color="default"
            // checked={checked}
            // onChange={handleChange}
            {...otherProps}
          />
        }
        label={label}
      />
      {error ? <FormHelperText error>{error}</FormHelperText> : null}
    </FormControl>
  );
};

export default Check;
