import ResultCard from 'components/ResultCard';
import './styles.css';
import React, { useState } from 'react';
import axios from 'axios';

type Git = {
  avatar_url: string;
  html_url: string;
  followers: string;
  location: string;
  name: string;
};

type FormData = {
  usuario: string;
};

const GithubSearch = () => {
  const [git, setGit] = useState<Git>();
  const [formData, setFormData] = useState<FormData>({
    usuario: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    axios
      .get(`https://api.github.com/users/${formData.usuario}`)
      .then((response) => {
        setGit(response.data);
      })
      .catch((error) => {
        setGit(undefined);
      });
  };

  return (
    <>
      <div className="git-search-container">
        <div className="container search-container">
          <form onSubmit={handleSubmit}>
            <div className="form-container">
              <h1>Encontre um perfil Github</h1>
              <input
                type="text"
                name="usuario"
                className="search-input"
                placeholder="Usuário Github"
                value={formData.usuario}
                onChange={handleChange}
              />
              <button type="submit" className="btn btn-primary search-button">
                Encontrar
              </button>
            </div>
          </form>
        </div>
        {git && (
          <div className="container search-result-container">
            <img src={git.avatar_url} alt="" />
            <div className="description-result">
              <h5>Informações</h5>
              <ResultCard
                title="Perfil:"
                description={git.html_url}
              ></ResultCard>
              <ResultCard
                title="Seguidores:"
                description={git.followers}
              ></ResultCard>
              <ResultCard
                title="Localidade:"
                description={git.location}
              ></ResultCard>
              <ResultCard title="Nome:" description={git.name}></ResultCard>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default GithubSearch;
