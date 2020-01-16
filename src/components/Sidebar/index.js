import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";

import api from "../../services/api";

import "./styles.css";

export default function Sidebar() {
  const [github_username, setGithubUsername] = useState("");
  const [techs, setTechs] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude.toFixed(6));
        setLongitude(longitude.toFixed(6));
      },
      err => {
        console.log(err);
      },
      {
        timeout: 30000
      }
    );
  }, []);

  async function handleAddDev(e) {
    e.preventDefault();

    setLoading(true);

    await api.post("/devs", {
      github_username,
      techs,
      latitude,
      longitude
    });

    setLoading(false);
  }

  return (
    <aside>
      <strong>Cadastrar</strong>
      <form onSubmit={handleAddDev}>
        <div className="input-block">
          <label htmlFor="github_username">Usuário do Github</label>
          <input
            name="github_username"
            id="github_username"
            required
            value={github_username}
            onChange={e => setGithubUsername(e.target.value)}
          />
        </div>

        <div className="input-block">
          <label htmlFor="techs">Tecnologias</label>
          <input
            name="techs"
            id="techs"
            required
            value={techs}
            onChange={e => setTechs(e.target.value)}
          />
        </div>

        <div className="input-group">
          <div className="input-block">
            <label htmlFor="latitude">Latitude</label>
            <input
              type="number"
              name="latitude"
              id="latitude"
              required
              value={latitude}
              onChange={e => setLatitude(e.target.value)}
            />
          </div>

          <div className="input-block">
            <label htmlFor="longitude">Longitude</label>
            <input
              type="number"
              name="longitude"
              id="longitude"
              required
              value={longitude}
              onChange={e => setLongitude(e.target.value)}
            />
          </div>
        </div>

        <button type="submit">
          {loading ? (
            <Loader
              type="ThreeDots"
              color="white"
              height={15}
              width={30}
              timeout={3000} //3 secs
            />
          ) : (
            "Salvar"
          )}
        </button>
      </form>
    </aside>
  );
}
