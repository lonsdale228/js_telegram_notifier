import {
    Column,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn
} from 'typeorm';


import Note from './Note';
import User from './User';


@Entity()
export default class UserNote {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(
        _ => Note,
        {
            nullable: false
        }
    )
    note: Note;

    @ManyToOne(
        () => User,
        {
            nullable: false
        }
    )
    user: User;

}