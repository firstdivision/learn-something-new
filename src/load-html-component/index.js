import React from "react";

export default class LoadHtmlComponent extends React.Component {

    

    constructor(props)
    {
        super(props);

        this.wikipediaUrl = "https://en.wikipedia.org/wiki/Special:RandomInCategory/Good_articles";
        this.state = {
            words: ''
        }
    }

    componentDidMount()
    {
        this.makeWords();
    }

    makeWords = () => {



    }

    render() {

        return (
            <div>
                <h2><a href="#" className="App-link" onClick={this.makeWords}>Learn Something New</a></h2>
                { this.state.words }
                <iframe
                    title="Wikipedia"
                    src={this.wikipediaUrl}
                    //src="https://en.wikipedia.org/wiki/Special:RandomInCategory/Good_articles"
                    //height="720"
                    //width="1280"
                    style={{overflow:'hidden', height:'100%', width:'100%'}}
                    height="100%" width="100%"
                    frameBorder="0"
                    scrolling="no"
                    allowFullScreen={true}
                    //ref={refIframe}
                ></iframe>
            </div>
        );
    }
}