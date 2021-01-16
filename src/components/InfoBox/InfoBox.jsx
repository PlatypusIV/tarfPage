import react from "react";
import "./InfoBox.css";

class InfoBox extends react.Component {

    render() {
        return (<div className="divMainInfo">
            <span>
                <h1><strong>Introduction</strong></h1>
            </span>
            <span>
                <p>
                    Hi. Im Tarvi. Im a musician, youtuber and a big guy with a big heart.<br/>

                </p>
            </span>
            <div className="divSupportMe">

            </div>
        </div>)
    }
}

export default InfoBox;