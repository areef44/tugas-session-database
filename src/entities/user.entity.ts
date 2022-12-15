import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    // name: 'user_id',
  })
  id: number;

  @Column({
    nullable: false,
    default: '',
    length:30,
  })
  username: string;

  @Column({
    // name: 'email_address',
    nullable: false,
    default: '',
    unique: true
  })
  email: string;

  @Column({
    nullable: false,
    default: '',
  })
  password: string;
}