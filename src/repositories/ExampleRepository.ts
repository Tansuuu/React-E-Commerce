import { IExample } from "../inheritance/IExample";
import { IGlobal } from "../inheritance/IGlobal";
import { Product } from "../models/Product";
import ExampleService from "../services/ExampleService";

class ExampleRepository extends IGlobal implements IExample{
    getProducts(): Promise<Product[]> {
        return new Promise<Product[]>(async(resolve , reject) => {
            
            try {
                const response = await ExampleService.getProducts();
                resolve(response);
            } catch (error) {
                reject(error);
            }
        })
    }

}
export default new ExampleRepository();