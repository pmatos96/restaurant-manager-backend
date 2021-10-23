import { Request, response, Response } from "express";
import { getCustomRepository, RepositoryNotTreeError } from "typeorm";
import { RestaurantRepository } from "../repositories/RestaurantRepository";
import { RestaurantService } from "../services/RestaurantService";

class RestaurantController {

    async create(request: Request, response: Response){

        const { name } = request.body;

        const restaurantService = new RestaurantService();

        try{
            const restaurant = await restaurantService.create({ name });

            return response.json(restaurant);
        }
        catch(err){
            return response.status(400).json({
                message: err.message
            })
        }
    }

    async list(request: Request, response: Response){
        
        const restaurantService = new RestaurantService();

        const restaurantList = await restaurantService.list();
        // console.log(restaurantList)
        return response.json(restaurantList);
    }
}

export { RestaurantController };