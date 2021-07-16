import {Radio, RadioProps, withStyles} from "@material-ui/core";

const StyledRadio = withStyles({
  root: {
    color: "#000000",
    "& $checked": {
      color: "#000000",
    },
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  checked: {},
})(Radio);

const RadioBtn: React.FC<RadioProps> = (props) => {
  return <StyledRadio color="default" {...props} />;
};

export default RadioBtn;
