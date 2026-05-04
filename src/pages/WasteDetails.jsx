import { useParams, useNavigate } from "react-router-dom";
import { wasteItems, categoryColors } from "../data/data";

export default function WasteDetail() {
  const { id } = useParams(); // get ID from URL
  const navigate = useNavigate();

  // find the item
  const item = wasteItems.find(i => i.id === Number(id));

  // if not found
  if (!item) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-10 text-center">
        <h2 className="text-xl font-bold text-red-500">Item not found</h2>
        <button
          onClick={() => navigate("/waste")}
          className="mt-4 text-emerald-600 underline"
        >
          Go back
        </button>
      </div>
    );
  }

  const colors = categoryColors[item.category];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">

      {/* BACK BUTTON */}
      <button
        onClick={() => navigate("/waste")}
        className="mb-6 text-sm text-stone-500 hover:text-emerald-600"
      >
        ← Back to Waste Items
      </button>

      {/* CARD */}
      <div className="bg-white rounded-3xl shadow border overflow-hidden">

        {/* TOP */}
        <div className="bg-linear-to-br from-emerald-50 to-teal-50 px-8 py-10 flex items-center gap-6">
          <span className="text-6xl">{item.icon}</span>

          <div>
            <span className={`text-xs px-3 py-1 rounded-full font-bold ${colors.bg} ${colors.text}`}>
              {item.category}
            </span>

            <h1 className="text-3xl font-extrabold text-stone-800 mt-2">
              {item.name}
            </h1>
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-8 space-y-6">

          {/* METHOD */}
          <div>
            <h2 className="text-xs uppercase text-stone-400 font-bold mb-2">
              Disposal Method
            </h2>

            <p className="text-stone-700">
              {item.method}
            </p>
          </div>

          {/* TIP */}
          <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5">
            <h2 className="text-xs uppercase text-amber-600 font-bold mb-2">
              💡 Eco Tip
            </h2>

            <p className="text-stone-700">
              {item.tip}
            </p>
          </div>

          {/* CTA */}
          <button
            onClick={() => navigate("/tips")}
            className="text-emerald-600 font-semibold hover:underline text-sm"
          >
            View all recycling tips →
          </button>

        </div>
      </div>
    </div>
  );
}