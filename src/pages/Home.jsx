import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../components/Hero";
import { categories, categoryColors } from "../data/data";
export default function Home() {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();
    const handleSearch = (e) => {
        setSearch(e.target.value);
        navigate("/waste?search=" + e.target.value);
    };

  return (
    <div className="min-h-screen p-2 bg-[#EDE6DD]">
      <Hero />

        {/* QUICK SEARCH */}
      <div className="mb-10">
        <h2 className="text-xl font-bold mb-3 text-stone-700">
          Quick Search
        </h2>

        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400">
            🔍
          </span>

          <input
            value={search}
            onChange={handleSearch}
            placeholder="Search waste (e.g. bottle, battery)..."
            className="w-full pl-12 pr-4 py-4 rounded-2xl border border-stone-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </div>

      {/* CATEGORY CARDS */}
      <h2 className="text-xl font-bold mb-4 text-stone-700">
        Browse by Category
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-10">
        {categories
          .filter((c) => c !== "All")
          .map((cat) => {
            const colors = categoryColors[cat];

            return (
              <button
                key={cat}
                onClick={() => navigate(`/waste?category=${cat}`)}
                className={`${colors.bg} ${colors.text} rounded-2xl p-5 text-left font-semibold hover:opacity-80`}
              >
                <div
                  className={`w-2.5 h-2.5 rounded-full ${colors.dot} mb-3`}
                />
                {cat}
              </button>
            );
          })}
      </div>
    </div>
  );
}
