export interface CategoryData {
    id: number;
    name: string;
    iconPath: string;
}

export class Category implements CategoryData {
    readonly id: number;
    readonly name: string;
    readonly iconPath: string;

    constructor(data: CategoryData) {
        this.id = data.id;
        this.name = data.name;
        this.iconPath = data.iconPath;
    }
    

}