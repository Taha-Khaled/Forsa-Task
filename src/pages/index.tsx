import type { NextPage } from "next";
import getPropertiesList from "../apis/getPropertiesList";
import { PropertyType } from "../types/propertyType";
import styles from "../styles/Home.module.scss";
import { Box, Grid, Pagination, Typography } from "@mui/material";
import PropertiesList from "../components/PropertiesList";
import AsideFilters from "../components/AsideFilters";
import AreaFilter from "../components/AreaFilter";
import { useState } from "react";
interface HomeProps {
  items: PropertyType[];
}

const Home: NextPage<HomeProps> = ({ items }) => {
  const [properties, setProperties] = useState(items);
  return (
    <Grid
      container
      component={"main"}
      className={`container ${styles.homeContainer}`}
    >
      <Grid item className={styles.title}>
        <Typography component={"h1"}>Explore properties</Typography>
      </Grid>
      <Grid item className={styles.homeWrapper}>
        <AsideFilters />
        <Grid>
          <AreaFilter />
          <Box className={styles.center}>
            <PropertiesList properties={properties} />
          </Box>
          <Box className={styles.center}>
            <Pagination count={15} />
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export async function getServerSideProps() {
  try {
    const response = await getPropertiesList();
    return { props: { items: response?.results } };
  } catch (err) {
    return { props: { items: [] } };
  }
}

export default Home;
