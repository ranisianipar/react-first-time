import React from 'react';

class Button extends React.Component {

    // default
    constructor(props) {
        super(props);
        this.className = props.className ? props.className : "Button";
        this.state = {
            visibility: true,
        }
    }

    // add class
    handleOnClick(props) {
        if (props.transformation === 'gone') {
            this.className += " "+'gone';
            this.setState({visibility: false});
        }
        else {
            props.onClick();
        }
        
    }
    
    render() {
        return (
            <button 
                className={this.className}
                onClick={() => this.handleOnClick(this.props)} >
                {this.props.text}
            </button>
        )
    }
}

export default Button;