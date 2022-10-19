import styles from "../styles/Navigation.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

export const Navigation = () => {
  const router = useRouter();

  return (
    <nav className={styles.Navbar}>
      <ul>
        <Link prefetch={false} href="/">
          <li
            className={router.pathname === "/" ? styles.Active : styles.Inctive}
          >
            <span className="material-symbols-outlined">home</span>
          </li>
        </Link>
        <Link prefetch={false} href="/about-me">
          <li
            className={
              router.pathname === "/about-me" ? styles.Active : styles.Inctive
            }
          >
            <span className="material-symbols-outlined">person</span>
          </li>
        </Link>
        <Link prefetch={false} href="/projects">
          <li
            className={
              router.pathname === "/projects" ? styles.Active : styles.Inctive
            }
          >
            <span className="material-symbols-outlined">work</span>
          </li>
        </Link>
        <Link prefetch={false} href="/contact">
          <li
            className={
              router.pathname === "/contact" ? styles.Active : styles.Inctive
            }
          >
            <span className="material-symbols-outlined">mail</span>
          </li>
        </Link>
      </ul>
    </nav>
  );
};
