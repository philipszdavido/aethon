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
const Aethon = {
    createElement,
    Component
}
module.exports = Aethon