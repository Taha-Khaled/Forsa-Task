import { Box, Slider } from "@mui/material";
import { Dispatch, FunctionComponent, SetStateAction, useState } from "react";
import { FiltersType } from "../../../types/FiltersType";

interface RangeInputProps {
  filters: FiltersType;
  setFilters: Dispatch<SetStateAction<FiltersType>>;
  name: string;
  min: number;
  max: number;
  minDistance: number;
  valueFormatter: (price: number) => string | number;
  defaultValue?: number[];
}

const RangeInput: FunctionComponent<RangeInputProps> = ({
  filters,
  setFilters,
  name,
  minDistance,
  valueFormatter,
  max,
  min,
  defaultValue,
}) => {
  const [priceRange, setPriceRange] = useState<number[]>(
    defaultValue?.length === 2 ? defaultValue : [minDistance, max - minDistance]
  );

  const handleChangePriceRange = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }
    if (activeThumb === 0) {
      const newRange = [
        Math.min(newValue[0], priceRange[1] - minDistance),
        priceRange[1],
      ];
      setPriceRange(newRange);
      setFilters({ ...filters, [name]: newRange });
    } else {
      const newRange = [
        priceRange[0],
        Math.max(newValue[1], priceRange[0] + minDistance),
      ];
      setPriceRange(newRange);
      setFilters({ ...filters, [name]: newRange });
    }
  };

  return (
    <Box sx={{ width: "92%", display: "flex", justifyContent: "center" }}>
      <Slider
        value={priceRange}
        onChange={handleChangePriceRange}
        valueLabelDisplay="auto"
        valueLabelFormat={valueFormatter}
        min={min}
        max={max}
        color="primary"
        disableSwap
      />
    </Box>
  );
};
export default RangeInput;
