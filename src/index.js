/* {Module} v{version} | MIT | https:// */
(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['Module'], factory);
    } else if(typeof module === 'object' && module.exports) {
        // CommonJS / NodeJS
        module.exports = factory();
    } else {
        // Global
        root.Module = factory();
    }

}(this, function() {
    'use strict';

    // Your Module
    const Module = {};

    // Return it
    return Module;
}));
