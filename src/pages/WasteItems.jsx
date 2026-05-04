import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { wasteItems, categories, categoryColors } from "../data/data";

export default function WasteItems() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // get values from URL
  const searchQuery = searchParams.get("search") || "";
  const categoryQuery = searchParams.get("category") || "All";

  // state
  const [search, setSearch] = useState(searchQuery);
  const [filter, setFilter] = useState(categoryQuery);

  // sync when URL changes
  useEffect(() => {
    setSearch(searchQuery);
    setFilter(categoryQuery);
  }, [searchQuery, categoryQuery]);

  // filter logic
  const filtered = wasteItems.filter(item => {
    const matchSearch = item.name.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === "All" || item.category === filter;
    return matchSearch && matchFilter;
  });

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">

      <h1 className="text-3xl font-extrabold mb-6 text-stone-800">
        Waste Items
      </h1>

      {/* SEARCH + FILTER */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">

        {/* Search */}
        <input
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            navigate(`/waste?search=${e.target.value}&category=${filter}`);
          }}
          placeholder="Search items..."
          className="flex-1 px-4 py-2.5 rounded-xl border border-stone-200 focus:ring-2 focus:ring-emerald-400 outline-none"
        />

        {/* Filter */}
        <select
          value={filter}
          onChange={(e) => {
            setFilter(e.target.value);
            navigate(`/waste?search=${search}&category=${e.target.value}`);
          }}
          className="px-4 py-2.5 rounded-xl border border-stone-200 focus:ring-2 focus:ring-emerald-400 outline-none"
        >
          {categories.map(c => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </div>

      {/* RESULTS */}
      {filtered.length === 0 ? (
        <div className="text-center py-16 text-stone-400">
          <div className="text-5xl mb-3">🔍</div>
          <p className="font-semibold">No items found</p>
          <p className="text-sm">Try a different search</p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">

          {filtered.map(item => {
            const colors = categoryColors[item.category];

            return (
              <button
                key={item.id}
                onClick={() => navigate(`/waste/${item.id}`)}
                className="bg-white rounded-2xl p-5 text-left shadow border hover:shadow-md transition"
              >
                <div className="flex justify-between mb-3">
                  <span className="text-3xl">{item.icon}</span>

                  <span className={`text-xs px-2 py-1 rounded-full ${colors.bg} ${colors.text}`}>
                    {item.category}
                  </span>
                </div>

                <h3 className="font-bold text-stone-800 mb-1">
                  {item.name}
                </h3>

                <p className="text-xs text-stone-500 line-clamp-2">
                  {item.method}
                </p>

                <div className="mt-3 text-emerald-600 text-xs font-semibold">
                  View details →
                </div>
              </button>
            );
          })}

        </div>
      )}
    </div>
  );
}