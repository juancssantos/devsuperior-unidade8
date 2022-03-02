import { Link } from 'react-router-dom';

import './styles.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Desafio Github API</h1>
      <h5>Bootcamp Spring React - DevSuperior</h5>
      <Link to="/githubsearch">
        <button className="btn btn-primary btn-lg">Começar</button>
      </Link>
    </div>
  );
};

export default Home;
