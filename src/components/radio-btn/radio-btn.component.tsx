import {Radio, RadioProps, withStyles} from "@material-ui/core";

const StyledRadio = withStyles({
  root: {
    color: "#000000",
    "&$checked": {
      color: "#000000",
    },
  },
  checked: {},
})(Radio);

const RadioBtn: React.FC<RadioProps> = (props) => {
  return <StyledRadio {...props} />;
};

export default RadioBtn;
