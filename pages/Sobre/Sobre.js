import styles from './Sobre.module.css';

const teamMembers = [
  {
    id: 1,
    name: "Katsura Hashino",
    role: "Produtor/Diretor",
    contribution: "Diretor principal de Persona 3, 4 e 5",
    color: "#ff003c"
  },
  {
    id: 2,
    name: "Shigenori Soejima",
    role: "Designer de Personagens",
    contribution: "Design visual e arte da série moderna",
    color: "#00a2ff"
  },
  {
    id: 3,
    name: "Shoji Meguro",
    role: "Compositor",
    contribution: "Trilha sonora icônica da série",
    color: "#ffcc00"
  },
  {
    id: 4,
    name: "Atlus",
    role: "Desenvolvedora",
    contribution: "Estúdio criador da franquia",
    color: "#9933cc"
  }
];

const gameFeatures = [
  {
    icon: "🎮",
    title: "Sistema de Combate",
    description: "Combate por turnos com exploitação de fraquezas e All-Out Attacks",
    color: "#ff003c"
  },
  {
    icon: "👥",
    title: "Social Links",
    description: "Sistema de relacionamentos que fortalece as Personas",
    color: "#00a2ff"
  },
  {
    icon: "🏆",
    title: "Prêmios",
    description: "Vencedor de múltiplos prêmios de Jogo do Ano",
    color: "#ffcc00"
  },
  {
    icon: "🌍",
    title: "Impacto Cultural",
    description: "Influência significativa na cultura pop e RPGs modernos",
    color: "#9933cc"
  }
];

export default function Sobre() {
  return (
    <div className={styles.container}>
      <div className={styles.heroSection}>
        <h1 className={styles.heroTitle}>SOBRE PERSONA</h1>
        <p className={styles.heroSubtitle}>Uma Jornada pela Psique Humana</p>
      </div>

      <div className={styles.content}>
        <section className={styles.introSection}>
          <h2 className={styles.sectionTitle}>A Filosofia por Trás da Série</h2>
          <div className={styles.introGrid}>
            <div className={styles.introCard}>
              <h3>🎭 Persona vs Shadow</h3>
              <p>A série explora a psicologia junguiana, onde Personas representam a máscara social e Shadows o inconsciente reprimido. Cada jogo é uma jornada de autoconhecimento.</p>
            </div>
            <div className={styles.introCard}>
              <h3>🏫 Vida Cotidiana</h3>
              <p>Persona revolucionou os RPGs misturando vida escolar simulada com combate sobrenatural. Os jogadores equilibram estudos, amizades e batalhas contra Shadows.</p>
            </div>
            <div className={styles.introCard}>
              <h3>🎵 Trilha Sonora Icônica</h3>
              <p>Composta por Shoji Meguro, a música combina J-Pop, jazz e rock psicodélico, criando uma identidade sonora única que define a atmosfera de cada jogo.</p>
            </div>
          </div>
        </section>

        <section className={styles.timelineSection}>
          <h2 className={styles.sectionTitle}>Linha do Tempo da Série</h2>
          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <div className={styles.timelineYear}>1996</div>
              <div className={styles.timelineContent}>
                <h3>Persona 1</h3>
                <p>Lançamento inicial como spin-off de Shin Megami Tensei, estabelecendo conceitos básicos.</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineYear}>2006</div>
              <div className={styles.timelineContent}>
                <h3>Persona 3</h3>
                <p>Reinvenção da série com Social Links, combate aprimorado e temas de mortalidade.</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineYear}>2008</div>
              <div className={styles.timelineContent}>
                <h3>Persona 4</h3>
                <p>Foco em mistério e relações sociais, popularizando a série no ocidente.</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineYear}>2016</div>
              <div className={styles.timelineContent}>
                <h3>Persona 5</h3>
                <p>Sucesso crítico e comercial com estilo visual único e temas de rebelião social.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.featuresSection}>
          <h2 className={styles.sectionTitle}>Características Únicas</h2>
          <div className={styles.featuresGrid}>
            {gameFeatures.map((feature, index) => (
              <div 
                key={index} 
                className={styles.featureCard}
                style={{ borderColor: feature.color }}
              >
                <div 
                  className={styles.featureIcon}
                  style={{ 
                    backgroundColor: feature.color,
                    boxShadow: `0 0 20px ${feature.color}`
                  }}
                >
                  <span style={{ fontSize: '2.5rem' }}>{feature.icon}</span>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.teamSection}>
          <h2 className={styles.sectionTitle}>Equipe Criativa</h2>
          <div className={styles.teamGrid}>
            {teamMembers.map(member => (
              <div 
                key={member.id} 
                className={styles.teamCard}
                style={{ borderTopColor: member.color }}
              >
                <div 
                  className={styles.memberColor}
                  style={{ backgroundColor: member.color }}
                ></div>
                <h3 className={styles.memberName}>{member.name}</h3>
                <p className={styles.memberRole} style={{ color: member.color }}>
                  {member.role}
                </p>
                <p className={styles.memberContribution}>{member.contribution}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.legacySection}>
          <h2 className={styles.sectionTitle}>Legado e Impacto</h2>
          <div className={styles.legacyContent}>
            <p className={styles.legacyText}>
              Persona transcendeu o status de simples série de jogos para se tornar um fenômeno cultural. 
              Com sua abordagem única que mistura RPG tradicional com simulador de vida e psicologia profunda, 
              influenciou uma geração de desenvolvedores e redefiniu o que um JRPG pode ser.
            </p>
            <div className={styles.stats}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>15M+</span>
                <span className={styles.statLabel}>Cópias Vendidas</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>25+</span>
                <span className={styles.statLabel}>Prêmios Internacionais</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>27</span>
                <span className={styles.statLabel}>Anos de História</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}