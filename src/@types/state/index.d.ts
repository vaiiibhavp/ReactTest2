export interface Car {
  Make: string;
  Model: string | number;
  "Vehicle Class": string;
  "Engine Size(L)": number | string;
  Cylinders: number | string;
  Transmission: string;
  "Fuel Type": string;
  "Fuel Consumption City (L/100 km)": number;
  "Fuel Consumption Hwy (L/100 km)": number;
  "Fuel Consumption Comb (L/100 km)": number;
  "Fuel Consumption Comb (mpg)": number;
  "CO2 Emissions(g/km)": number;
}

export type Cars = Record<string, Car[]>;

export interface CarDetail {
  value: string;
  count: number;
  percentage: number;
}
