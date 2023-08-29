import axios from "axios";
import { Product } from "../models/Product";

class ExampleService{
    async getProducts() : Promise<Product[]> {
        // try {
        //   // 👇️ const data: GetUsersResponse
          
        // } catch (error) {
        //   if (axios.isAxiosError(error)) {
        //     console.log('error message: ', error.message);
        //     return error.message;
        //   } else {
        //     console.log('unexpected error: ', error);
        //     return 'An unexpected error occurred';
        //   }
        // }

        const { data, status } = await axios.get<Product[]>(
            'https://fakestoreapi.com/products',
            {
              headers: {
                Accept: 'application/json',
              },
            },
          );
          
        //   data[0].
        //   console.log(JSON.stringify(data, null, 4));
          // 👇️ "response status is: 200"
        //   console.log('response status is: ', status);
          return data;
      }
      
}

export default new ExampleService();