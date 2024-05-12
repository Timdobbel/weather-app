export interface FilteredValues {
  temperature: number;
  humidity: number;
  windSpeed: number;
  windDirection: number;
  weatherCode: number;
}

export interface Forecast {
  time: {
    hour: string;
    day: string;
  };
  values: Partial<FilteredValues>;
}

export const location = {
  groningen: "53.220570,6.566798",
  manila: "14.534209,121.032311",
};
