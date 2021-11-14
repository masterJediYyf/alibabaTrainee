import React, { useCallback, useState } from "react";
import classnames from "classnames";

interface ITodoTextInputProps {
    placeholder?: string;
    text?: string;
    newTodo?: boolean | undefined;
    editing?: boolean;
    onSave: Function;
}

export default function TodoTextInput({
    placeholder,
    text: initialText,
    onSave,
    newTodo,
    editing = false
}: ITodoTextInputProps) {
    const [text, setText] = useState(initialText);

    // 回车键事件的监听函数
    const handleSubmit = useCallback(
        (event) => {
            const text = event.target.value.trim();
            // which 按键码
            if (event.which === 13) {
                onSave(text);
                if (newTodo) {
                    setText("");
                }
            }
        },
        [newTodo, onSave]
    );

    // 受控组件，当输入新数据时，执行该函数，更新输入框的 value 属性。
    const handleChange = useCallback((event) => {
        setText(event.target.value);
    }, []);

    // 当输入框失去焦点时，触发该回调函数。
    const handleBlur = useCallback(
        (event) => {
            if (newTodo) return;
            onSave(event.target.value);
        },
        [newTodo, onSave]
    );

    return (
        <input
            className={classnames({
                edit: editing,
                "new-todo": newTodo
            })}
            type="text"
            placeholder={placeholder}
            // 自动获取焦点
            autoFocus
            // 受控的值
            value={text || ""}
            // 失去焦点时
            onBlur={handleBlur}
            // 输入内容时
            onChange={handleChange}
            // 检测到键盘按键事件时
            onKeyDown={handleSubmit}
        />
    );
}
