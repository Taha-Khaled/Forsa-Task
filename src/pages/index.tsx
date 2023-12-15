import type { NextPage } from "next";
import getPropertiesList from "../apis/getPropertiesList";
import { PropertyType } from "../types/propertyType";

interface HomeProps {
  properties: PropertyType[];
}

const Home: NextPage<HomeProps> = ({ properties }) => {
  return <div className={"container"}></div>;
};

export async function getServerSideProps() {
  try {
    const properties = await getPropertiesList();
    return { props: { properties: properties?.results } };
  } catch (err) {
    return { props: { properties: [] } };
  }
}

export default Home;
