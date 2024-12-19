import { v4 } from "uuid";

export default function generateIDArray<T extends object>(list: T[]): (T & { id: string })[] {
    const newList = list.map((item) => ({
        ...item,
        id: v4(),
    }));
    return newList;
}