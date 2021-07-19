import {
  Select,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
} from "@material-ui/core";

const FormSelector = () => {
  return (
    <FormControl component="fieldset" error>
      <InputLabel id="demo-simple-select-error-label">Name</InputLabel>
      <Select
        labelId="demo-simple-select-error-label"
        id="demo-simple-select-error"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
      {/* <FormHelperText>Error</FormHelperText> */}
    </FormControl>
  );
};

export default FormSelector;
