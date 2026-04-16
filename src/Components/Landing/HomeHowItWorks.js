import { MapPin, Utensils, Bike } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      icon: <MapPin className="text-orange-500" />,
      title: "Set Location",
      desc: "Enter your address to see top-rated restaurants and cuisines in your area.",
    },
    {
      icon: <Utensils className="text-orange-500" />,
      title: "Choose Food",
      desc: "Browse menus, customize your order, and add your favorite dishes.",
    },
    {
      icon: <Bike className="text-orange-500" />,
      title: "Fast Delivery",
      desc: "Track your order in real-time as it arrives hot and fresh.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-center text-3xl font-bold text-gray-900">How FoodHub Works</h2>
      <p className="text-center text-gray-500 mt-2">
        Three simple steps to satisfy your hunger.
      </p>

      <div className="mt-10 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-sm border text-center relative"
          >
            {/* Step Number */}
            <div className="absolute -top-3 right-4 bg-orange-500 text-white w-7 h-7 flex items-center justify-center rounded-full text-sm">
              {index + 1}
            </div>

            {/* Icon */}
            <div className="w-12 h-12 mx-auto bg-orange-100 rounded-full flex items-center justify-center mb-4">
              {step.icon}
            </div>

            <h4 className="font-semibold text-lg">{step.title}</h4>
            <p className="text-sm text-gray-500 mt-2">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
