import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity, NumericType, Unique } from 'typeorm'

@Entity()

export class Medias extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    link:string;
    @Column()
    categoria:string;
    @CreateDateColumn()
    createdAt:Date;
    @UpdateDateColumn()
    updatedAd:Date;
}