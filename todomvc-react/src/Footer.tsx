import classnames from "classnames";
import { IFilter } from "../types";
import { FILTER_LIST, FILTER_TITLE_MAP } from "./constants";

function TodoCount({ activeCount }: { activeCount: number }) {
    const itemWord = activeCount === 1 ? "item" : "items";

    return (
        <span className="todo-count">
            <strong>{activeCount || "No"} </strong>
            {itemWord} left
        </span>
    );
}

function FilterList({
    selectedFilter,
    onShow
}: {
    selectedFilter: string;
    onShow: Function;
}) {
    return (
        <ul className="filters">
            {FILTER_LIST.map((filter: IFilter) => (
                <li key={filter}>
                    <FilterLink
                        filter={filter}
                        selectedFilter={selectedFilter}
                        onShow={onShow}
                    />
                </li>
            ))}
        </ul>
    );
}

interface IFilterLinkProps {
    filter: IFilter;
    selectedFilter: string;
    onShow: Function;
}
function FilterLink({ filter, selectedFilter, onShow }: IFilterLinkProps) {
    const title = FILTER_TITLE_MAP[filter];

    return (
        <a
            href={`#/${filter}`}
            className={classnames({ selected: filter === selectedFilter })}
            style={{ cursor: "pointer" }}
            onClick={() => onShow(filter)}
        >
            {title}
        </a>
    );
}

function ClearButton({
    completedCount,
    onClearCompleted
}: {
    completedCount: number;
    onClearCompleted: Function;
}) {
    if (completedCount > 0) {
        return (
            <button className="clear-completed" onClick={() => onClearCompleted()}>
                Clear completed
            </button>
        );
    }
    return null;
}

interface IFooterProps {
    activeCount: number;
    filter: IFilter;
    onShow: Function;
    completedCount: number;
    onClearCompleted: Function;
}

export default function Footer(props: IFooterProps) {
    const {
        activeCount,
        filter: selectedFilter,
        onShow,
        completedCount,
        onClearCompleted
    } = props;

    return (
        <footer className="footer">
            <TodoCount activeCount={activeCount} />
            <FilterList selectedFilter={selectedFilter} onShow={onShow} />
            <ClearButton
                completedCount={completedCount}
                onClearCompleted={onClearCompleted}
            />
        </footer>
    );
}
