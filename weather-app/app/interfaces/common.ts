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
