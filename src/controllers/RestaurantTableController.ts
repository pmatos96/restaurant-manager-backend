import { Request, Response } from "express";
import { RestaurantTableService } from "../services/RestaurantTableService";


class RestaurantTableController {

    async create(request: Request, response: Response) {

        const { restaurant_id, number_of_seats, table_number } = request.body;
        const restaurantTableService = new RestaurantTableService();

        const restaurantTable = await restaurantTableService.create({
            restaurant_id,
            number_of_seats,
            table_number
        })

        return response.json(restaurantTable);
    }

    async showByRestaurant(request: Request, response: Response){
        const { id } = request.params;

        const restaurantTableService = new RestaurantTableService();

        const list = await restaurantTableService.listByRestaurant(id);

        return response.json(list);
    }
}

export { RestaurantTableController };