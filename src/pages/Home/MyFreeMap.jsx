import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../../components/leaflet-icon";
import { BiTargetLock } from "react-icons/bi"; // sets default marker
import "../../App.css";
import { ZoomControl } from "react-leaflet";
import electric from "../../assets/electric.svg";
import circut from "../../assets/circut.svg";

const position = [37.7749, -122.4194]; // default position

// Component to move map to user's location
function LocateButton({ onLocate }) {
  const map = useMap();

  const handleClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const lat = pos.coords.latitude;
          const lng = pos.coords.longitude;
          map.setView([lat, lng], 13);
          onLocate([lat, lng]);
        },
        () => alert("Could not get your location.")
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  return (
    <button
      onClick={handleClick}
      className="find-me-btn flex gap-4 items-center text-sm"
    >
      <BiTargetLock /> Find Me
    </button>
  );
}

const MyFreeMap = () => {
  const [userLocation, setUserLocation] = useState(null);

  return (
    <div
      className="p-8 z-10  mb-2 rounded-2xl overflow-hidden shadow-lg"
      style={{ position: "relative" }}
    >
      <MapContainer
        center={position}
        zoom={13}
        style={{ height: "550px", width: "100%" }}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          url="https://api.maptiler.com/maps/basic-v2/{z}/{x}/{y}.png?key=fTimDteal0Aj529ZeUux"
        />
        <ZoomControl position="bottomright" />
        {userLocation && (
          <Marker position={userLocation}>
            <Popup>You are here</Popup>
          </Marker>
        )}
        <LocateButton onLocate={setUserLocation} />
      </MapContainer>
      <div className="md:flex justify-between px-5 py-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-5xl font-bold ">Find Your Charger</h1>
          <p className="text-xl font-semibold text-gray-500">
            View the network of Tesla Superchargers and Destination Chargers
            available near you.
          </p>
        </div>
        <div className="flex md:gap-4 gap-12 md:mr-20 justify-between">
          <div>
            <div className="flex md:gap-4  gap-2 items-center">
              <h1 className="md:text-5xl text-3xl font-bold ">25,666</h1>
              <img className="h-15 w-10  md:w-13" src={electric}></img>
            </div>
            <p className="text-xl font-semibold text-gray-500">Super Charger</p>
          </div>
          <div>
            <div className="flex md:gap-4 gap-2 items-center">
              <h1 className="md:text-5xl text-3xl font-bold ">9,079</h1>
              <img className="h-15 w-10  md:w-13" src={circut}></img>
            </div>
            <p className="text-xl font-semibold text-gray-500">
              Destination Chargers
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-4 md:ml-6">
        <button className="bg-black text-white w-40 h-10 cursor-pointer">
          View Networks
        </button>
        <button className="w-40 h-10 cursor-pointer">Learn More</button>
      </div>
    </div>
  );
};

export default MyFreeMap;
