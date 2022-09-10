import React from "react";
import { useState, useEffect } from "react";
import MainPage from "./Pages/MainPage";
import HashLoader from "react-spinners/HashLoader";


const override = {
  margin: 0,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <div
          style={{
            width: "100vw",
            height: "100vh",
            background: "#16161d",
          }}
        >
          <HashLoader
            color={"#BE8F21"}
            cssOverride={override}
            loading={loading}
            size={80}
          />
        </div>
      ) : (
        <MainPage />
      )}
    </>
  );
}

export default App;
