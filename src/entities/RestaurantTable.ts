import { Entity, PrimaryColumn, CreateDateColumn, UpdateDateColumn, Column, ManyToOne, JoinColumn } from "typeorm";

import{ v4 as uuid } from "uuid";
import { Restaurant } from "./Restaurant";

@Entity("restaurantTables")
class RestaurantTable {
    
    @PrimaryColumn()
    id: string;

    @JoinColumn({ name: "restaurant_id" })
    @ManyToOne(() => Restaurant)
    restaurant: Restaurant;

    @Column()
    restaurant_id: string;

    @Column()
    number_of_seats: number;

    @Column()
    table_number: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;


    constructor() {
        if(!this.id) {
            this.id = uuid()
        }
    }
}

export { RestaurantTable };