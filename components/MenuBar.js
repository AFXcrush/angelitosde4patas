import Link from "next/link";

import A4PLogoShort from "../assets/svg/Angelitos-de-4-patas-logo-short-2.svg";
import BottomBannerBig from "../assets/svg/bottom-banner-big.svg";
import BottomBannerShort from "../assets/svg/bottom-banner-short.svg";

import styles from "../styles/Home.module.css";

export default function MenuBar() {
  return (
    <div className={styles.menuBar}>
      <nav>
        <ul>
          <li className={styles.menuBarLogo}>
            <Link href="/">
              <a>
                <A4PLogoShort />
              </a>
            </Link>
          </li>

          <li>
            <Link href="/proyecto">
              <a>proyecto</a>
            </Link>
          </li>

          <li>
            <Link href="/angelitos">
              <a>los angelitos</a>
            </Link>
          </li>

          <li>
            <Link href="/visitaVirtual">
              <a>visita virtual</a>
            </Link>
          </li>

          <li>
            <button>donar</button>
          </li>
        </ul>
      </nav>

      <BottomBannerBig className={styles.bottomNavBig} />
      <BottomBannerShort className={styles.bottomNavShort} />
    </div>
  );
}
