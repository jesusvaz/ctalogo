import React from "react";
import { ImWhatsapp } from "react-icons/im";

function App() {
  const openCatalog = () => {
    window.open("/nubia.pdf", "_blank");
  };

  return (
    <div style={styles.container}>
      <h1>Catálogo de Productos Herbalife</h1>

      <button style={styles.button} onClick={openCatalog}>
        Ver
      </button>

      <h2>Contáctame</h2>

      <h3 style={styles.whatsapp}>
        <ImWhatsapp />
        6443859674
      </h3>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "#2e7d32", // optional: darker background so white is visible
    color: "white", // 👈 this changes all text to white
    padding: "20px",
  },
  button: {
    padding: "15px 30px",
    fontSize: "18px",
    cursor: "pointer",
    backgroundColor: "white",
    color: "#2e7d32",
    border: "none",
    borderRadius: "8px",
    margin: "20px 0",
  },
  whatsapp: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
};

export default App;