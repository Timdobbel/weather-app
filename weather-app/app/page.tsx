import { mockWeatherData } from "@/data.stub";
import WeatherForecastWidget from "./components/WeatherForecastWidget/WeatherForecastWidget";
import WeatherWidget from "./components/WeatherWidget";
import { format } from "date-fns";
import { Forecast } from "./interfaces/common";
import { WeatherData } from "./interfaces/tommorowio";

async function fetchWeather(): Promise<WeatherData> {
  if (!process.env.API_KEY) throw new Error("Missing API key env variable");

  const url = `https://api.tomorrow.io/v4/weather/forecast?location=14.534209,121.032311&units=metric&timesteps=1h&fields=temperature,chanceOfRain,humidity&apikey=${process.env.API_KEY}`;
  const res = await fetch(url, { next: { revalidate: 1500 } });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json(); // Correctly parse the response body
  console.log(data);

  return data;
}

// async function getData(): Promise<TomorrowResponse> {
async function getData(): Promise<Forecast[]> {
  console.log(
    JSON.parse(process.env.MOCK_API as string)
      ? "Fetching using mock api..."
      : "Fetching using tomorrow.io api..."
  );

  const data = JSON.parse(process.env.MOCK_API as string)
    ? mockWeatherData
    : ((await fetchWeather()) as unknown as WeatherData);

  const filteredData: Forecast[] = data?.timelines.hourly.map((hourly) => {
    const { time, values } = hourly;
    const { temperature, humidity, weatherCode, windDirection, windSpeed } =
      values;

    // TODO date should be formatted on client, not server
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
  });

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
          <WeatherWidget city="Groningen" data={data} />
        </div>
        <div className="col-span-2 sm:col-span-1">
          <WeatherWidget city="New York" data={data} />
        </div>
        <div className="col-span-2">
          <WeatherForecastWidget data={data} />
        </div>
      </div>
    </main>
  );
}
