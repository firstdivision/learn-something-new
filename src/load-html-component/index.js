import React from "react";
import './index.css';

export default class LoadHtmlComponent extends React.Component {

    

    constructor(props)
    {
        super(props);

        this.wikipediaUrl = "https://en.wikipedia.org/wiki/Special:RandomInCategory/Good_articles";
        this.state = {
            words: '',
            random: 0
        }
    }


    reloadIframe = () => {

        this.setState({random: this.state.random + 1});

    }

    render() {

        return (
            <div className="load-html-container">
                <h2><a href="#" className="App-link" onClick={this.reloadIframe}>Learn Something New</a></h2>
                { this.state.words }
                <iframe
                    key={this.state.random}
                    title="Wikipedia"
                    src={this.wikipediaUrl}
                    style={{height:'100%', width:'100%', overflow: 'scroll'}}
                    height="100%" width="100%"
                    allowFullScreen={true}
                ></iframe>
            </div>
        );
    }
}