// array declaration
export interface IArrayOfObject {
    description: Array<IObjects>;
}

// object -> key declaration and datatype.
export interface IObjects {
    id: number;
    image: string;
    name: string;
    des: string;
}