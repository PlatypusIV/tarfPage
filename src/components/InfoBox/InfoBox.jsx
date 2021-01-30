import react from "react";
import "./InfoBox.css";
import big_dude from "../../img/big_dude.jpg"

class InfoBox extends react.Component {
    render() {
        return (<div className="divMainInfo">
            <div className="divMainText">
                <p>Hi I'm Tarf</p>
                <p>And I make metal Covers of anime/ Video game/ Vtuber music.</p><p> I have a bunch of original stuff with either my band or by myself. My original stuff can can be found below.</p>
                <p>You could also follow me on <a href="https://twitter.com/tarvinee"><strong>twitter</strong></a>, check out my <a href="https://tarf.bandcamp.com/releases"><strong>bandcamp</strong></a> or listen to the stuff I made alongside my band on <a href="https://open.spotify.com/artist/6vg2jNAYHgIg3FfWLv7EoG"><strong>spotify.</strong></a></p>
                <p>Check em out and hope you enjoy!</p>
            </div>

            <div className="divMainImage">
                <img src={big_dude} className="imgPortrait"></img>
            </div>

        </div>)
    }
}

export default InfoBox;