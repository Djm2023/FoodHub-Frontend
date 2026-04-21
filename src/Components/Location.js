import React, { useEffect, useState } from "react";

const Location = () => {
  const [location, setLocation] = useState("Fetching location...");
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;

          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`,
          );

          const data = await res.json();

          const city =
            data.address?.city ||
            data.address?.town ||
            data.address?.village ||
            data.address?.state ||
            "Unknown";

          console.log(
            data.address?.city,
            data.address?.town,
            data.address?.village,
            data.address?.state,
            "KKKKKKKKKKKKKKKKK",
          );

          setLocation(city);
        } catch (err) {
          setError("Failed to fetch location");
        }
      },
      (err) => {
        if (err.code === 1) setError("Permission denied");
        else if (err.code === 2) setError("Position unavailable");
        else if (err.code === 3) setError("Timeout");
        else setError("Unknown error");
      },
    );
  }, []);

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>📍 Location Component</h3>

      {error ? <p style={{ color: "red" }}>{error}</p> : <p>{location}</p>}
    </div>
  );
};

export default Location;
