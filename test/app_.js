//import { React, Component, ReactDOM } from './../src'
class Button extends React.Component {
    click() {
        alert('clicked');
    }
    render() {
        return React.createElement(
            'button',
            { onClick: this.click },
            'Click Me'
        );
    }
}

class Ex extends React.Component {
    constructor(props) {
        super(props);
        this.name = "Nnamdi";
    }

    render() {
        return React.createElement(
            'div',
            null,
            ' Hello !!, I\'m ',
            this.name,
            ' ',
            React.createElement(Button, null)
        );
    }
}
ReactDOM.render(React.createElement(Ex, null), document.getElementById('root'));

