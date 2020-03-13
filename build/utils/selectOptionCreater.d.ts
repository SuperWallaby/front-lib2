interface IProps {
    count: number;
    start?: number;
    labelAdd?: string;
}
declare const selectOpCreater: ({ count, labelAdd, start }: IProps) => any[];
export default selectOpCreater;
