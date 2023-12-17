import { Box, Button, IconButton, Typography } from "@mui/material";
import styles from "./SidePageFilters.module.scss";
import RangeInput from "../Inputs/RangeInput";
import RadioInput from "../Inputs/RadioInput";
import { Dispatch, FunctionComponent, SetStateAction, useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import SliderCheckboxInput from "../Inputs/SliderCheckboxInput";
import { FiltersType } from "../../types/FiltersType";

interface FiltersProps {
  goBack: () => void;
  filters: FiltersType;
  setFilters: Dispatch<SetStateAction<FiltersType>>;
  handelApplyFilter?: () => void;
}

const Title = ({ text }: { text: string }) => {
  return (
    <Typography component={"h3"} className={styles.title}>
      {text}
    </Typography>
  );
};

const SidePageFilters: FunctionComponent<FiltersProps> = ({
  goBack,
  filters,
  setFilters,
  handelApplyFilter,
}) => {
  const handelApply = () => {
    handelApplyFilter?.();
    goBack();
  };

  return (
    <Box component={"aside"} className={`${styles.asideFiltersContainer}`}>
      <Box className={styles.header}>
        <IconButton onClick={goBack}>
          <ArrowBackIosIcon />
        </IconButton>
        <Typography component={"h2"}>Filter by:</Typography>
      </Box>
      <Box className={styles.filters}>
        <Box>
          <Title text={"Type of home"} />
          <SliderCheckboxInput
            options={["Appartment", "Twinhouse", "Duplex", "Villa"]}
            filters={filters}
            setFilters={setFilters}
            name="typeOfHome"
            defaultValue={filters?.typeOfHome}
          />
        </Box>
        <Box>
          <Title text={"Price range"} />
          <RangeInput
            filters={filters}
            setFilters={setFilters}
            name="priceRange"
            min={1000}
            max={3000000}
            minDistance={50000}
            labelFormatter={(price) => Intl.NumberFormat().format(price)}
            defaultValue={filters?.priceRange}
          />
        </Box>
        <Box>
          <Title text={"Number of bedrooms"} />
          <SliderCheckboxInput
            options={["Studio", "02", "03", "+4"]}
            filters={filters}
            setFilters={setFilters}
            name="numberOfBedrooms"
            defaultValue={filters?.numberOfBedrooms}
          />
        </Box>
        <Box>
          <Title text={"Area (sqm)"} />
          <RangeInput
            filters={filters}
            setFilters={setFilters}
            name="area"
            min={0}
            max={300}
            minDistance={25}
            labelFormatter={(price) => `${price} sqm`}
            defaultValue={filters?.area}
          />
        </Box>
        <Box>
          <Title text={"Furnishings"} />
          <RadioInput
            options={["Any", "Furnished", "Unfurnished"]}
            filters={filters}
            setFilters={setFilters}
            name="furnishings"
            defaultValue={filters?.furnishings}
          />
        </Box>
      </Box>
      <Box className={styles.applyBtn}>
        <Button onClick={handelApply} variant="contained">
          Apply
        </Button>
      </Box>
    </Box>
  );
};

export default SidePageFilters;
