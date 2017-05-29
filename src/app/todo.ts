export class Todo {
    id: number;
    title: string;
    complete: boolean;


    constructor(value: Object = {}) {
        Object.assign(this, value)
    }
}
