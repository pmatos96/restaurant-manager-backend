import { EntityRepository, Repository } from "typeorm";
import { RestaurantTable } from "../entities/RestaurantTable";

@EntityRepository(RestaurantTable)
class RestaurantTableRepository extends Repository<RestaurantTable>{}

export { RestaurantTableRepository };