import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { Dispatch, FunctionComponent, SetStateAction, useState } from "react";
import { FiltersType } from "../../../types/FiltersType";

const theme = createTheme({
  palette: {
    primary: {
      light: "#0C1F39",
      main: "#0C1F39",
      dark: "#0C1F39",
    },
  },
});
interface CheckboxInputProps {
  options: string[];
  filters: FiltersType;
  setFilters: Dispatch<SetStateAction<FiltersType>>;
  name: string;
}
const CheckboxInput: FunctionComponent<CheckboxInputProps> = ({
  options,
  filters,
  setFilters,
  name,
}) => {
  const [values, setValues] = useState({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const val = { ...values, [event.target.name]: event.target.checked };
    setValues(val);
    setFilters({ ...filters, [name]: val });
  };

  return (
    <ThemeProvider theme={theme}>
      <FormGroup>
        {options.map((option, index) => (
          <FormControlLabel
            key={index}
            control={<Checkbox name={option} onChange={handleChange} />}
            label={option}
          />
        ))}
      </FormGroup>
    </ThemeProvider>
  );
};
export default CheckboxInput;
