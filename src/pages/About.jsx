export default function About() {
  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* HERO */}
        <section className="text-center max-w-2xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            EcoSort
          </h1>
          <p className="mt-4 text-gray-600 text-sm sm:text-base">
            A simple web application that helps users identify and properly
            dispose of different types of waste.
          </p>
        </section>

        {/* OVERVIEW */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Overview
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              EcoSort is a frontend web application designed to guide users in
              sorting waste correctly. Many people are unsure how to dispose of
              materials such as plastics, organic waste, and electronic items.
              This application provides clear information to make waste disposal
              easier and more responsible.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-medium text-gray-800">Platform</p>
                <p className="text-gray-500">Web Application</p>
              </div>
              <div>
                <p className="font-medium text-gray-800">Type</p>
                <p className="text-gray-500">Frontend Project</p>
              </div>
              <div>
                <p className="font-medium text-gray-800">Focus</p>
                <p className="text-gray-500">Waste Management</p>
              </div>
              <div>
                <p className="font-medium text-gray-800">Year</p>
                <p className="text-gray-500">2026</p>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            Features
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              "Search waste items by name",
              "Filter waste items by category",
              "View detailed disposal instructions",
              "Browse waste categories",
              "View environmental tips",
              "Responsive design for mobile and desktop",
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm"
              >
                <p className="text-gray-700 text-sm sm:text-base">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="bg-white border border-gray-200 rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            How it works
          </h2>

          <div className="grid sm:grid-cols-3 gap-4 text-sm sm:text-base">
            <div>
              <p className="font-semibold text-gray-800">Search</p>
              <p className="text-gray-500">
                Enter a waste item to find it quickly
              </p>
            </div>
            <div>
              <p className="font-semibold text-gray-800">Explore</p>
              <p className="text-gray-500">
                View its category and details
              </p>
            </div>
            <div>
              <p className="font-semibold text-gray-800">Dispose</p>
              <p className="text-gray-500">
                Follow the recommended method
              </p>
            </div>
          </div>
        </section>

        {/* TECHNOLOGY */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Technology
          </h2>

          <div className="flex flex-wrap gap-3">
            {["React", "React Router", "Tailwind CSS"].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* DEVELOPER */}
        <section className="border-t border-gray-200 pt-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            Developer
          </h2>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="w-24 h-24 rounded-full bg-gray-500" />

            <div className="text-sm sm:text-base text-center sm:text-left">
              <p><strong>Name:</strong> Nynel Buadu Mensah-Effinburg</p>
              <p><strong>Student ID:</strong> 22392476</p>
              <p><strong>Course:</strong> Computer Science</p>
              <p><strong>Institution:</strong> University of Ghana</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}