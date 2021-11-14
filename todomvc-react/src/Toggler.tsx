interface ITogglerProps {
    checked: boolean;
    completeAll: Function;
}
export default function Toggler({ checked, completeAll }: ITogglerProps) {
    return (
        <>
            <input
                id="toggle-all"
                className="toggle-all"
                type="checkbox"
                checked={checked}
                onChange={() => completeAll()}
            />
            {/* label 的特殊能力：关联到指定的表单域组件 */}
            {/* 当点击 label 时，被关联的组件，同步被点击 */}
            <label htmlFor="toggle-all" />
        </>
    );
}
