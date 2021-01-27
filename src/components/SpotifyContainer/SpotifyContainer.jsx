import react from "react";
import "./spotifyContainer.css";



class SpotifyContainer extends react.Component {
    constructor(props) {
        super();
        this.state = {
            width: "840"
        }
    }

    componentDidMount=()=>{
        window.addEventListener('resize',this.updateSpotifyContainer)
    }

    componentDidUpdate = (prevProps, prevState) => {

        try {
            if (this.state.width !== prevState.width) {
                console.log(this.state.width)
            }
        } catch (error) {
            console.log(error);
        }

    }

    updateSpotifyContainer=()=>{
        try {
            
        } catch (error) {
            console.log(error);
        }
    }



    render() {
        return (<div className="divMainSpotifyContainer">
            <iframe src="https://open.spotify.com/embed/artist/6vg2jNAYHgIg3FfWLv7EoG"
                width={this.state.width}
                height="380"
                frameborder="0"
                allowtransparency="true"
                allow="encrypted-media"></iframe>
        </div>)
    }
}

export default SpotifyContainer;