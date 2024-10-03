import '../styles/nav.css'
import Hamburger from './Hamburger'

function Nav() {
    return (
        <>
            <nav className="navbar">
                <Hamburger/>
                <img id='logo' src="../src/assets/logo.png" alt="logo" />
                <button id='donte-now-button'>Donate Now</button>
            </nav>

        </>
    )
}
export default Nav