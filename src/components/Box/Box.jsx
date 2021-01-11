import react from "react";
import "./box.css";

export default class Box extends react.Component {


    render() {
        const {linkProp} = this.props;
        return (<div class="inner">
            <iframe src={linkProp} allowFullScreen ></iframe>
            <a href={linkProp} class="button fit" data-poptrox="youtube,800x400">Watch</a>
        </div>);
    }
}