//import { React, Component, ReactDOM } from './../src'
class Button extends React.Component{
    click() {
        alert('clicked')
    }
    render() {
        return(
            <button onclick={this.click}>Click Me</button>
        )
    }
}

class Ex extends React.Component {
    constructor(props) {
        super(props)
        this.name = "Nnamdi"
    }
    componentDidMount() {
        console.log('I mounted')
    }
    render() {
        return ( <div> Hello !!, I'm { this.name } <Button /></div>
        )
    }
}
ReactDOM.render( <Ex /> , document.getElementById('root'));