import { getCustomRepository } from "typeorm";
import { RestaurantRepository } from "../repositories/RestaurantRepository";

interface IRestaurantCreate {
    name: string;
}

class RestaurantService {

    async create({ name } : IRestaurantCreate){

        const restaurantRepository = getCustomRepository(RestaurantRepository);

        const restaurantAlreadyExists = await restaurantRepository.findOne({
            name,
        })

        if(restaurantAlreadyExists){
            throw new Error("The restaurant " + name + " already exists!");
        }

        const restaurant = restaurantRepository.create({
            name
        })

        await restaurantRepository.save(restaurant)
    }

    async list(){

        const restaurantRepository = getCustomRepository(RestaurantRepository);

        const restaurantList = await restaurantRepository.createQueryBuilder("restaurant").getRawMany();

        return restaurantList;
    }
}

export { RestaurantService };