//import '../assets/css/Header.css';


function Header(props) {
    return (
        <>
            <header>

                <div className="nav container">



                    <a href="/" className="logo">lo<span>go</span></a>
                </div>
            </header>
            <section className="home" id="home">
                <div className="home-text container">
                    <h2 className="home-title">Criptolife</h2>
                    <span className="home-subtitle"> informações diáras do mundo cripto</span>
                </div>

            </section>
        </>
    );
}

export default Header;