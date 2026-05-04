import { useNavigate } from "react-router-dom";
import { categories, wasteItems, categoryColors } from "../data/data";

export default function Categories() {
  const navigate = useNavigate();

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">

      <h1 className="text-3xl font-extrabold mb-2 text-stone-800">
        Waste Categories
      </h1>

      <p className="text-stone-500 mb-8">
        Explore each waste category and learn how to handle them.
      </p>

      <div className="space-y-5">

        {categories
          .filter(category => category !== "All")
          .map(category => {

            const colors = categoryColors[category];

            // get items in this category
            const items = wasteItems.filter(
              item => item.category === category
            );

            return (
              <div
                key={category}
                className="bg-white rounded-2xl border shadow overflow-hidden"
              >

                {/* HEADER */}
                <div className={`${colors.bg} px-6 py-4 flex justify-between items-center`}>
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${colors.dot}`} />
                    <h2 className={`font-bold text-lg ${colors.text}`}>
                      {category}
                    </h2>
                  </div>

                  <span className={`text-sm font-semibold ${colors.text} opacity-70`}>
                    {items.length} item{items.length !== 1 ? "s" : ""}
                  </span>
                </div>

                {/* ITEMS */}
                <div className="px-6 py-4 flex flex-wrap gap-2">

                  {items.map(item => (
                    <button
                      key={item.id}
                      onClick={() => navigate(`/waste/${item.id}`)}
                      className="flex items-center gap-2 bg-stone-50 hover:bg-stone-100 border rounded-full px-3 py-1.5 text-sm"
                    >
                      <span>{item.icon}</span>
                      {item.name}
                    </button>
                  ))}

                </div>
              </div>
            );
          })}
      </div>

    </div>
  );
}