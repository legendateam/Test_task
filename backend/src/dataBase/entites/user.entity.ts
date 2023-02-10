import { Column, Entity } from 'typeorm';

import { CommonFields } from './common-fields.entity';

@Entity()
export class User extends CommonFields {
    @Column()
    name: string;

    @Column({
        unique: true,
    })
    email: string;

    @Column()
    password: boolean;
}
