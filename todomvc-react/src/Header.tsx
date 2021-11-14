import React, { useCallback } from 'react'
import TodoTextInput from './TodoTextInput';

const Header = ({ addTodo }: { addTodo: Function }) => {
    // 按下回车键 新增一条记录
    const handleSave = useCallback(
        (text: string) => {
            if (text.length === 0) return;
            addTodo(text); // addTodo 来自 App.tsx
        },
        [addTodo]
    )
    return (
        <header className='header'>
            <h1>todos</h1>
            <TodoTextInput
                //是否新建
                newTodo
                //绑定监听函数
                onSave={handleSave}
                // 占位符 如果没有输入任务内容,则展示指定的占位符
                placeholder='what needs to be done'
            />

        </header>
    )
}

export default Header;