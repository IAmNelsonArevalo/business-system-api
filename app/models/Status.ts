import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity({ name: 'statuses' })
export class Status {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({name: 'name'})
    name: string;
    @Column({ name: 'model' })
    model: string;
    @Column({ name: 'color_status' })
    color_status: string;
    @Column({ name: 'translation_status' })
    translation_status: string;
    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;
    @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updated_at: Date;
}