import React from 'react';

class Award extends React.Component {
    render() {
        return (
            <div className="award">
                <p>{this.props.awardtitle}</p>
            </div>
        );
    }
}


export default Award;