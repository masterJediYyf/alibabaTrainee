export interface ITodo {
    id: number;// 唯一标识
    text: string;// 任务内容
    completed: boolean;//是否完成
}

//过滤条件 全部 未完成 已完成
export type IFilter = "SHOW_ALL" | "SHOW_ACTIVE" | "SHOW_COMPLETED";
export interface IFilterMap {
    // [key:IFilter] : string
    SHOW_ALL: any;
    SHOW_ACTIVE: any;
    SHOW_COMPLETED: any;
}