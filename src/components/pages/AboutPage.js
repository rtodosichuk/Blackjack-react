import React from 'react';

class AboutPage extends React.Component {
    render() {
        return (
            <div className="mid">
                <h1>About</h1> 
                <p>This sample blackjack game uses React, Redux, React Router and a variety of other helpful libraries.</p>
                <p>This application is a prof of concept.</p>
                <p>
                  <author>Creator:</author> <span>Ron Todosichuk</span><br/>
                  Copyright &#9400; 2017
                </p>
            </div>
        );
    }
}

export default AboutPage;