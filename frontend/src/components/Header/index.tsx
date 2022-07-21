import logo from '../../assets/img/logo.svg';
import './styles.css';

export function Header() {
  return (
    <header>
      <div className="dsmeta-logo-container">
        <img src={logo} alt="DSMeta" />
        <h1>DSMeta</h1>
              <p>
                Desenvolvido por
                <a href="https://www.github.com/wagnerleandro"> @wagnerleandro</a>
          </p>
      </div>
    </header>
  );
}