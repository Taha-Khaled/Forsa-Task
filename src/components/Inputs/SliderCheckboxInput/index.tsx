import { Dispatch, FunctionComponent, SetStateAction, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Box } from "@mui/material";
import styles from "./SliderCheckboxInput.module.scss";
import { FiltersType } from "../../../types/FiltersType";

interface SliderCheckboxInputProps {
  options: string[];
  filters: FiltersType;
  setFilters: Dispatch<SetStateAction<FiltersType>>;
  name: string;
  defaultValue?: object;
}
const SliderCheckboxInput: FunctionComponent<SliderCheckboxInputProps> = ({
  options,
  filters,
  setFilters,
  name,
  defaultValue,
}) => {
  const [values, setValues] = useState(defaultValue);

  const handleChange = (option: string) => {
    const val = {
      ...values,
      [option]: !values?.[option as keyof typeof values],
    };
    setValues(val);
    setFilters({ ...filters, [name]: val });
  };

  const [ref] = useKeenSlider<HTMLDivElement>({
    slides: { perView: 3.25, spacing: 10 },
  });
  return (
    <Box ref={ref} className="keen-slider">
      {options.map((option, index) => (
        <Box
          key={index}
          className={`keen-slider__slide ${styles.chip} ${
            values?.[option as keyof typeof values] ? styles.selected : ""
          }`}
          onClick={() => handleChange(option)}
        >
          {option}
        </Box>
      ))}
    </Box>
  );
};

export default SliderCheckboxInput;
