const getPropertiesList = async () => {
  const response = await fetch(
    "https://forsa-staging.bit68.com/api/v1/stores/real_estate/"
  );
  const properties = await response.json();
  return properties;
};
export default getPropertiesList;
