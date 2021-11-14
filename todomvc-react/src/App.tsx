import { useState, useEffect, useCallback } from "react";
import { IFilter, ITodo } from "../types";
import Header from "./Header";
import MainSection from "./MainSection";
import Footer from "./Footer";
import { INITIAL_STATE } from "./constants";

export default function App() {
    const [todos, setTodos] = useState<Array<ITodo>>(INITIAL_STATE);
    const [filter, setFilter] = useState<IFilter>("SHOW_ALL");
    const [completedCount, setCompletedCount] = useState<number>(0);

    // 计算未完成的任务数量
    useEffect(() => {
        setCompletedCount(
            todos.reduce((count: number, todo: ITodo) => {
                return todo.completed ? count + 1 : count;
            }, 0)
        );
    }, [todos]);

    // 新建一条记录
    const addTodo = useCallback(
        (text: string) => {
            const nextTodo = {
                id: Math.max(...todos.map((todo: ITodo) => todo.id), 0) + 1,
                text,
                completed: false
            };
            setTodos([nextTodo, ...todos]);
        },
        [todos]
    );
    // 删除指定的一条记录
    const deleteTodo = useCallback(
        (id: number) => {
            const nextTodos = todos.filter((todo: ITodo) => todo.id !== id);
            setTodos(nextTodos);
        },
        [todos]
    );
    // 编辑指定的记录
    const editTodo = useCallback(
        (id: number, text: string) => {
            const nextTodos = todos.map((todo: ITodo) =>
                todo.id === id ? { ...todo, text } : todo
            );
            setTodos(nextTodos);
        },
        [todos]
    );
    // 完成指定的记录
    const completeTodo = useCallback(
        (id: number) => {
            const nextTodos = todos.map((todo: ITodo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            );
            setTodos(nextTodos);
        },
        [todos]
    );
    // 完成全部任务
    const completeAll = useCallback(() => {
        const areAllMarked = todos.every((todo: ITodo) => todo.completed);
        const nextTodos = todos.map((todo: ITodo) => {
            return { ...todo, completed: !areAllMarked };
        });
        setTodos(nextTodos);
    }, [todos]);
    const clearCompleted = useCallback(() => {
        const nextTodos = todos.filter((todo: ITodo) => todo.completed === false);
        setTodos(nextTodos);
    }, [todos]);

    return (
        <div>
            {/* 顶部的输入框部分 */}
            <Header addTodo={addTodo} />
            {/* 中间的任务列表部分 */}
            <MainSection
                todos={todos}
                filter={filter}
                actions={{ deleteTodo, editTodo, completeTodo, completeAll }}
            />
            {/* 底部的统计、筛选部分 */}
            {todos.length > 0 && (
                <Footer
                    completedCount={completedCount}
                    activeCount={todos.length - completedCount}
                    filter={filter}
                    onClearCompleted={() => clearCompleted()}
                    onShow={(filter: IFilter) => setFilter(filter)}
                />
            )}
        </div>
    );
}
