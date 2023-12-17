import {
  Divider,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import {
  Dispatch,
  Fragment,
  FunctionComponent,
  SetStateAction,
  useState,
} from "react";
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
interface RadioInputProps {
  options: string[];
  filters: FiltersType;
  setFilters: Dispatch<SetStateAction<FiltersType>>;
  name: string;
  defaultValue?: string;
}
const RadioInput: FunctionComponent<RadioInputProps> = ({
  options,
  filters,
  setFilters,
  name,
  defaultValue,
}) => {
  const [value, setValue] = useState(
    defaultValue?.length ? defaultValue : options[0]
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const val = event.target.value;
    setValue(val);
    setFilters({ ...filters, [name]: val });
  };

  return (
    <ThemeProvider theme={theme}>
      <FormControl sx={{ width: "90%" }}>
        <RadioGroup value={value} onChange={handleChange}>
          {options.map((option, key) => (
            <Fragment key={key}>
              <FormControlLabel
                sx={{ width: "100%" }}
                value={option}
                control={<Radio />}
                label={option}
              />
              {key !== options.length - 1 ? <Divider /> : <></>}
            </Fragment>
          ))}
        </RadioGroup>
      </FormControl>
    </ThemeProvider>
  );
};
export default RadioInput;
