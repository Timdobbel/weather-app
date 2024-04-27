async function getData() {
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
      <div>d</div>
      <div className="flex flex-col items-center gap-2 m-16">
        <div className="flex justify-between w-full bg-slate-400 rounded-3xl shadow-2xl p-6">
          <div className="w-full flex flex-col">
            <span className="text-xl">Groningen</span>
            <span className="text-4xl">60°C</span>
          </div>
          <div className="flex flex-col justify-end text-right">
            <span className="">Sunny</span>
            <span className="">H:69°</span>
            <span className="">L:51°</span>
          </div>
        </div>
        <span>Weather</span>
      </div>
    </main>
  );
}
