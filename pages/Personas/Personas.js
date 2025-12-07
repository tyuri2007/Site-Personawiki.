// Personas.js
import { useState } from 'react';
import styles from './Personas.module.css';

// Importando imagens - AJUSTE OS NOMES CONFORME SUAS IMAGENS
import arseneImage from '../../assets/arsene.webp';
import izanagiImage from '../../assets/izanagi.jpg';
import orpheusImage from '../../assets/orpheus.jpg';
import carmenImage from '../../assets/carmen.jpg';
import thanatosImage from '../../assets/thanatos.jpg';
import izanagiOkamiImage from '../../assets/izanagi-no-okami.jpg';

// Dados das Personas ATUALIZADOS
const personasData = [
  {
    id: 1,
    name: "Arsène",
    game: "Persona 5",
    arcana: "Fool",
    image: arseneImage,
    description: "Um gentleman thief que rouba tesouros das profundezas dos palácios. Baseado em Arsène Lupin.",
    color: "#ff003c"
  },
  {
    id: 2,
    name: "Izanagi",
    game: "Persona 4",
    arcana: "Fool",
    image: izanagiImage,
    description: "Uma divindade xintoísta capaz de criar e destruir mundos. Persona inicial de Yu Narukami.",
    color: "#ffcc00"
  },
  {
    id: 3,
    name: "Orpheus",
    game: "Persona 3",
    arcana: "Fool",
    image: orpheusImage,
    description: "O músico lendário que desceu ao submundo para recuperar sua amada Eurídice.",
    color: "#0099cc"
  },
  {
    id: 4,
    name: "Carmen",
    game: "Persona 5",
    arcana: "Lovers",
    image: carmenImage,
    description: "A sedutora da ópera de Bizet, representando paixão, liberdade e rebeldia feminina.",
    color: "#ff3366"
  },
  {
    id: 5,
    name: "Izanagi-no-Okami",
    game: "Persona 4",
    arcana: "World",
    image: izanagiOkamiImage,
    description: "A forma divina suprema de Izanagi, representando criação e poder absoluto.",
    color: "#ff9900"
  },
  {
    id: 6,
    name: "Thanatos",
    game: "Persona 3",
    arcana: "Death",
    image: thanatosImage,
    description: "A personificação da morte na mitologia grega. Persona de Makoto Yuki.",
    color: "#6600cc"
  }
];

export default function Personas() {
  const [filter, setFilter] = useState('all');

  const filteredPersonas = filter === 'all' 
    ? personasData 
    : personasData.filter(persona => persona.game.includes(filter));

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>PERSONAS</h1>
        <p className={styles.subtitle}>Manifestações da Psique Humana</p>
      </div>

      <div className={styles.filterSection}>
        <button 
          className={`${styles.filterButton} ${filter === 'all' ? styles.activeFilter : ''}`}
          onClick={() => setFilter('all')}
        >
          Todas
        </button>
        <button 
          className={`${styles.filterButton} ${filter === 'Persona 5' ? styles.activeFilter : ''}`}
          onClick={() => setFilter('Persona 5')}
        >
          Persona 5
        </button>
        <button 
          className={`${styles.filterButton} ${filter === 'Persona 4' ? styles.activeFilter : ''}`}
          onClick={() => setFilter('Persona 4')}
        >
          Persona 4
        </button>
        <button 
          className={`${styles.filterButton} ${filter === 'Persona 3' ? styles.activeFilter : ''}`}
          onClick={() => setFilter('Persona 3')}
        >
          Persona 3
        </button>
      </div>

      <div className={styles.personasGrid}>
        {filteredPersonas.map(persona => (
          <div 
            key={persona.id} 
            className={styles.personaCard}
            style={{ borderColor: persona.color }}
          >
            <div className={styles.personaHeader}>
              <span className={styles.gameBadge} style={{ backgroundColor: persona.color }}>
                {persona.game}
              </span>
              <span className={styles.arcana}>{persona.arcana}</span>
            </div>
            
            <div className={styles.imageContainer}>
              <img 
                src={persona.image} 
                alt={persona.name} 
                className={styles.personaImage}
                onError={(e) => {
                  e.target.onerror = null;
                  // Fallback caso a imagem não carregue
                  e.target.src = `https://via.placeholder.com/300/${persona.color.replace('#', '')}/ffffff?text=${persona.name}`;
                }}
              />
            </div>
            
            <h3 className={styles.personaName} style={{ color: persona.color }}>
              {persona.name}
            </h3>
            
            <p className={styles.personaDescription}>{persona.description}</p>
            
            <div className={styles.personaFooter}>
              <span className={styles.personaType}>Shadow Self</span>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.infoSection}>
        <h2 className={styles.sectionTitle}>O que são Personas?</h2>
        <div className={styles.infoGrid}>
          <div className={styles.infoCard}>
            <h3>🎭 Manifestação Psíquica</h3>
            <p>Personas são a manifestação física da personalidade de um indivíduo, criadas a partir de suas convicções e determinação.</p>
          </div>
          <div className={styles.infoCard}>
            <h3>🛡️ Arcanas Maiores</h3>
            <p>Cada Persona pertence a um Arcana Maior, representando diferentes aspectos da personalidade humana e jornada psicológica.</p>
          </div>
          <div className={styles.infoCard}>
            <h3>⚔️ Batalha Contra Shadows</h3>
            <p>Personas são invocadas para combater Shadows, manifestações dos aspectos reprimidos e negativos da psique humana.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
