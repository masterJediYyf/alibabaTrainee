import { IFilter, IFilterMap, ITodo } from '../types';

//列表的初始值
export const INITIAL_STATE: ITodo[] = [
    {
        id: 0,
        text: "React TodoMVC",
        completed: false
    }
];

export const FILTER_TITLE_MAP: IFilterMap = {
    SHOW_ALL: "ALL",
    SHOW_ACTIVE: "Active",
    SHOW_COMPLETED: "Completed"
};

export const FILTER_LIST: Array<IFilter> = [
    "SHOW_ALL",
    "SHOW_ACTIVE",
    "SHOW_COMPLETED"
]