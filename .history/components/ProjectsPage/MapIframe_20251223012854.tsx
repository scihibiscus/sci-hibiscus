import styles from "../../styles/ProjectsPage/location.module.scss"
export default function MapIframe({
  lat,
  lng,
  zoom,
  title,
}: {
  lat: number;
  lng: number;
  zoom: number;
  title: string;
}) {
  const src = `https://www.google.com/maps?q=${lat},${lng}&z=${zoom}&output=embed`;
  return (
    <div className={styles.map__container} aria-hidden={false}>
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
