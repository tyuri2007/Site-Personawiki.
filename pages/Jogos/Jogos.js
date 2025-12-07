import { useState } from 'react';
import styles from './Jogos.module.css';

// Importando imagens principais
import persona5Image from '../../assets/persona5.jpg';
import persona4Image from '../../assets/persona4.jpg';
import persona3Image from '../../assets/persona3.png';
import persona5stImage from '../../assets/persona5strikers.jpg'
import persona4auImage from '../../assets/persona4au.jpg'
import personaq2Image from '../../assets/personaq2.jpg'

// Importando imagens dos spin-offs (use fallback se não existirem)
// Para imagens que não existem, vamos usar as principais como fallback
// Ou você pode criar esses arquivos na pasta assets com esses nomes

const gamesData = [
  {
    id: 1,
    title: "Persona 5 Royal",
    year: "2019",
    platform: ["PS4", "PS5", "Switch", "Xbox", "PC"],
    rating: "95/100",
    image: persona5Image,
    description: "A versão definitiva de Persona 5, com novo conteúdo, personagens e um semestre adicional na história.",
    color: "#ff003c",
    developer: "Atlus",
    genre: "JRPG, Simulador de Vida",
    hours: "120+",
    features: ["Novo semestre", "Personas novas", "Palácio de Maruki", "Mecânicas aprimoradas", "Conteúdo adicional"],
    details: {
      story: "Os Phantom Thieves retornam para enfrentar um novo inimigo enquanto equilibram vida escolar e aventuras noturnas.",
      protagonist: "Ren Amamiya (Joker)",
      releaseDate: "31 de Outubro, 2019"
    }
  },
  {
    id: 2,
    title: "Persona 4 Golden",
    year: "2012",
    platform: ["Vita", "PC", "Switch", "Xbox", "PS4"],
    rating: "93/100",
    image: persona4Image,
    description: "Remasterização aprimorada com novos Social Links, dungeons e uma cena de inverno adicional.",
    color: "#ffcc00",
    developer: "Atlus",
    genre: "JRPG, Mistério",
    hours: "80+",
    features: ["Cena de inverno", "Social Links novos", "Dungeon Marie", "Personas adicionais", "Eventos especiais"],
    details: {
      story: "Um grupo de estudantes investiga misteriosos assassinatos em uma pequena cidade enquanto entra em um mundo dentro da TV.",
      protagonist: "Yu Narukami",
      releaseDate: "15 de Novembro, 2012"
    }
  },
  {
    id: 3,
    title: "Persona 3 Reload",
    year: "2024",
    platform: ["PS4", "PS5", "Xbox", "PC"],
    rating: "89/100",
    image: persona3Image,
    description: "Remake completo com gráficos modernos, dublagem regravada e qualidade de vida aprimorada.",
    color: "#0099cc",
    developer: "Atlus",
    genre: "JRPG, Drama",
    hours: "100+",
    features: ["Gráficos HD", "Dublagem nova", "Qualidade de vida", "Músicas remasterizadas", "Interface atualizada"],
    details: {
      story: "Estudantes que vivem a Dark Hour e exploram Tartarus enquanto enfrentam suas próprias mortalidades.",
      protagonist: "Makoto Yuki",
      releaseDate: "2 de Fevereiro, 2024"
    }
  },
  {
    id: 4,
    title: "Persona 5 Strikers",
    year: "2020",
    platform: ["PS4", "Switch", "PC"],
    rating: "87/100",
    image: require('../../assets/persona5strikers.jpg').default || persona5stImage, 
    description: "Sequência de Persona 5 com combate musou e uma nova jornada pelos feriados de verão.",
    color: "#ff3366",
    developer: "Omega Force, Atlus",
    genre: "Musou, JRPG",
    hours: "40+",
    features: ["Combate em tempo real", "Jornada pelo Japão", "Novos Personas", "Sistema de receitas", "Modo fotografia"],
    details: {
      story: "Os Phantom Thieves embarcam em uma viagem de verão pelo Japão para resolver novos casos misteriosos.",
      protagonist: "Ren Amamiya (Joker)",
      releaseDate: "20 de Fevereiro, 2020"
    }
  },
  {
    id: 5,
    title: "Persona 4 Arena Ultimax",
    year: "2013",
    platform: ["Arcade", "PS3", "Xbox 360"],
    rating: "85/100",
    image: require('../../assets/persona4au.jpg').default || persona4auImage, 
    description: "Jogo de luta que continua a história de Persona 3 e 4 com um torneio sobrenatural.",
    color: "#ff9900",
    developer: "Arc System Works, Atlus",
    genre: "Luta, JRPG",
    hours: "25+",
    features: ["Modo história", "Personas auxiliares", "Personagens de P3/P4", "Sistema Shadow", "Batalhas online"],
    details: {
      story: "Personagens de Persona 3 e 4 se reúnem para participar de um torneio de luta com consequências sobrenaturais.",
      protagonist: "Yu Narukami & Makoto Yuki",
      releaseDate: "28 de Novembro, 2013"
    }
  },
  {
    id: 6,
    title: "Persona Q2: New Cinema Labyrinth",
    year: "2018",
    platform: ["3DS"],
    rating: "82/100",
    image: require('../../assets/personaq2.jpg').default || personaq2Image, 
    description: "Crossover com Persona 3, 4 e 5 em um mundo cinematográfico com gameplay de dungeon crawler.",
    color: "#9933cc",
    developer: "Atlus",
    genre: "Dungeon Crawler, JRPG",
    hours: "50+",
    features: ["Crossover P3/P4/P5", "Dungeons aleatórias", "Sistema de festa", "Cinemas temáticos", "Personagens jogáveis"],
    details: {
      story: "Personagens das três séries principais são transportados para um mundo de cinema onde devem desvendar um mistério.",
      protagonist: "Equipe de P3, P4 e P5",
      releaseDate: "29 de Novembro, 2018"
    }
  }
];

export default function Jogos() {
  const [filter, setFilter] = useState('all');
  const [selectedGame, setSelectedGame] = useState(null);

  // Função para lidar com erros de imagem
  const handleImageError = (e, fallbackImage) => {
    e.target.onerror = null; // Previne loop infinito
    e.target.src = fallbackImage;
  };

  // Definindo quais jogos são mainline e quais são spin-offs
  const isMainlineGame = (gameId) => [1, 2, 3].includes(gameId);
  const isSpinoffGame = (gameId) => [4, 5, 6].includes(gameId);

  const filteredGames = filter === 'all' 
    ? gamesData 
    : filter === 'mainline' 
      ? gamesData.filter(game => isMainlineGame(game.id))
      : gamesData.filter(game => isSpinoffGame(game.id));

  const handleGameClick = (game) => {
    setSelectedGame(game);
  };

  const closeDetails = () => {
    setSelectedGame(null);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>JOGOS PERSONA</h1>
        <p className={styles.subtitle}>Explore toda a franquia</p>
      </div>

      <div className={styles.filterSection}>
        <button 
          className={`${styles.filterButton} ${filter === 'all' ? styles.activeFilter : ''}`}
          onClick={() => setFilter('all')}
        >
          Todos os Jogos
        </button>
        <button 
          className={`${styles.filterButton} ${filter === 'mainline' ? styles.activeFilter : ''}`}
          onClick={() => setFilter('mainline')}
        >
          Série Principal
        </button>
        <button 
          className={`${styles.filterButton} ${filter === 'spinoff' ? styles.activeFilter : ''}`}
          onClick={() => setFilter('spinoff')}
        >
          Spin-offs
        </button>
      </div>

      <div className={styles.gamesGrid}>
        {filteredGames.map(game => (
          <div 
            key={game.id} 
            className={styles.gameCard}
            style={{ 
              borderColor: game.color,
              boxShadow: `0 10px 30px ${game.color}40`
            }}
          >
            <div className={styles.gameHeader}>
              <div className={styles.gameImageContainer}>
                <img 
                  src={typeof game.image === 'string' ? game.image : game.image}
                  alt={game.title} 
                  className={styles.gameImage}
                  onError={(e) => {
                    // Fallback para imagem padrão se a específica não existir
                    if (game.id === 4) {
                      e.target.src = persona5Image;
                    } else if (game.id === 5) {
                      e.target.src = persona4Image;
                    } else if (game.id === 6) {
                      e.target.src = persona5Image;
                    } else {
                      e.target.src = 'https://via.placeholder.com/150/1a1a3a/ffffff?text=Persona';
                    }
                  }}
                />
                <div 
                  className={styles.gameRating}
                  style={{ backgroundColor: game.color }}
                >
                  {game.rating}
                </div>
              </div>
              
              <div className={styles.gameInfo}>
                <h3 className={styles.gameTitle} style={{ color: game.color }}>
                  {game.title}
                </h3>
                <div className={styles.gameMeta}>
                  <span className={styles.gameYear}>{game.year}</span>
                  <span className={styles.gameDeveloper}>{game.developer}</span>
                  <span className={styles.gameHours}>⏱️ {game.hours}</span>
                </div>
                <span className={styles.gameType}>
                  {isMainlineGame(game.id) ? '🏆 Série Principal' : '🎭 Spin-off'}
                </span>
              </div>
            </div>

            <p className={styles.gameDescription}>{game.description}</p>
            
            <div className={styles.gamePlatforms}>
              <h4>Plataformas:</h4>
              <div className={styles.platformList}>
                {game.platform.map((platform, index) => (
                  <span key={index} className={styles.platformTag}>{platform}</span>
                ))}
              </div>
            </div>

            <div className={styles.gameFeatures}>
              <h4>Características:</h4>
              <ul>
                {game.features.slice(0, 3).map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className={styles.gameFooter}>
              <span className={styles.gameGenre}>{game.genre}</span>
              <button 
                className={styles.detailsButton}
                style={{ backgroundColor: game.color }}
                onClick={() => handleGameClick(game)}
              >
                Ver Detalhes
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal de Detalhes */}
      {selectedGame && (
        <div className={styles.modalOverlay} onClick={closeDetails}>
          <div 
            className={styles.modalContent} 
            onClick={(e) => e.stopPropagation()}
            style={{ borderColor: selectedGame.color }}
          >
            <button className={styles.closeButton} onClick={closeDetails}>
              ✕
            </button>
            
            <div className={styles.modalHeader}>
              <h2 className={styles.modalTitle} style={{ color: selectedGame.color }}>
                {selectedGame.title}
              </h2>
              <span className={styles.modalYear}>{selectedGame.year}</span>
            </div>

            <div className={styles.modalBody}>
              <div className={styles.modalImageContainer}>
                <img 
                  src={typeof selectedGame.image === 'string' ? selectedGame.image : selectedGame.image}
                  alt={selectedGame.title} 
                  className={styles.modalImage}
                  onError={(e) => {
                    // Fallback no modal também
                    if (selectedGame.id === 4) {
                      e.target.src = persona5Image;
                    } else if (selectedGame.id === 5) {
                      e.target.src = persona4Image;
                    } else if (selectedGame.id === 6) {
                      e.target.src = persona5Image;
                    } else {
                      e.target.src = 'https://via.placeholder.com/400/1a1a3a/ffffff?text=Persona';
                    }
                  }}
                />
                <div className={styles.modalStats}>
                  <div className={styles.statItem}>
                    <span className={styles.statLabel}>Avaliação:</span>
                    <span className={styles.statValue} style={{ color: selectedGame.color }}>
                      {selectedGame.rating}
                    </span>
                  </div>
                  <div className={styles.statItem}>
                    <span className={styles.statLabel}>Duração:</span>
                    <span className={styles.statValue}>{selectedGame.hours}</span>
                  </div>
                  <div className={styles.statItem}>
                    <span className={styles.statLabel}>Gênero:</span>
                    <span className={styles.statValue}>{selectedGame.genre}</span>
                  </div>
                  <div className={styles.statItem}>
                    <span className={styles.statLabel}>Tipo:</span>
                    <span className={styles.statValue}>
                      {isMainlineGame(selectedGame.id) ? 'Série Principal' : 'Spin-off'}
                    </span>
                  </div>
                </div>
              </div>

              <div className={styles.modalDetails}>
                <h3>📖 História</h3>
                <p>{selectedGame.details.story}</p>
                
                <h3>🎭 Protagonista</h3>
                <p>{selectedGame.details.protagonist}</p>
                
                <h3>📅 Lançamento</h3>
                <p>{selectedGame.details.releaseDate}</p>
                
                <h3>🎮 Plataformas</h3>
                <div className={styles.modalPlatforms}>
                  {selectedGame.platform.map((platform, index) => (
                    <span key={index} className={styles.modalPlatformTag}>
                      {platform}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.modalFooter}>
              <button 
                className={styles.modalCloseBtn}
                style={{ backgroundColor: selectedGame.color }}
                onClick={closeDetails}
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
