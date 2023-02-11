import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from 'typeorm';

@Entity()
export class CommonFields {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    created_at: Timestamp;

    @UpdateDateColumn()
    updated_at: Timestamp;

    @Column({
        default: false,
    })
    is_deleted: boolean;
}
