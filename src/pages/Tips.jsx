import { tips } from "../data/data";
import { Link } from "react-router-dom";

export default function Tips() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">

      <h1 className="text-3xl font-extrabold mb-2 text-stone-800">
        Eco Tips
      </h1>

      <p className="text-stone-500 mb-8">
        Simple practices that make a big difference for our planet.
      </p>

      {/* TIPS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        {tips.map((tip, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-sm border flex gap-4"
          >
            <span className="text-3xl mt-1">{tip.icon}</span>

            <div>
              <h3 className="font-bold text-stone-800 mb-1">
                {tip.title}
              </h3>

              <p className="text-stone-500 text-sm leading-relaxed">
                {tip.body}
              </p>
            </div>
          </div>
        ))}

      </div>

      {/* CTA SECTION */}
      <div className="mt-10 bg-linear-to-br from-emerald-700 to-teal-600 text-white rounded-3xl p-8 text-center">

        <h2 className="text-2xl font-extrabold mb-2">
          Every action counts
        </h2>

        <p className="text-emerald-100 mb-5">
          Start with one habit this week — proper sorting makes a real impact.
        </p>

        <Link 
          to="/waste"
          className="bg-white text-emerald-700 font-bold px-6 py-2.5 rounded-full hover:bg-emerald-50"
        >
          Browse Waste Items
        </Link>
      </div>

    </div>
  );
}