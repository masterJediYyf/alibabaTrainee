"use strict";
exports.__esModule = true;
function Toggler(_a) {
    var checked = _a.checked, completeAll = _a.completeAll;
    return (React.createElement(React.Fragment, null,
        React.createElement("input", { id: "toggle-all", className: "toggle-all", type: "checkbox", checked: checked, onChange: function () { return completeAll(); } }),
        React.createElement("label", { htmlFor: "toggle-all" })));
}
exports["default"] = Toggler;
