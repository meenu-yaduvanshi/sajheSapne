import '../styles/nav.css'

function Nav() {

    return (
        <>
            <nav className="navbar">
                <img id='logo' src="../src/assets/logo.png" alt="logo" />
                <div className='links-container'>
                    <a href="#"><p>Power of <br /><span>Learning</span></p></a> <p>+</p>
                    <a href="#"><p>Power of <br /><span>Earning</span></p></a><p>+</p>
                    <a href="#"><p>Power of <br /><span>Collective</span></p></a><p>=</p>
                    <a href="#"><p id='agency-building'>Agency <br />Building</p></a>
                </div>

                <a href="#" id='anchor-g-i'><p id='get-involved'>Get<br />Involved</p></a>
                <img id='search-bar' src="../src/assets/searchicon.png" alt="" />
            </nav>

        </>
    )

}
export default Nav

