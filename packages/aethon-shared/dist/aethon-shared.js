(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (factory());
}(this, (function () { 'use strict';

    const VNodeTypes = {
        COMPONENT: "COMPONENT",
        ELEMENT: "ELEMENT",
        TEXT: "TEXT"
    };
    const Element = {
        tag: "",
        type: "",
        props: "",
        children: null
    };

    exports.VNodeTypes = VNodeTypes;
    exports.Element = Element;

})));
