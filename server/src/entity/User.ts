import {
  Entity,
  Column,
  PrimaryColumn,
  OneToMany,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Tweet } from "./Tweet";

@Entity("User")
export class User {
  @PrimaryColumn()
  id: string;

  @Column()
  fullName: string;

  @Column()
  email: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  createdAt: Date;

  @Column()
  profilePic: string;

  @OneToMany(() => Tweet, (tweet) => tweet.user)
  tweets: Tweet[];

  @ManyToMany(() => User, (user) => user.following)
  @JoinTable()
  following: User[];

  @ManyToMany(() => User, (user) => user.followers)
  followers: User[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
