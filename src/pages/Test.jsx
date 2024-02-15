import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } from "@react-google-maps/api";
import Tests from "../mock-data/testData";

const mapContainerStyle = {
  width: "100%",
  height: "300px",
};

const center = {
  lat: 37.7749,
  lng: -122.4194,
};

const options = {
  disableDefaultUI: true,
  zoomControl: true,
};

const Test = (props) => {
  const { id } = useParams();
  const test = Tests.find((test) => test.test_id === parseInt(id));
  const { test_name, location, description, price } = test;
  const [pickupLocation, setPickupLocation] = useState("");
  const [response, setResponse] = useState(null);

  const directionsCallback = (result, status) => {
    if (status === "OK") {
      setResponse(result);
    } else {
      console.error(`Directions request failed due to ${status}`);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-b from-[#aad0f5] via-[#c4def9] to-white">
      <div className="flex h-4/6 rounded-3xl p-7 gap-10 justify-center bg-[#c0e4f6dc]">
        <div className="w-2/5">
          <img src={"/test.png"} alt="Hospital" className="w-full h-auto" />
        </div>
        <div className="w-3/5 px-4">
          <h1 className="text-3xl font-bold">{test_name}</h1>
          <p className="text-l text-gray-600 mb-4 text-right">{location}</p>
          <p className="text-lg mb-4">{description}</p>
          <div className="text-xl font-semibold">Cost: ₹ {price}</div>
          <div className="mt-4">
            <label htmlFor="pickupLocation" className="block text-lg font-semibold">
              Enter Pickup Location:
            </label>
            <input
              id="pickupLocation"
              type="text"
              className="border rounded p-2 w-full"
              value={pickupLocation}
              onChange={(e) => setPickupLocation(e.target.value)}
            />
          </div>
          {pickupLocation && (
            <div className="mt-4">
              <LoadScript googleMapsApiKey="AIzaSyC8XBR8RQG5FAzoiTDicg8enboefziSOnU">
                <GoogleMap
                  mapContainerStyle={mapContainerStyle}
                  center={center}
                  zoom={12}
                  options={options}
                >
                  <DirectionsService
                    options={{
                      destination: location,
                      origin: pickupLocation,
                      travelMode: "DRIVING",
                    }}
                    callback={directionsCallback}
                  />
                  {response && <DirectionsRenderer directions={response} />}
                </GoogleMap>
              </LoadScript>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Test;
