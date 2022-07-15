import './styles.css';
import SignOutIcon from "../../assets/singOut.svg";
import Logo from "../../assets/logo.svg"

function Header() {
    return (
        <header>
            <div></div>
            <img src={Logo} alt="Logo" className="logo"/>
            <img src={SignOutIcon} alt="sing out" className="sign-out" />
        </header>
    );
}

export default Header;
