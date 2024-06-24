import { Category } from "./Category";

export interface ContactData {
    id: string;
    name: string;
    createdDate: string;
    suburb: string;
    category: Category;
    description: string;
    price: number;
    phone: string;
    email: string;
    status: number;
}

export class Contact implements ContactData {
    readonly id: string;
    readonly name: string;
    readonly createdDate: string;
    readonly suburb: string;
    readonly category: Category;
    readonly description: string;
    readonly price: number;
    readonly phone: string;
    readonly email: string;
    readonly status: number;

    constructor(data: ContactData);
    constructor(data: ContactData, status: number);

    constructor(data: ContactData, status?: number) {
        this.id = data.id
        this.name = data.name
        this.createdDate = data.createdDate
        this.suburb = data.suburb
        this.category = data.category
        this.description = data.description
        this.price = data.price
        this.phone = data.phone
        this.email = data.email
        if(status)
            this.status = status
        else
            this.status = data.status;
    }

}