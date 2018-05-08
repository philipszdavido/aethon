/*const VNodeTypes = {
    COMPONENT: "COMPONENT",
    ELEMENT: "ELEMENT",
    TEXT: "TEXT"
}
const Element = {
    tag: "",
    type: "",
    props: "",
    children: null
}*/
import { VNodeTypes, Element } from 'aethon-shared'
let cmps = []
export class Component {
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

export function createElement(el, props, ...children) {
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
export function createVNode(tag, type, props, children) {
    return {
        tag,
        type,
        props,
        children
    }
}

//exports.createElement = createElement