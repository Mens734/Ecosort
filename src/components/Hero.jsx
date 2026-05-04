import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <div className="rounded-3xl bg-linear-to-br from-emerald-700 to-teal-600 text-white px-8 py-14 mb-10 relative overflow-hidden">
      <div className="absolute top-0 right-0 text-[200px] opacity-10 leading-none select-none">
        ♻️
      </div>
      <p className="text-emerald-200 text-sm font-semibold uppercase tracking-widest mb-2">
        Smart Waste Sorting
      </p>
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
        Sort it right.
        <br />
        Help the planet.
      </h1>
      <p className="text-emerald-100 max-w-md mb-8 text-lg">
        EcoSort helps you identify and correctly dispose of any waste item —
        instantly.
      </p>
      <div className="flex flex-wrap gap-3">
        <button
          onClick={() => navigate("/waste")}
          className="bg-white text-emerald-700 font-bold px-6 py-3 rounded-full hover:bg-emerald-50 transition-all shadow"
        >
          Browse Waste Items
        </button>
        <button
          onClick={() => navigate("/tips")}
          className="border border-white/50 text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition-all"
        >
          View Tips
        </button>
      </div>
    </div>
  );
}
