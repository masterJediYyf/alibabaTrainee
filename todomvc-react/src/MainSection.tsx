import { ITodo, IFilter } from "../types";
import TodoList from "./TodoList";
import Toggler from "./Toggler";

// 组件 MainSection 的参数类型声明
interface IMainSectionProps {
    todos: Array<ITodo>;
    filter: IFilter;
    actions: {
        // [key: string]: Function
        editTodo: Function;
        deleteTodo: Function;
        completeTodo: Function;
        completeAll: Function;
    };
}

export default function MainSection({
    todos,
    filter,
    actions
}: IMainSectionProps) {
    const completedCount = todos.reduce((count: number, todo: ITodo) => {
        return todo.completed ? count + 1 : count;
    }, 0);

    return (
        <section className="main">
            {/* 用三元表达式，达到条件渲染的目的 */}
            {todos.length > 0 && (
                <Toggler
                    checked={completedCount === todos.length}
                    completeAll={actions.completeAll}
                />
            )}
            {/* 任务列表组件 */}
            <TodoList todos={todos} filter={filter} actions={actions} />
        </section>
    );
}
