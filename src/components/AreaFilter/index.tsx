import { Box, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import { areaValues } from "./mockedData";
import styles from "./AreaFilter.module.scss";

const AreaFilter: FunctionComponent = () => {
  return (
    <Box className={styles.areaFilterContainer}>
      {areaValues.map(({ min, max }, index) => (
        <Box
          key={index}
          className={`${styles.areaCard} ${styles[`card${index}`]}`}
        >
          <Typography>{`${min} - ${max} SQM`}</Typography>
        </Box>
      ))}
    </Box>
  );
};
export default AreaFilter;
