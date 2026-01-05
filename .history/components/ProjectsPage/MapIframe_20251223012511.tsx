// components/MapIframe.jsx
export default function MapIframe({
  lat = 3.848,
  lng = 11.507,
  zoom = 15,
  title = "Localisation",
}) {
  const src = `https://www.google.com/maps?q=${lat},${lng}&z=${zoom}&output=embed`;
  return (
    <div className="map-container" aria-hidden={false}>
      <iframe
        title={title}
        src={src}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
