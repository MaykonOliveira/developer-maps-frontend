import React, { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";

import api from "./services/api";

import DevForm from "./components/DevForm";
import DevItem from "./components/DevItem";

import "bootstrap/dist/css/bootstrap.min.css";
import "./global.css";
import "./App.css";

function App() {
  const [devs, setDevs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadDevs();
  }, []);

  async function loadDevs() {
    setLoading(true);
    const response = await api.get("/devs");
    setDevs(response.data);
    setLoading(false);
  }

  async function handleAddDev(data) {
    const response = await api.post("/devs", data);

    setDevs([...devs, response.data]);
  }

  async function handleDelete(id) {
    await api.delete(`/devs/${id}`);
    loadDevs();
  }

  return (
    <div id="app">
      <aside>
        <DevForm onSubmit={handleAddDev} />
      </aside>
      <main>
        {loading ? (
          <div class="center-div">
            <Spinner className="spinner" animation="border" />
          </div>
        ) : (
            <div className="main-content">
              <ul>
                {devs.map(dev => (
                  <DevItem key={dev._id} dev={dev} handleDelete={handleDelete} />
                ))}
              </ul>
            </div>
          )}
      </main>
    </div>
  );
}

export default App;
