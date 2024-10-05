import '../styles/nav.css'
import Hamburger from './Hamburger'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <>
            <nav className="navbar">
                <Hamburger/>
                <img id='logo' src="../src/assets/logo.png" alt="logo" />
                <Link to={'/donatenow'}><button id='donte-now-button'>Donate Now </button></Link>
            </nav>

        </>
    )
}
export default Nav