import react from "react";
import "./header.css";

export default class Header extends react.Component {

    render() {
        return (<div className="inner">
            <header>
                <h1>Tarf's homepage</h1>
                <p>I make weeb music</p>
            </header>
            <a href="#main" className="more">Introduction</a>
        </div>)
    }
}