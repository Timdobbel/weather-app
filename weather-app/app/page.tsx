// const apiKey = "sYyZhZZyimzRkw61SZPsaJULPBHLYgyi"; // Consider moving this to environment variables
// const city = "Groningen";
// const now = new Date(); // Current date and time
// const threeDaysFromNow = addDays(now, 3); // Calculate date 3 days from now
// const startDate = formatISO(now); // Format current date to ISO string
// const endDate = formatISO(threeDaysFromNow); // Format date 3 days from now to ISO string
// ! this url is not up to data, should be:  {{baseUrl}}/weather/forecast?location={{location}}&units={{units}}&timesteps=1h
// const url = `https://api.tomorrow.io/v4/timelines?location=${city}&fields=temperature&timesteps=1h&units=metric&start=${startDate}&end=${endDate}&apikey=${apiKey}`;
// const res = await fetch(url, { next: { revalidate: 1500 } });
// if (!res.ok) {
//   throw new Error("Failed to fetch data");
// }

import { weatherData } from "@/data.stub";
import WeatherForecastWidget from "./components/WeatherForecastWidget/WeatherForecastWidget";
import WeatherWidget from "./components/WeatherWidget";
import { formatISO, parseISO, addDays, format } from "date-fns";
import { Forecast } from "./interfaces/common";

// async function getData(): Promise<TomorrowResponse> {
async function getData(): Promise<Forecast[]> {
  const filteredData: Forecast[] = weatherData.timelines.hourly.map(
    (hourly) => {
      const { time, values } = hourly;
      // ? perhaps a wind widget
      const { temperature, humidity, weatherCode, windDirection, windSpeed } =
        values;

      // ! date should be formatted in the client to format according to local pc date?
      return {
        time: { day: format(time, "EEEE"), hour: format(time, "HH") },
        values: {
          temperature: Math.floor(temperature as number),
          humidity,
          weatherCode,
          windDirection,
          windSpeed,
        },
      };
    }
  );

  // const filteredHourlyForecasts = weatherData.timelines.hourly.map(
  //   (hourlyForecast) => ({
  //     ...hourlyForecast,
  //     values: {
  //       temperature: hourlyForecast.values.temperature,
  //       humidity: hourlyForecast.values.humidity,
  //       windSpeed: hourlyForecast.values.windSpeed,
  //       // Add any other properties you want to keep here
  //     },
  //   })
  // );

  // return res.json();
  return filteredData;
}

export default async function Home() {
  const data = await getData();

  return (
    <main
      className="min-h-screen bg-cover bg-center no-repeat p-10"
      style={{
        backgroundImage: `url('/stacked-waves-haikei.svg')`,
      }}
    >
      <div className="grid grid-cols-2 gap-6 justify-between max-w-[50rem] mx-auto">
        <div className="col-span-2 sm:col-span-1">
          <WeatherWidget city="Groningen" />
        </div>
        <div className="col-span-2 sm:col-span-1">
          <WeatherWidget city="New York" />
        </div>
        <div className="col-span-2">
          <WeatherForecastWidget data={data} />
        </div>
      </div>
    </main>
  );
}
