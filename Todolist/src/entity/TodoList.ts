import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class MyTodoList {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    time: string

    @Column()
    job: string

    @Column()
    checked: boolean



   
}
