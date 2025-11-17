import React, { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";
const Coverage = () => {
  const position = [23.685, 90.3563];
  const serviceCenter = useLoaderData();
  const mapRef = useRef(null)

  const handleSearch =(e)=>{
    e.preventDefault()
    const location = e.target.location.value
    const district = serviceCenter.find(c=>c.district.toLowerCase().includes(location.toLowerCase()))
    if (district) {
        const coord=[district.latitude,district.longitude]
        mapRef.current.flyTo(coord,14)
    }
  }
  return (
    <div className="mt-20 bg-white rounded-lg p-10 ">
      <h2 className="text-4xl font-bold text-left">
        We are available in 64 districts
      </h2>
      <div className="text-left mt-5">
        <div className="join">
          <div>
            <form onSubmit={handleSearch}>
                <label className="input">
                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                    >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                    </g>
                </svg>
                <input type="search" className="grow" placeholder="Search" name="location" />
                
                </label>
            </form>
            </div>
        </div>
      </div>
      <hr className="text-gray-300 border-dotted font-bold mt-5" />
      <h2 className="text-4xl font-bold text-left mt-5">
        We deliver almost all over Bangladesh
      </h2>

      {/* map container */}

      <div className="h-[700px] w-full mt-10">
        <MapContainer
          center={position}
          zoom={8}
          scrollWheelZoom={false}
          className="h-[700px]"
          ref={mapRef}
        >
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
            attribution="&copy; CartoDB"
          />

          {
            serviceCenter.map((center,index)=><Marker key={index}
             position={[center.latitude,center.longitude]}>
            <Popup>
             <strong>{center.district}</strong> <br /> 
             service area:{center.covered_area.join(', ')}
            </Popup>
          </Marker>)
          }
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;
