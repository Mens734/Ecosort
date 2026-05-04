export const categories = ["All", "Plastic", "Organic", "Hazardous", "Paper", "Glass", "E-Waste", "Metal"];

export const categoryColors = {
  Plastic: { bg: "bg-blue-100", text: "text-blue-700", dot: "bg-blue-500" },
  Organic: { bg: "bg-emerald-100", text: "text-emerald-700", dot: "bg-emerald-500" },
  Hazardous: { bg: "bg-red-100", text: "text-red-700", dot: "bg-red-500" },
  Paper: { bg: "bg-amber-100", text: "text-amber-700", dot: "bg-amber-500" },
  Glass: { bg: "bg-cyan-100", text: "text-cyan-700", dot: "bg-cyan-500" },
  "E-Waste": { bg: "bg-purple-100", text: "text-purple-700", dot: "bg-purple-500" },
  Metal: { bg: "bg-slate-100", text: "text-slate-700", dot: "bg-slate-500" },
};

export const wasteItems = [
  { id: 1, name: "Plastic Bottle", category: "Plastic", icon: "🍶", method: "Rinse and place in the blue recycling bin. Remove caps and labels if possible.", tip: "Crushing the bottle saves space in your recycling bin." },
  { id: 2, name: "Food Scraps", category: "Organic", icon: "🍎", method: "Place in compost or organic waste bin (usually brown). Avoid meat and dairy in home compost.", tip: "Composting food scraps reduces methane emissions from landfills." },
  { id: 3, name: "AA Battery", category: "Hazardous", icon: "🔋", method: "Never throw in regular trash. Drop off at a designated battery collection point or electronics retailer.", tip: "Batteries contain toxic chemicals that can leach into soil and groundwater." },
  { id: 4, name: "Cardboard Box", category: "Paper", icon: "📦", method: "Flatten and place in the recycling bin. Remove tape and staples if possible.", tip: "Wet or greasy cardboard (e.g. pizza boxes) may not be recyclable — compost instead." },
  { id: 5, name: "Glass Jar", category: "Glass", icon: "🫙", method: "Rinse and place in the glass recycling bin. Do not mix with ceramics or pyrex.", tip: "Glass can be recycled endlessly without losing quality." },
  { id: 6, name: "Old Smartphone", category: "E-Waste", icon: "📱", method: "Take to an e-waste collection point, certified recycler, or manufacturer take-back program.", tip: "Smartphones contain valuable metals like gold and cobalt that can be recovered." },
  { id: 7, name: "Aluminium Can", category: "Metal", icon: "🥫", method: "Rinse and place in the recycling bin. Keep the lid attached or crush it inside the can.", tip: "Recycling aluminium uses 95% less energy than producing it from raw material." },
  { id: 8, name: "Plastic Bag", category: "Plastic", icon: "🛍️", method: "Do not put in kerbside recycling — it jams sorting machines. Return to supermarket collection points.", tip: "Switch to reusable bags to avoid this entirely." },
  { id: 9, name: "Newspaper", category: "Paper", icon: "📰", method: "Place in the recycling bin. Keep dry — wet paper is harder to recycle.", tip: "One tonne of recycled newspaper saves about 17 trees." },
  { id: 10, name: "Cooking Oil", category: "Hazardous", icon: "🫒", method: "Never pour down the drain. Let it cool, seal in a container, and take to a special collection point.", tip: "Used cooking oil can be converted to biodiesel." },
  { id: 11, name: "Broken Glass", category: "Glass", icon: "🔪", method: "Wrap carefully in newspaper or thick paper, label 'broken glass', and place in general waste.", tip: "Broken glass is dangerous for sorting workers and cannot go in standard glass recycling." },
  { id: 12, name: "Tin Foil", category: "Metal", icon: "✨", method: "Ball it up into a fist-sized clump before recycling — small pieces fall through sorting machines.", tip: "Clean foil is 100% recyclable, but greasy foil should go in general waste." },
  { id: 13, name: "Milk Carton", category: "Paper", icon: "🥛", method: "Rinse, flatten, and place in recycling. Some councils require removal of the plastic cap.", tip: "Tetra Pak cartons are made of several layers and need specialist recycling facilities." },
  { id: 14, name: "Paint Can", category: "Hazardous", icon: "🪣", method: "Take to a hazardous waste facility. Dried, empty paint cans can go in general waste.", tip: "Water-based paints are less toxic than oil-based — choose them when possible." },
  { id: 15, name: "Leaves & Garden Waste", category: "Organic", icon: "🍃", method: "Place in compost bin or take to garden waste collection. Avoid mixing with general waste.", tip: "Garden waste makes excellent compost in 3–6 months." },
  { id: 16, name: "Light Bulb (LED)", category: "E-Waste", icon: "💡", method: "Take to a recycling point — many hardware stores accept them. Do not put in kerbside recycling.", tip: "LEDs last up to 25x longer than incandescent bulbs and use 75% less energy." },
];

export const tips = [
  { icon: "♻️", title: "Reduce First", body: "The most powerful action is to reduce consumption. Before recycling, ask if you actually need it." },
  { icon: "🚿", title: "Rinse Containers", body: "Dirty containers contaminate entire loads of recyclables. A quick rinse makes a real difference." },
  { icon: "🏷️", title: "Check Local Rules", body: "Recycling rules vary by location. When in doubt, check your local council's guidelines." },
  { icon: "🔁", title: "Buy Recycled", body: "Close the loop — buy products made from recycled materials to create demand for recycled goods." },
  { icon: "📦", title: "Avoid Black Plastic", body: "Black plastic can't be detected by optical sorting machines and usually ends up in landfill." },
  { icon: "🌱", title: "Compost at Home", body: "A home compost bin can divert up to 30% of household waste from landfill and produces free fertiliser." },
];


