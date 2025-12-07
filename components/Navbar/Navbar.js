import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          PERSONA<span>WIKI</span>
        </div>
        
        <div className={styles.navMenu}>
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
            end
          >
            <span className={styles.icon}>🏠</span>
            <span className={styles.text}>Home</span>
            <span className={styles.highlight}></span>
          </NavLink>

          <NavLink 
            to="/personas" 
            className={({ isActive }) => 
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            <span className={styles.icon}>🎭</span>
            <span className={styles.text}>Personas</span>
            <span className={styles.highlight}></span>
          </NavLink>

          <NavLink 
            to="/jogos" 
            className={({ isActive }) => 
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            <span className={styles.icon}>🎮</span>
            <span className={styles.text}>Jogos</span>
            <span className={styles.highlight}></span>
          </NavLink>
         

          <NavLink 
            to="/sobre" 
            className={({ isActive }) => 
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            <span className={styles.icon}>📖</span>
            <span className={styles.text}>Sobre</span>
            <span className={styles.highlight}></span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}