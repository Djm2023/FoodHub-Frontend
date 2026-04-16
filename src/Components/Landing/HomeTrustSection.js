export const TrustSection = () => {
  return (
    <section className="py-12 bg-white border-t">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* LEFT */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900">
            Trusted by thousands of food lovers.
          </h3>

          <div className="flex items-center gap-2 mt-3">
            <span className="text-orange-500 text-lg">★★★★★</span>
            <span className="font-semibold">4.8/5</span>
          </div>

          <p className="text-sm text-gray-500 mt-1">
            Based on 10,000+ reviews on App Store & Google Play.
          </p>
        </div>

        {/* RIGHT (Brands) */}
        <div className="flex gap-6 text-gray-400 font-semibold flex-wrap justify-center">
          <span>BurgerKing</span>
          <span>PizzaHut</span>
          <span>Subway</span>
          <span>KFC</span>
          <span>Starbucks</span>
        </div>
      </div>
    </section>
  );
};
