import type { NextPage } from "next";
import getPropertiesList from "../apis/getPropertiesList";
import { PropertyType } from "../types/propertyType";
import styles from "../styles/Home.module.scss";
import { Box, Grid, IconButton, Pagination, Typography } from "@mui/material";
import PropertiesList from "../components/PropertiesList";
import AsideFilters from "../components/AsideFilters";
import AreaFilter from "../components/AreaFilter";
import { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SidePageFilters from "../components/SidePageFilters";
import { FiltersType } from "../types/FiltersType";
import { getTruthyKeys } from "../utils/getTruthyKeys";

interface HomeProps {
  items: PropertyType[];
}

const defaultFilters = {
  typeOfHome: {
    Apartment: false,
    Twinhouse: false,
    Duplex: false,
    Villa: false,
  },
  priceRange: [],
  numberOfBedrooms: {
    Studio: false,
    "02": false,
    "03": false,
    "+4": false,
  },
  area: [],
  furnishings: "",
};

const Home: NextPage<HomeProps> = ({ items }) => {
  const [properties, setProperties] = useState(items);
  const [showFilterPage, setShowFilterPage] = useState(false);
  const [filters, setFilters] = useState<FiltersType>(defaultFilters);

  const handelApplyFilter = () => {
    let filteredProperties = items;

    if (filters?.area?.length) {
      filteredProperties = filteredProperties.filter(
        (item) =>
          item.area > filters?.area?.[0] && item.area < filters?.area?.[1]
      );
    }

    if (filters?.priceRange?.length) {
      filteredProperties = filteredProperties.filter(
        (item) =>
          item.price > filters?.priceRange?.[0] &&
          item.price <= filters?.priceRange?.[1]
      );
    }

    if (filters?.furnishings?.length && filters?.furnishings !== "Any") {
      filteredProperties = filteredProperties.filter((item) => {
        const furnished = item.furnished ? "Furnished" : "Unfurnished";
        return filters?.furnishings === furnished;
      });
    }

    if (getTruthyKeys(filters.typeOfHome)?.length) {
      filteredProperties = filteredProperties.filter((item) =>
        getTruthyKeys(filters.typeOfHome).includes(item.home_type)
      );
    }

    if (getTruthyKeys(filters.numberOfBedrooms)?.length) {
      filteredProperties = filteredProperties.filter((item) => {
        const cases = getTruthyKeys(filters.numberOfBedrooms);
        if (cases.includes("Studio") && item.bedrooms_no == "1") return true;
        if (cases.includes("02") && item.bedrooms_no == "2") return true;
        if (cases.includes("03") && item.bedrooms_no == "3") return true;
        if (cases.includes("+4") && item.bedrooms_no >= "4") return true;
        return false;
      });
    }

    setProperties(filteredProperties);
  };

  useEffect(() => {
    if (!showFilterPage) handelApplyFilter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  return (
    <Fragment>
      {showFilterPage ? (
        <SidePageFilters
          goBack={() => setShowFilterPage(false)}
          filters={filters!}
          setFilters={setFilters}
          handelApplyFilter={handelApplyFilter}
        />
      ) : (
        <Fragment>
          <Header />
          <Grid
            container
            component={"main"}
            className={`container ${styles.homeContainer}`}
          >
            <Grid className={styles.filterBtn}>
              <IconButton onClick={() => setShowFilterPage(true)}>
                <Image
                  src={"/images/filter.svg"}
                  alt="facebook"
                  width="48px"
                  height="48px"
                />
              </IconButton>
            </Grid>
            <Grid item className={styles.title}>
              <Typography component={"h1"}>Explore properties</Typography>
            </Grid>
            <Grid item className={styles.homeWrapper}>
              <AsideFilters filters={filters!} setFilters={setFilters} />
              <Grid>
                <AreaFilter />
                {properties?.length ? (
                  <Fragment>
                    <Box className={styles.center}>
                      <PropertiesList properties={properties} />
                    </Box>
                    <Box className={styles.center}>
                      <Pagination count={15} />
                    </Box>
                  </Fragment>
                ) : (
                  <Box>
                    <Typography fontSize={30}>No Property Found!</Typography>
                  </Box>
                )}
              </Grid>
            </Grid>
          </Grid>
          <Footer />
        </Fragment>
      )}
    </Fragment>
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
