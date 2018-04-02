/* {Module} v{version} | MIT | https:// */
(function(root, factory) {
    if(typeof module === "object" && module.exports) {
        module.exports = factory(root.Module);
    } else {
        root.Module = factory(root.Module);
    }
    
}(this, function() {
    'use strict';

    const Module = {};

    return Module;
}));
    