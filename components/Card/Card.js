import styles from "./Card.module.css";

export default function Card({ title, image, description, themeColor = "#ff003c", badge }) {
  const cardStyle = {
    borderColor: themeColor,
    boxShadow: `6px 6px 0 ${themeColor}`,
    '--card-color': themeColor
  };

  const titleStyle = {
    color: themeColor
  };

  return (
    <div className={styles.card} style={cardStyle}>
      {badge && <span className={styles.gameBadge}>{badge}</span>}
      <img src={image} alt={title} />
      <h3 className={styles.title} style={titleStyle}>{title}</h3>
      <p className={styles.text}>{description}</p>
    </div>
  );
}