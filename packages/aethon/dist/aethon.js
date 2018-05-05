(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('aethon-shared')) :
    typeof define === 'function' && define.amd ? define(['aethon-shared'], factory) :
    (factory(global.aethonShared));
}(this, (function (aethonShared) { 'use strict';

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
    exports.createElement = createElement;

    //const { React, Component, ReactDOM } = require('./aethon.js')

})));
