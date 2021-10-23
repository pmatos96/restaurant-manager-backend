import { getCustomRepository, Repository } from "typeorm";
import { RestaurantTable } from "../entities/RestaurantTable";
import { RestaurantTableRepository } from "../repositories/RestaurantTableRepository";

interface IRestaurantTableCreate {
    restaurant_id: string;
    number_of_seats: number;
    table_number: number;
}

class RestaurantTableService {

    private restaurantTableRepository: Repository<RestaurantTable>;

    constuctor() {
        this.restaurantTableRepository = getCustomRepository(RestaurantTableRepository);
    }

    async create({ restaurant_id, number_of_seats, table_number }: IRestaurantTableCreate) {

        const restaurantTable = this.restaurantTableRepository.create({
            restaurant_id,
            number_of_seats,
            table_number
        });

        await this.restaurantTableRepository.save(restaurantTable);

        return restaurantTable;
    }

    async listByRestaurant(restaurant_id: string){
        // console.log(getCustomRepository(RestaurantTableRepository))
        const list = await getCustomRepository(RestaurantTableRepository).find({
            where: { restaurant_id },
            relations: ['restaurant']
        });

        return list;
    }
}

export { RestaurantTableService }