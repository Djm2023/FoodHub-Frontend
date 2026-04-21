const Shimmer = () => {
  return (
    <div className="px-3 sm:px-4 md:px-6 py-4 space-y-6">
      {/* 🔍 Search Bar */}
      <div className="flex justify-center">
        <div className="w-full max-w-xl sm:max-w-2xl h-10 sm:h-12 bg-gray-300 rounded-full shimmer" />
      </div>

      {/* 🔘 Filters */}
      <div className="flex justify-center gap-2 sm:gap-3 flex-wrap">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="w-20 sm:w-24 h-7 sm:h-8 bg-gray-300 rounded-full shimmer"
          />
        ))}
      </div>

      {/* 🎯 Banner Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="h-32 sm:h-40 md:h-44 bg-gray-300 rounded-xl sm:rounded-2xl shimmer"
          />
        ))}
      </div>

      {/* 🍔 Categories */}
      <div>
        <div className="h-5 sm:h-6 w-32 sm:w-40 bg-gray-300 rounded mb-3 sm:mb-4 shimmer" />

        {/* Horizontal scroll (important for mobile UX) */}
        <div className="flex gap-3 sm:gap-4 overflow-x-auto scrollbar-hide">
          {[...Array(19)].map((_, i) => (
            <div
              key={i}
              className="min-w-[64px] sm:min-w-[80px] h-16 sm:h-20 bg-gray-300 rounded-lg sm:rounded-xl shimmer"
            />
          ))}
        </div>
      </div>

      {/* 🍽️ Restaurant Cards */}
      <div>
        <div className="h-5 sm:h-6 w-40 sm:w-52 bg-gray-300 rounded mb-3 sm:mb-4 shimmer" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="h-44 sm:h-48 md:h-52 bg-gray-300 rounded-xl sm:rounded-2xl shimmer"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shimmer;
