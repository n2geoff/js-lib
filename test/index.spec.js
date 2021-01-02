import test from "../node_modules/testit/dist/testit.js";
import Module from "../src/index.js";

test.it({
    "module exists": function () {
        test.assert(Module);
    }
}).run();

