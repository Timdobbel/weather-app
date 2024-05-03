import WeatherWidget from "./components/WeatherWidget";
import Widget from "./components/Widget";

interface Values {
  temperature: number;
}

interface Interval {
  startTime: string;
  values: Values;
}

interface Timeline {
  intervals: Interval[];
}

interface DataResponse {
  data: {
    timelines: Timeline[];
  };
}

async function getData(): Promise<DataResponse> {
  const apiKey = "sYyZhZZyimzRkw61SZPsaJULPBHLYgyi"; // Replace with your actual API key
  const city = "Groningen";
  const url = `https://api.tomorrow.io/v4/timelines?location=${city}&fields=temperature&timesteps=1h&units=metric&apikey=${apiKey}`;

  const res = await fetch(url);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();

  console.log(data.data.timelines[0].intervals);

  return (
    <main
      className=" min-h-screen "
      style={{
        backgroundImage: `url('/stacked-waves-haikei.svg')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    >
      <div className="">d</div>
      <div className="flex flex-col items-center gap-2 m-16">
        <WeatherWidget />
      </div>
    </main>
  );
}
