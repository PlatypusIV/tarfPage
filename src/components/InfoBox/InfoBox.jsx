import react from "react";
import "./InfoBox.css";
import big_dude from "../../img/big_dude.jpg"

class InfoBox extends react.Component {
    render() {
        return (<div className="divMainInfo">
            <div className="divMainText">
                <p>Hi I'm Tarf</p>
                <p>And I make metal Covers of anime/Video game/Vtuber music.</p><p> I also have a bunch of original stuff with either my <a href="https://open.spotify.com/artist/6vg2jNAYHgIg3FfWLv7EoG"><strong>band</strong></a> or solo artist.</p><p>Check em out and hope you enjoy!</p>
            </div>

            <div className="divMainImage">
                <img src={big_dude} className="imgPortrait"></img>
            </div>

        </div>)
    }
}

export default InfoBox;