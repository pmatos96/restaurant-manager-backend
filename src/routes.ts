import { Router } from "express";
import { RestaurantController } from "./controllers/RestaurantController";
import { RestaurantTableController } from "./controllers/RestaurantTableController";

const routes = Router();

const restaurantController = new RestaurantController(); 
const restaurantTableController = new RestaurantTableController();

routes.post("/restaurant",  restaurantController.create);

routes.get("/list", restaurantController.list);

routes.post("/table",  restaurantTableController.create);

routes.get("/restaurant-tables/:id", restaurantTableController.showByRestaurant)

export { routes };