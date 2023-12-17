export type FiltersType = {
  typeOfHome: {
    Apartment?: boolean;
    Twinhouse?: boolean;
    Duplex?: boolean;
    Villa?: boolean;
  };
  priceRange: number[];
  numberOfBedrooms: {
    Studio?: boolean;
    "02"?: boolean;
    "03"?: boolean;
    "+4"?: boolean;
  };
  area: number[];
  furnishings?: string;
};
