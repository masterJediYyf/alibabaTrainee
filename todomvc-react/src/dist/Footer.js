"use strict";
exports.__esModule = true;
var classnames_1 = require("classnames");
var constants_1 = require("./constants");
function TodoCount(_a) {
    var activeCount = _a.activeCount;
    var itemWord = activeCount === 1 ? "item" : "items";
    return (React.createElement("span", { className: "todo-count" },
        React.createElement("strong", null,
            activeCount || "No",
            " "),
        itemWord,
        " left"));
}
function FilterList(_a) {
    var selectedFilter = _a.selectedFilter, onShow = _a.onShow;
    return (React.createElement("ul", { className: "filters" }, constants_1.FILTER_LIST.map(function (filter) { return (React.createElement("li", { key: filter },
        React.createElement(FilterLink, { filter: filter, selectedFilter: selectedFilter, onShow: onShow }))); })));
}
function FilterLink(_a) {
    var filter = _a.filter, selectedFilter = _a.selectedFilter, onShow = _a.onShow;
    var title = constants_1.FILTER_TITLE_MAP[filter];
    return (React.createElement("a", { href: "#/" + filter, className: classnames_1["default"]({ selected: filter === selectedFilter }), style: { cursor: "pointer" }, onClick: function () { return onShow(filter); } }, title));
}
function ClearButton(_a) {
    var completedCount = _a.completedCount, onClearCompleted = _a.onClearCompleted;
    if (completedCount > 0) {
        return (React.createElement("button", { className: "clear-completed", onClick: function () { return onClearCompleted(); } }, "Clear completed"));
    }
    return null;
}
function Footer(props) {
    var activeCount = props.activeCount, selectedFilter = props.filter, onShow = props.onShow, completedCount = props.completedCount, onClearCompleted = props.onClearCompleted;
    return (React.createElement("footer", { className: "footer" },
        React.createElement(TodoCount, { activeCount: activeCount }),
        React.createElement(FilterList, { selectedFilter: selectedFilter, onShow: onShow }),
        React.createElement(ClearButton, { completedCount: completedCount, onClearCompleted: onClearCompleted })));
}
exports["default"] = Footer;
