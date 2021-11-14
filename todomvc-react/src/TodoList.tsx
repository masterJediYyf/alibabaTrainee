import { IFilter, ITodo } from "../types";
import TodoItem from "./TodoItem";

const TODO_FILTERS = {
    SHOW_ALL: () => true,
    SHOW_ACTIVE: (todo: ITodo) => !todo.completed,
    SHOW_COMPLETED: (todo: ITodo) => todo.completed
};

interface ITodoListProps {
    todos: Array<ITodo>;
    filter: IFilter;
    actions: {
        // [key: string]: Function
        editTodo: Function;
        deleteTodo: Function;
        completeTodo: Function;
    };
}

export default function TodoList({ todos, filter, actions }: ITodoListProps) {
    // 遍历整个数组，根据指定的过滤条件，筛选出符合条件的记录，最后返回一个新数组。
    const filteredTodos = todos.filter(TODO_FILTERS[filter]);
    return (
        <ul className="todo-list">
            {/* 遍历过滤后的数组，逐个渲染为 TodoItem */}
            {filteredTodos.map((todo: ITodo) => (
                // 单个任务组件
                <TodoItem key={todo.id} todo={todo} {...actions} />
            ))}
        </ul>
    );
}
