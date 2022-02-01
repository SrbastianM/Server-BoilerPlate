// const {Entity, Column} = require('typeorm');
import {Entity, PrimaryGeneratedColumn, Column, PrimaryColumn, BeforeInsert, BaseEntity} from "typeorm";
// import * as uuidv4 from "uuid/v4";
import { v4 as uuidv4 } from 'uuid';

@Entity()
export class User extends BaseEntity {

    @PrimaryColumn("uuid") id: string;

    @Column("varchar", {length: 255})    email: string;

    @Column("text")    password: string;

    @BeforeInsert() 
    addId() {
        this.id = uuidv4();
    }
}
