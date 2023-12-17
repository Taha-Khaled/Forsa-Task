import { Box, Divider, Typography } from "@mui/material";
import styles from "./AsideFilters.module.scss";
import RangeInput from "../Inputs/RangeInput";
import CheckboxInput from "../Inputs/CheckboxInput";
import RadioInput from "../Inputs/RadioInput";
import { Dispatch, SetStateAction } from "react";
import { FiltersType } from "../../types/FiltersType";

interface FiltersProps {
  filters: FiltersType;
  setFilters: Dispatch<SetStateAction<FiltersType>>;
  handelApplyFilter?: () => void;
}
const AsideFilters = ({
  filters,
  setFilters,
  handelApplyFilter,
}: FiltersProps) => {
  const Title = ({ text }: { text: string }) => {
    return (
      <Typography component={"h3"} className={styles.title}>
        {text}
      </Typography>
    );
  };

  return (
    <Box component={"aside"} className={`${styles.asideFiltersContainer}`}>
      <Box className={styles.header}>
        <Typography component={"h2"}>Filter by:</Typography>
        <Divider />
      </Box>
      <Box>
        <Title text={"Type of home"} />
        <CheckboxInput
          options={["Appartment", "Twinhouse", "Duplex", "Villa"]}
          filters={filters}
          setFilters={setFilters}
          name="typeOfHome"
        />
        <Divider />
      </Box>
      <Box>
        <Title text={"Price range"} />
        <RangeInput
          filters={filters}
          setFilters={setFilters}
          name="priceRange"
          min={1000}
          max={5000000}
          minDistance={1000}
          valueFormatter={(price) => Intl.NumberFormat().format(price)}
          defaultValue={filters?.priceRange}
        />
        <Divider />
      </Box>
      <Box>
        <Title text={"Number of bedrooms"} />
        <CheckboxInput
          options={["Studio", "02", "03", "+4"]}
          filters={filters}
          setFilters={setFilters}
          name="numberOfBedrooms"
        />
        <Divider />
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
          valueFormatter={(price) => `${price} sqm`}
          defaultValue={filters?.area}
        />
        <Divider />
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
  );
};

export default AsideFilters;
