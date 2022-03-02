import './styles.css';

type Props = {
  title: string;
  description: string;
};

const ResultCard = ({ title, description }: Props) => {
  return (
    <div className="result-container">
      <h3 className="result-title">{title}</h3>
      {title === 'Perfil:' ? (
        <a className="result-description" href={description}>
          {description}
        </a>
      ) : (
        <p className="result-description">{description}</p>
      )}
    </div>
  );
};

export default ResultCard;
