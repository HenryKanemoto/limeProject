export class ProductModel {
    name: string;
    id: number;
    img: string;
    price: string;
    version: "PC" | "PS4" | "XBOX";

    constructor(name: string, id: number, img: string, price:string, version: "PC" | "PS4" | "XBOX") {
        this.name = name;
        this.id = id;
        this.img = img;
        this.price = price;
        this.version = version;
    }
}