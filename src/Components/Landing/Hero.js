import React from "react";
import { MapPin, LocateFixed, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router";

const Hero = () => {
  const navigate = useNavigate();

  const handleLoginRegister = () => {
    navigate("/auth/login");
  };
  return (
    <section className="bg-gradient-to-r from-gray-100 to-orange-50 py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT CONTENT */}
        <div>
          {/* Badge */}
          <span className="inline-block bg-orange-100 text-orange-500 text-sm px-4 py-1 rounded-full mb-4">
            ⚡ Lightning Fast Delivery
          </span>

          {/* Heading */}
          <h1 className="text-5xl font-bold text-gray-900 leading-tight">
            Satisfy your <br />
            cravings,{" "}
            <span className="text-orange-500 underline decoration-orange-300">
              instantly.
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-600 mt-4 max-w-md">
            Discover the best local restaurants, view mouth-watering menus, and get it
            delivered hot to your door.
          </p>

          {/* Search Box */}
          <div className="mt-8 bg-white p-4 rounded-xl shadow-md border">
            <p className="text-sm font-medium mb-3">Where are we delivering?</p>

            <div className="flex items-center gap-3">
              <div className="flex items-center flex-1 border rounded-lg px-3 py-2">
                <MapPin className="text-orange-500" size={18} />
                <input
                  type="text"
                  placeholder="Enter your delivery address"
                  className="ml-2 w-full outline-none text-sm"
                />
              </div>

              <button className="flex items-center gap-2 border px-4 py-2 rounded-lg text-sm hover:bg-gray-100">
                <LocateFixed size={16} />
                Locate Me
              </button>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex items-center gap-4">
            <button className="bg-orange-500 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-orange-600 transition">
              Get Started <ArrowRight size={18} />
            </button>

            <button
              onClick={handleLoginRegister}
              className="border px-6 py-3 rounded-lg hover:bg-gray-100"
            >
              Log In
            </button>
          </div>
        </div>

        {/* RIGHT CONTENT (Cards) */}
        <div className="relative hidden md:block">
          {/* Top Card */}
          <div className="absolute top-0 right-10 rotate-6 bg-white shadow-lg rounded-xl overflow-hidden w-64">
            <img
              //   src="https://images.unsplash.com/photo-1563379091339-03246963d96c"
              src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=500&q=80"
              alt="food"
              className="h-36 w-full object-cover"
            />
            <div className="p-3">
              <p className="text-orange-500 font-bold text-lg">27% OFF</p>
              <p className="text-sm text-gray-600">On first order</p>
            </div>
          </div>

          {/* Bottom Card */}
          <div className="absolute bottom-0 left-10 -rotate-6 bg-white shadow-lg rounded-xl overflow-hidden w-64">
            <img
              src="https://images.unsplash.com/photo-1550547660-d9450f859349?w=500&q=80"
              alt="food"
              className="h-36 w-full object-cover"
            />
            <div className="p-3 flex justify-between items-center">
              <div>
                <p className="font-semibold">Fried Chicken</p>
                <p className="text-sm text-gray-500">SpiceCraft</p>
              </div>
              <p className="text-orange-500 font-bold">$12.00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
