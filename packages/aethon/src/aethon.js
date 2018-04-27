const VNodeTypes = {
    COMPONENT: "COMPONENT",
    ELEMENT: "ELEMENT",
    TEXT: "TEXT"
}
const Element = {
    tag: "",
    type: "",
    props: "",
    children: null
}

let cmps = []

function createElement(el, props, ...children) {
    //console.log('called')

    /*console.log(el, props, children)
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
    }*/
    //console.log(el, '===props:', props)
    //console.log(el, '===children:', children)
    let type
    if (typeof el == 'object' || typeof el == 'function') {
        type = VNodeTypes.COMPONENT
    }
    if (typeof el == 'string') {
        type = VNodeTypes.ELEMENT
    }
    const dom = createVNode(el, type, props, children)
    cmps.push(dom)
    return dom
}

/**
 * {
 *  tag:,
 *  type:,
 *  props:,
 *  children
 * }
 */
function createVNode(tag, type, props, children) {
    return {
        tag,
        type,
        props,
        children
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


function mount(element, parentDom) {
    if (element.type == VNodeTypes.COMPONENT) {
        return mountComponent(element.tag, parentDom)
    }
    if (element.type == VNodeTypes.ELEMENT) {
        return mountElement(element, parentDom)
    }
    if (!element.type) {
        return mountText(element, parentDom)
    }
}

function mountComponent(Component, parentDom) {
    //console.log(Comp)
    const component = new Component()
    component.componentWillMount()
    const dom = mount(component.render(), parentDom)
    component.componentDidMount()
    return dom
}

function mountElement(element, parentDom) {
    const { type, props, tag, children } = element
    //console.log(props)
    const dom = document.createElement(tag)
    parentDom.appendChild(dom)
    appendProps(props, dom)
    mountArrayChildren(children, dom)
    return dom
}

function mountArrayChildren(children, dom) {
    for (var index = 0; index < children.length; index++) {
        var child = children[index];
        mount(child, dom)
    }
}

function mountText(element, parentDom) {
    const dom = document.createTextNode(element)
    parentDom.appendChild(dom)
    return element
}

function appendProps(props, element) {
    for (var key in props) {
        element.setAttribute(key, props[key])
    }
}
React = {
    Component,
    createElement
}


ReactDOM = {
    render: (_yag, root) => {
        const element = _yag
        const parentDom = root

        /*console.log('ReactDOM.render', _yag)
        const _dom = _yag.type == 'CLASS' ? _yag.render() : _yag
        console.log(_dom)
        root.appendChild(_dom)*/

        const dom = mount(element, parentDom)
        parentDom.appendChild(dom)
        return dom
    }
}

/*exports.React = React
exports.Component = Component
exports.ReactDOM = ReactDOM*/