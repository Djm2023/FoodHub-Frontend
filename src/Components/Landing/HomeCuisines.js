const cuisines = [
  {
    name: "Burger",
    img: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=100&q=80",
  },
  {
    name: "Pizza",
    img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=100&q=80",
  },
  {
    name: "Fries",
    img: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?w=100&q=80",
  },
  {
    name: "Chicken",
    img: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=100&q=80",
  },
  {
    name: "Sushi",
    img: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=100&q=80",
  },
  {
    name: "Healthy",
    img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=100&q=80",
  },
];

export const Cuisines = () => {
  return (
    <section className="py-10 bg-white">
      <h3 className="text-center text-sm tracking-widest text-gray-400 mb-6">
        POPULAR CUISINES NEAR YOU
      </h3>

      <div className="flex justify-center gap-8 flex-wrap">
        {cuisines.map((item) => (
          <div key={item.name} className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-full overflow-hidden shadow">
              <img src={item.img} className="w-full h-full object-cover" />
            </div>
            <p className="text-sm text-gray-600">{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
