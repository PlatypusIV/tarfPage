import react from "react";
import "./footer.css";
import bandcamp from "../../img/bandcamp.svg";
import twitter from "../../img/twitter.svg";


export default class Footer extends react.Component {

    render() {
        return (<div>
            <footer id="footer">
                <div className="divInner">
                    <ul className="ulFooterIcons">
                        <li><a href="https://twitter.com/tarvinee"> <img src={bandcamp}/></a></li>
                        <li><a href="https://tarf.bandcamp.com/releases"><img src={twitter}/></a></li>
                    </ul>
                    <p className="copyright">&copy; Untitled. Design: <a href="https://templated.co">TEMPLATED</a>. Reactified by:<a href="https://github.com/PlatypusIV"><strong>Herbert-Ken Ümera</strong></a></p>
                </div>
            </footer>
        </div>)
    }
}