import React from "react";

function App() {
  const openCatalog = () => {
    window.open("/nubia.pdf", "_blank");
  };

  return (
     <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Catálogo de Productos Herbalife</h1>

      <button style={styles.button} onClick={openCatalog}>
        Ver
      </button>
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
    backgroundColor: "#f5f5f5",
  },
  button: {
    padding: "15px 30px",
    fontSize: "18px",
    cursor: "pointer",
    backgroundColor: "#2e7d32",
    color: "white",
    border: "none",
    borderRadius: "8px",
  },
};

export default App;

// import React, { useState } from "react";

// function App() {////
//   const [showPDF, setShowPDF] = useState(false);

//   return (
//     <div style={{ textAlign: "center", padding: "20px" }}>
//       <h1>Catálogo de Productos</h1>

//       <button onClick={() => setShowPDF(true)}>
//         Catalogo
//       </button>

//       {showPDF && (
//         <iframe
//           src="/nubia.pdf"
//           width="100%"
//           height="600px"
//           title="Catalogo"
//         />
//       )}
//     </div>
//   );
// }

//export default App;