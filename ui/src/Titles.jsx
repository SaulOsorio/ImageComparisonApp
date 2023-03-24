import "./style.css";

export const TitleSection = ({ title, subtitle }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src="../resources/solera.png" alt="Bootstrap" height="24" />
        </a>
        <a align-items="center">{title}</a>
      </div>
    </nav>
  );
};
