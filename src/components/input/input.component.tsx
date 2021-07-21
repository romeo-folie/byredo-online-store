import React, {ChangeEvent, useState} from "react";
import {
  TextField,
  InputAdornment,
  IconButton,
  makeStyles,
  withStyles,
} from "@material-ui/core";
import {Visibility, VisibilityOff, CreditCard} from "@material-ui/icons";

interface Iprops {
  name: string;
  value?: string;
  label: string;
  error?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const useStyles = makeStyles({
  textfield: {
    marginBottom: 25,
    width: "100%",
  },
  input: {
    paddingBottom: 10,
    fontSize: "1.1rem",
  },
});

const Field = withStyles({
  root: {
    "& label": {
      color: "#000000",
      opacity: 0.4,
    },
    "& label.Mui-focused": {
      color: "#000000",
      opacity: 0.4,
    },
    "& .MuiInput-underline:before": {
      borderBottomWidth: 1,
      borderBottomColor: "#000000",
      opacity: 0.4,
    },
    "& .MuiInput-underline:after": {
      borderBottomWidth: 1,
      borderBottomColor: "#000000",
      opacity: 0.4,
    },
    "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
      borderBottomWidth: 1,
      borderBottomColor: "#000000",
      opacity: 0.4,
    },
  },
})(TextField);

const Input: React.FC<Iprops> = (props) => {
  const {name, value, onChange, label, error} = props;

  const styles = useStyles();
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Field
      label={label}
      name={name}
      className={styles.textfield}
      onChange={onChange}
      value={value}
      aria-label={name}
      {...(error && {error: true, helperText: error})}
      InputProps={{
        className: styles.input,
        autoComplete: "off",
      }}
      {...((name === "password" || name === "confirmPassword") && {
        InputProps: {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                edge="end"
                onClick={handleShowPasswordClick}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
          type: showPassword ? "text" : "password",
        },
      })}
      {...(name === "cardNumber" && {
        InputProps: {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton aria-label="credit card icon" edge="end">
                <CreditCard />
              </IconButton>
            </InputAdornment>
          ),
        },
      })}
    />
  );
};

export default Input;
