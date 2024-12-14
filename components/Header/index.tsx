import Image from "next/image";
import React from "react";
import styles from "./styles.module.css"

export const Header = () => {
  return (
    // <header style={styles.header}>
    //   <Image src="/images//music-icon.svg" alt="Music Icon" width={50} height={50} unoptimized />
    //   <h1>Repertório</h1>
    //   <button>Adicionar música</button>
    // </header>

    <header className={styles.header}>
    <div className={styles.menuIcon}>☰</div>
    <h1>Repertório</h1>
    <div className={styles.musicIcon}>♪</div>
  </header>
  );
};

// const styles = {
//   header: {
//     backgroundColor: "grey",
//     color: "white",
//     padding: "1rem",
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//   },
// };
