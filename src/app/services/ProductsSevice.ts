import productData from '@/app/data/products.json';
import { ProductModel } from '../models/ProductModel';

export class ProductService{
    private products: ProductModel[] = [];

    constructor() {
        this.loadProducts();
    };

    loadProducts() {
        this.products = productData.map(
            (data: {name: string, id: number, img: string, price: string}) => 
            new ProductModel(data.name, data.id, data.img, data.price, "PC")
        );
    };

    getAllProducts(): ProductModel[] {
        return this.products;
    };

    getProductById(id: number): ProductModel | undefined {
        return this.products.find((product) => product.id === id);
    }
}