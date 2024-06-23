export interface CategoryData {
    id: number;
    name: string;
}

export class Category implements CategoryData {
    readonly id: number;
    readonly name: string;

    constructor(data: CategoryData) {
        this.id = data.id;
        this.name = data.name;
    }
    

}