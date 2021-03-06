import { VNodeTypes, Element } from 'aethon-shared'

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
    const component = new Component()
    component.componentWillMount()
    const dom = mount(component.render(), parentDom)
    component.componentDidMount()
    return dom
}

function mountElement(element, parentDom) {
    const { type, props, tag, children } = element
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

const AethonDOM = {
    render: (_yag, root) => {
        const element = _yag
        const parentDom = root

        const dom = mount(element, parentDom)
        parentDom.appendChild(dom)
        return dom
    }
}
export default AethonDOM