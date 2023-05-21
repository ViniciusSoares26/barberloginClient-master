import "../css/FooterStyles.css"
import footerBg from "../../assets/images/footer-bg.png";


const Footer = () => {
    return(
        <div className="footer" style={{
            backgroundImage: `url(${footerBg})`
        }}>
            <div className="top">
                <div>
                    <h1> Barber Answer </h1>
                    <p>  O funcionário robótico com atendimento rápido.</p>
                </div>
                <div>
                    <a href="/">
                        <i className="fab fa-github" style={{color: "#e3a857"}}
                        ></i>
                    </a>
                    <a href="/">
                        <i className="fab fa-linkedin" style={{color: "#e3a857"}}>
                        </i>
                    </a>

                </div>
            </div>

            <div className="bottom">
                <div>
                    <ul>
                    <u><h4> Project </h4></u>
                    <li> <a href="/">Home</a> </li>
                    <li> <a href="/about">Sobre nós</a> </li>
                    <li> <a href="/service">Serviço</a> </li>
                    <li> <a href="/contact">Contato</a> </li>
                    </ul>
                </div>
                <div>
                    <ul>
                    <u><h4> Community </h4></u>
                    <li> <a href="https://github.com/gabopedrosa">GitHub</a> </li>
                    <li> <a href="https://www.instagram.com/gabopedrosa/">Instagram</a> </li>
                    <li> <a href="https://gabopedrosa.github.io/">Portfolio</a> </li>
                    <li> <a href="/https://www.linkedin.com/in/gabriel-pedrosa-2002171b5/">LinkedIn</a> </li>
                    </ul>
                </div>
                <div>
                    <ul>
                    <u><h4> Help </h4></u>
                    <li><a href="/">Support (Out of Service)</a></li>
                    <li><a href="/">Troubleshooting (Out of Service)</a> </li>
                    <li><a href="/">Contact Us (Out of Service)</a></li>
                    <li><a href="/">All Versions (Out of Service)</a></li>
                    </ul>
                </div>
                <div>
                    <u><h4>Others</h4></u>
                    <ul>
                    <li><a href="http://www.magloft.com/publications/6474/terms">Terms of Service</a></li>
                    <li><a href="https://loremipsum.io/privacy-policy/">Privacy Policy </a></li>
                    <li><a href="https://github.com/gabopedrosa/barberanswer">License </a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer;