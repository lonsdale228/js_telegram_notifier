import {
    Column,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn
} from 'typeorm';
import UserNote from './UserNote';

@Entity()
export default class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "bigint" })
    tgId: bigint;

    @OneToMany(
        _ => UserNote,
        usernote => usernote.note
    )
    usernotes: UserNote[];
}