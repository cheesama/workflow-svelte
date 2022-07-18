import type { INode } from "./Nodes";

export interface ICollection {
    id: string,
    name: string,
    nodes: INode[]         
}