import { useState } from "react";
import "./App.css";
import viteLogo from "/vite.svg";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import Toaster from "./utils/Toaster";
import BulbService from "./services/BulbService";
import Header from "./components/Header";

function App() {
  const [loading, setLoading] = useState(false);
  const [bulbA, setBulbA] = useState(false);
  const [bulbB, setBulbB] = useState(false);

  const lightBulbA = async () => {
    setLoading(true);
    Toaster.loadingToast("Operation On Prpgress.......");
    try {
      const result = await BulbService.triggerBulbA();
      if (result.data.status === 201) {
        if (result.data.bulb === 1) setBulbA(true);
        if (result.data.bulb === 0) setBulbA(false);
        Toaster.justToast("success", bulbA?`Bulb A Switched Off`:'Bulb A Switched On', () => {
          Toaster.dismissLoadingToast();
        });
      }
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
      Toaster.dismissLoadingToast();
    }
  };
  const lightBulbB = async () => {
    setLoading(true);
    Toaster.loadingToast("Operation On Prpgress.......");
    try {
      const result = await BulbService.triggerBulbB();
      if (result.data.status === 201) {
        if (result.data.bulb === 0) setBulbB(false);
        if (result.data.bulb === 1) setBulbB(true);
        Toaster.justToast("success", bulbB?`Bulb B Switched Off`:'Bulb B Switched On', () => {
          Toaster.dismissLoadingToast();
        });
      }
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
      Toaster.dismissLoadingToast();
    }
  };
  return (
    <>
      <ToastContainer />
      <Header/>
      <div
        className="card"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <button
          onClick={() => {
            lightBulbA();
          }}
          disabled={loading}
          style={{
            padding: "20px",
            fontWeight:"bold",
            fontSize: "30px",
            backgroundColor: bulbA ? "#ff9844" : "",
          }}
        >
          BULB A
        </button>
        <button
          onClick={() => {
            lightBulbB();
          }}
          disabled={loading}
          style={{
            padding: "20px",
            fontWeight:"bold",
            fontSize: "30px",
            backgroundColor: bulbB ? "#ff9844" : "",
          }}
        >
          BULB B
        </button>
      </div>
      <Footer viteLogo={viteLogo} />
    </>
  );
}

export default App;
