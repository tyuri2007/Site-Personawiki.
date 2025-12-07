import styles from "./Footer.module.css";


export default function Footer() {
return (
<footer className={styles.footer}>
<p>© {new Date().getFullYear()} Persona Info - Projeto Acadêmico</p>
</footer>
);
}