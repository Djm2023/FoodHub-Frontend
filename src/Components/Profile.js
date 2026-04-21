import React, { useState } from "react";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const dietaryOptions = ["Vegetarian", "Vegan", "Gluten-Free", "Nut-Free"];
  const [selectedDiet, setSelectedDiet] = useState(["Vegetarian"]);

  const toggleDiet = (item) => {
    setSelectedDiet((prev) =>
      prev.includes(item) ? prev.filter((d) => d !== item) : [...prev, item],
    );
  };

  return (
    <div className="bg-[#f6f6f6] min-h-screen px-4 md:px-8 py-6 animate-fadeIn">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6">
        {/* SIDEBAR */}
        <div className="lg:w-72 space-y-4">
          {/* PROFILE CARD */}
          <div className="bg-white rounded-2xl p-5 border shadow-sm text-center animate-slideUp">
            <img
              src="https://i.pravatar.cc/150?img=3"
              className="w-16 h-16 rounded-full mx-auto object-cover"
            />
            <h2 className="mt-3 font-semibold">Alex Johnson</h2>
            <p className="text-xs text-gray-500">alex.johnson@example.com</p>

            <div className="flex justify-center gap-6 mt-4 text-sm">
              <div>
                <p className="font-semibold">42</p>
                <p className="text-xs text-gray-400">Orders</p>
              </div>
              <div>
                <p className="font-semibold">8</p>
                <p className="text-xs text-gray-400">Reviews</p>
              </div>
            </div>
          </div>

          {/* MENU */}
          <div className="bg-white rounded-2xl border shadow-sm p-2 animate-slideUp">
            {["overview", "addresses", "payments", "notifications", "orders", "help"].map(
              (tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`w-full text-left px-4 py-2 rounded-lg text-sm capitalize ${
                    activeTab === tab
                      ? "bg-orange-100 text-orange-600"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {tab.replace("-", " ")}
                </button>
              ),
            )}

            <button className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-red-50 rounded-lg mt-2">
              Log Out
            </button>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="flex-1 space-y-6">
          {/* ACCOUNT OVERVIEW */}
          <div className="bg-white p-6 rounded-2xl border shadow-sm animate-slideUp">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="font-semibold text-lg">Account Overview</h2>
                <p className="text-xs text-gray-500">Manage your personal information</p>
              </div>

              <button className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm">
                Save Changes
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="form-label">First Name</label>
                <input className="form-input" defaultValue="Alex" />
              </div>

              <div>
                <label className="form-label">Last Name</label>
                <input className="form-input" defaultValue="Johnson" />
              </div>

              <div>
                <label className="form-label">Email Address</label>
                <input className="form-input" defaultValue="alex.johnson@example.com" />
              </div>

              <div>
                <label className="form-label">Phone Number</label>
                <input className="form-input" defaultValue="+1 (555) 123-4567" />
              </div>
            </div>

            {/* DIETARY */}
            <div className="mt-6">
              <h3 className="text-sm font-semibold mb-3">Dietary Preferences</h3>

              <div className="flex flex-wrap gap-2">
                {dietaryOptions.map((item) => (
                  <button
                    key={item}
                    onClick={() => toggleDiet(item)}
                    className={`px-3 py-1 rounded-full text-xs border ${
                      selectedDiet.includes(item)
                        ? "bg-orange-100 border-orange-500 text-orange-600"
                        : "border-gray-200 text-gray-500"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* SAVED ADDRESSES */}
          <div className="bg-white p-6 rounded-2xl border shadow-sm animate-slideUp">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-semibold text-lg">Saved Addresses</h2>
              <button className="border px-3 py-1 rounded-lg text-sm">+ Add New</button>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {/* ADDRESS CARD */}
              <div className="border border-orange-500 bg-orange-50 p-4 rounded-xl">
                <p className="text-sm font-medium text-orange-600">Home (Default)</p>
                <p className="text-xs text-gray-600 mt-1">123 Park Avenue, Apt 4B</p>
                <p className="text-xs text-gray-500">New York, NY 10001</p>
              </div>

              <div className="border p-4 rounded-xl">
                <p className="text-sm font-medium">Work</p>
                <p className="text-xs text-gray-600 mt-1">Tech Hub Building, Floor 12</p>
                <p className="text-xs text-gray-500">NY 10002</p>
              </div>
            </div>
          </div>

          {/* PAYMENT METHODS */}
          <div className="bg-white p-6 rounded-2xl border shadow-sm animate-slideUp">
            <h2 className="font-semibold text-lg mb-4">Payment Methods</h2>

            <div className="space-y-3">
              <div className="border p-4 rounded-xl flex justify-between">
                <span>Visa •••• 4242</span>
                <button className="text-sm text-gray-500">Edit</button>
              </div>

              <button className="border px-4 py-2 rounded-lg text-sm w-fit">
                + Add Payment Method
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE NAV (OPTIONAL) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t p-3 flex justify-around text-xs">
        {["overview", "orders", "help"].map((tab) => (
          <button key={tab} className="capitalize text-gray-600">
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Profile;
