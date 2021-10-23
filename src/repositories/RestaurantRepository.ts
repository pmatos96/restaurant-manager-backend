import { EntityRepository, Repository } from "typeorm";
import { Restaurant } from "../entities/Restaurant";

@EntityRepository(Restaurant)
class RestaurantRepository extends Repository<Restaurant> {

}

export { RestaurantRepository };