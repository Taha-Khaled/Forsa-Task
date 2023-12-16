import { FunctionComponent } from "react";
import { PropertyType } from "../../types/propertyType";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import styles from "./PropertiesList.module.scss";

interface PropertiesListProps {
  properties: PropertyType[];
}

const PropertiesList: FunctionComponent<PropertiesListProps> = ({
  properties,
}) => {
  const PropertyInfoCard = ({
    price,
    address,
    area,
    bedrooms_no,
    bathrooms_no,
  }: PropertyType) => {
    return (
      <Box className={styles.propertyInfo}>
        <Box className={styles.price}>
          <Typography>{Intl.NumberFormat().format(price)} EGP/mo</Typography>
        </Box>
        <Box className={styles.address}>
          <Image
            src={"/images/location.svg"}
            width={15.37}
            height={18.17}
            alt="address"
          />
          <Typography>{address}</Typography>
        </Box>
        <Box className={styles.areaDetails}>
          <Box className={styles.row}>
            <Image
              src={"/images/bedroom.svg"}
              width={23.03}
              height={17.04}
              alt="address"
            />
            <Typography>{bedrooms_no} BR(s)</Typography>
          </Box>
          <Box className={styles.row}>
            <Image
              src={"/images/bathroom.svg"}
              width={17.05}
              height={17.04}
              alt="address"
            />
            <Typography>{bathrooms_no} Bath(s)</Typography>
          </Box>
          <Box className={styles.row}>
            <Image
              src={"/images/area.svg"}
              width={19.42}
              height={17.99}
              alt="area"
            />
            <Typography>{area} sqm</Typography>
          </Box>
        </Box>
      </Box>
    );
  };

  return (
    <Grid
      container
      component={"section"}
      className={styles.propertiesListContainer}
    >
      {properties?.map((property) => (
        <Grid
          key={property?.id}
          item
          xs={12}
          lg={4}
          className={styles.propertyCard}
        >
          <Box className={styles.imageWrapper}>
            <Image
              className={styles.propertyImg}
              alt="property"
              src={property?.image}
              width={305}
              height={218}
            />
            <IconButton className={styles.likeBtn}>
              <Image
                alt="like"
                src={"/images/like.svg"}
                width={18.51}
                height={17.21}
              />
            </IconButton>
          </Box>
          <PropertyInfoCard {...property} />
        </Grid>
      ))}
    </Grid>
  );
};
export default PropertiesList;
