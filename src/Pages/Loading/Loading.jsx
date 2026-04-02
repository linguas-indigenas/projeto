import logo from "../../assets/logo_minimo.svg";
import './Loading.css';

const Loading = () => {
    return (
        <div className="loading-overlay">
            <div className="loading-content">
                <img src={logo} className="loading-logo" alt="Carregando..." />
                <div className="spinner"></div>
            </div>
        </div>
    );
};

export default Loading;