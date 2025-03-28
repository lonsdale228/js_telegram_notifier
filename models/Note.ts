import {
    Column,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn
} from 'typeorm';

import UserNote from './UserNote';

@Entity()
export default class Note {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    text: string;

    @Column({ type: "timestamp" })
    datetime: Date;

    @OneToMany(
        () => UserNote,
        usernote => usernote.user
    )
    usernotes: UserNote[];
}