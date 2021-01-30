import react from "react";
import "./box.css";

export default class Box extends react.Component {

    openInNewTab = (url) => {
        try {
            window.open(url,)
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        const { linkProp } = this.props;
        return (<div className="inner">
            <div className="divVideoContainer"><iframe src={linkProp} allowFullScreen className="iframeYoutube"/></div>
            <div className="divLinkButton">
                <button onClick={()=>this.openInNewTab(linkProp)} className="buttonWatchLink">
                    Watch
                </button>
            </div>
        </div>);
    }
}