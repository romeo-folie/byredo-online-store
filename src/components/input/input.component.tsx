import React, {ChangeEvent} from "react";
import {
  TextField,
  InputAdornment,
  IconButton,
  makeStyles,
  withStyles,
} from "@material-ui/core";
import {Visibility, VisibilityOff} from "@material-ui/icons";

interface Iprops {
  name: string;
  value?: string;
  label: string;
  error?: string;
  showPassword?: boolean;
  onShowPasswordClick?: () => void;
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
  const {
    name,
    value,
    onChange,
    label,
    error,
    showPassword,
    onShowPasswordClick,
  } = props;
  const styles = useStyles();

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
      }}
      {...(name === "password" && {
        InputProps: {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                edge="end"
                onClick={onShowPasswordClick}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
          type: showPassword ? "text" : "password",
        },
      })}
    />
  );
};

export default Input;
