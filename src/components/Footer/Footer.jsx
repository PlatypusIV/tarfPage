import react from "react";
import "./footer.css";

export default class Footer extends react.Component {

    render() {
        return (<div>
            <footer id="footer">
                <div className="inner">
                    {/* <h2>Etiam veroeros lorem</h2>
                    <p>Pellentesque eleifend malesuada efficitur. Curabitur volutpat dui mi, ac imperdiet dolor tincidunt nec. Ut erat lectus, dictum sit amet lectus a, aliquet rutrum mauris. Etiam nec lectus hendrerit, consectetur risus viverra, iaculis orci. Phasellus eu nibh ut mi luctus auctor. Donec sit amet dolor in diam feugiat venenatis. </p> */}

                    <ul className="icons">
                        <li><a href="#" class="icon fa-twitter"><span class="label">Twitter</span></a></li>
                        <li><a href="#" class="icon fa-facebook"><span class="label">Facebook</span></a></li>
                        <li><a href="#" class="icon fa-instagram"><span class="label">Instagram</span></a></li>
                        <li><a href="#" class="icon fa-envelope"><span class="label">Email</span></a></li>
                    </ul>
                    <p className="copyright">&copy; Untitled. Design: <a href="https://templated.co">TEMPLATED</a>. Reactified by: : <a href="https://github.com/PlatypusIV"><strong>Herbert-Ken Ümera</strong></a></p>
                </div>
            </footer>
        </div>)
    }
}