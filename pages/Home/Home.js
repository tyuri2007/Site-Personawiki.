import Card from '../../components/Card/Card';
import bannerImage from '../../assets/banner.jpg';
// Importe as imagens específicas de cada Persona se tiver
import persona5Image from '../../assets/persona5.jpg'; // ou use jokerImage para P5
import persona3Image from '../../assets/persona3.png';
import persona4Image from '../../assets/persona4.jpg';
import styles from "./Home.module.css";

// Cores oficiais dos Personas:
const PERSONA_COLORS = {
  persona5: "#ff003c",    // Vermelho do Persona 5
  persona3: "#0099cc",    // Azul do Persona 3
  persona4: "#ffcc00"     // Amarelo do Persona 4
};

export default function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <img src={bannerImage} alt="Persona Banner" className={styles.banner} />
        <h1 className={styles.title}>Bem-vindo ao Mundo de Persona</h1>
        <p className={styles.subtitle}>Explore Personas, Jogos e História da Série</p>
      </section>

      <section className={styles.cards}>
        <Card 
          title="Persona 5 Royal"
          image={persona5Image}  // ou jokerImage
          description="Junte-se aos Phantom Thieves em Tóquio enquanto eles roubam corações corruptos em um RPG com estilo inconfundível."
          themeColor={PERSONA_COLORS.persona5}
        />

        <Card 
          title="Persona 3 Reload"
          image={persona3Image}
          description="Enfrente a Dark Hour e explore Tartarus com SEES em uma jornada sobre vida, morte e significado da existência."
          themeColor={PERSONA_COLORS.persona3}
        />

        <Card 
          title="Persona 4 Golden"
          image={persona4Image}
          description="Desvende mistérios em Inaba e entre na TV World para enfrentar Shadows neste RPG investigativo cheio de coração."
          themeColor={PERSONA_COLORS.persona4}
        />
      </section>
    </div>
  );
}