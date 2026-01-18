import logo from '../assets/images/logo-large.svg'

function Header() {
    return (
        <header className="header">
            <img src={logo} alt="Typing Speed Test" className="logo" />
        </header>
    )
}

export default Header