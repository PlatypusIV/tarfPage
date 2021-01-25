import react from "react";
import "./footer.css";
import bandcamp from "../../img/bandcamp.svg";
import twitter from "../../img/twitter.svg";
import spotify from "../../img/spotify.svg";


export default class Footer extends react.Component {

    render() {
        return (<div>
            <footer id="footer">
                <div className="divInner">
                    <div className="divLinks">
                        <a href="https://tarf.bandcamp.com/releases"> <img src={bandcamp} /></a>
                        <a href="https://twitter.com/tarvinee"><img src={twitter} /></a>
                        <a href="https://open.spotify.com/artist/6vg2jNAYHgIg3FfWLv7EoG"><img src={spotify} /></a>
                    </div>
                    <p className="copyright">&copy; Design:<a href="https://templated.co"><strong>TEMPLATED</strong></a>. Reactified by:<a href="https://github.com/PlatypusIV"><strong>Herbert-Ken Ümera</strong></a></p>
                </div>
            </footer>
        </div>)
    }
}