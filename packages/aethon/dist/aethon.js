(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('aethon-shared')) :
    typeof define === 'function' && define.amd ? define(['exports', 'aethon-shared'], factory) :
    (factory((global.Aethon = {}),null));
}(this, (function (exports,aethonShared) { 'use strict';

    class Component {
        constructor(props, context) {
            this.props = props;
            this.context = context;
        }
        setState(_state) {}
        componentWillUpdate(nextProps, nextState) {}
        componentWillUnmount() {}
        componentWillReceiveProps(nextProps) {}
        componentWillMount() {}
        componentDidMount() {}
        render() {}
    }

    function createElement(el, props, ...children) {
        let type;
        if (typeof el == 'object' || typeof el == 'function') {
            type = aethonShared.VNodeTypes.COMPONENT;
        }
        if (typeof el == 'string') {
            type = aethonShared.VNodeTypes.ELEMENT;
        }
        const dom = createVNode(el, type, props, children);
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
    const Aethon = {
        createElement,
        Component
    };
    module.exports = Aethon;

    exports.Component = Component;
    exports.createElement = createElement;
    exports.createVNode = createVNode;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
