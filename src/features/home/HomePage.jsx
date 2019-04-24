import React from 'react';

const HomePage = ({history}) => {
    return (
        <div>
            <h1>HomePage</h1>
            <div className = "ui inverted vertical masthead center aligned segment">
                <div className = "ui text container">
                    <h1 className = "ui inverted stackable container">
                        img
                        <div className = "content">
                            Revents
                        </div>
                    </h1>
                    <h2>Hello</h2>
                    <div onClick = {() => history.push('/events')} className = "ui huge white inverted button">
                        Get Started
                        <i className = "right arrow icon" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;