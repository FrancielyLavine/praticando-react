import './styles.css';
import SignOutIcon from "../../assets/singOut.svg";
import Logo from "../../assets/logo.svg";
import {useNavigate} from 'react-router-dom';

function Header() {
    const navigate = useNavigate();

    function handleLogout(){
        navigate('/');
    }
    return (
        <header>
            <div></div>
            <img src={Logo} alt="Logo" className="logo"/>
            <img src={SignOutIcon} 
            alt="sing out" 
            className="sign-out"
            onClick={handleLogout}
            />
        </header>
    );
}

export default Header;
