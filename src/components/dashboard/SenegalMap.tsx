"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for default marker icons in Next.js
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const SenegalMap = () => {
  const position: [number, number] = [14.7167, -17.4677]; // Dakar coordinates

  return (
    <div style={{ position: "relative", height: "100%", width: "100%" }}>
      <MapContainer
        center={position}
        zoom={6}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%", borderRadius: "0.5rem" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {/* Example marker */}
        <Marker position={position}>
          <Popup>Dakar</Popup>
        </Marker>
      </MapContainer>

      {/* Légende Incidence - en bas à gauche */}
      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "2rem",
          backgroundColor: "white",
          padding: "1rem 1.5rem",
          borderRadius: "0.75rem",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          zIndex: 1000,
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        <h3 style={{ margin: "0 0 0.75rem 0", fontSize: "1rem", fontWeight: "600" }}>
          Incidence (pour 100k hab.)
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <div
              style={{
                width: "2rem",
                height: "1.25rem",
                backgroundColor: "#22c55e",
                borderRadius: "0.25rem",
              }}
            />
            <span style={{ fontSize: "0.9rem" }}>0-10</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <div
              style={{
                width: "2rem",
                height: "1.25rem",
                backgroundColor: "#f97316",
                borderRadius: "0.25rem",
              }}
            />
            <span style={{ fontSize: "0.9rem" }}>10-50</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <div
              style={{
                width: "2rem",
                height: "1.25rem",
                backgroundColor: "#ef4444",
                borderRadius: "0.25rem",
              }}
            />
            <span style={{ fontSize: "0.9rem" }}>&gt;50</span>
          </div>
        </div>
      </div>

      {/* Légende Centres de santé - en haut à droite */}
      <div
        style={{
          position: "absolute",
          top: "2rem",
          right: "2rem",
          backgroundColor: "white",
          padding: "1rem 1.5rem",
          borderRadius: "0.75rem",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          zIndex: 1000,
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <div
              style={{
                width: "1.25rem",
                height: "1.25rem",
                backgroundColor: "#3b82f6",
                borderRadius: "0.25rem",
              }}
            />
            <span style={{ fontSize: "0.9rem" }}>Centres de santé</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <div
              style={{
                width: "1.25rem",
                height: "1.25rem",
                border: "2px solid #333",
                borderRadius: "0.25rem",
                backgroundColor: "white",
              }}
            />
            <span style={{ fontSize: "0.9rem" }}>Routes principales</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SenegalMap;
