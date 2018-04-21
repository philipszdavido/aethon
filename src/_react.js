function createElement(el, props, ...children) {
    console.log(el, props, children)
    console.log('React.render')
    if (typeof el == 'function') {
        const e = new el(props)
        e.children = children
        e.type = 'CLASS'
        return e
    } else {
        const _dom = document.createElement(el)
        children.forEach(function(element) {
            _dom.innerHTML += element
        });
        return _dom
    }
}

class Component {
    constructor(props, context) {
        this.props = props
        this.context = context
    }
    setState(_state) {}
    componentWillUpdate(nextProps, nextState) {}
    componentWillUnmount() {}
    componentWillReceiveProps(nextProps) {}
    componentWillMount() {}
    componentDidMount() {}
    render() {}
}

React = {
    Component,
    createElement
}

ReactDOM = {
    render: (_yag, root) => {
        console.log('ReactDOM.render', _yag)
        const _dom = _yag.type == 'CLASS' ? _yag.render() : _yag
        console.log(_dom)
        root.appendChild(_dom)
    }
}