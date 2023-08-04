import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from "typeorm";
import { User } from "./User";
import { v4 as uuid } from "uuid";

// A tweet can be just a regular tweet, a retweet or a reply and maybe a quote tweet

@Entity("Tweet")
export class Tweet {
  @PrimaryColumn()
  id: string;

  @Column()
  text: string;

  @Column({ type: "text", nullable: true })
  likes: string[];

  @ManyToOne(() => User, (user) => user.tweets)
  user: User;

  @ManyToOne(() => Tweet, (tweet) => tweet.retweets, { nullable: true })
  originalTweet: Tweet;

  @OneToMany(() => Tweet, (tweet) => tweet.originalTweet, { nullable: true })
  retweets: Tweet[];

  @CreateDateColumn()
  createdAt: Date;

  // TODO: Implement replies - replies should be just more tweets

  // this is the replies to the current tweet
  @OneToMany(() => Tweet, (tweet) => tweet.replyToTweet)
  replies: Tweet[];

  // this is what tells me if this tweet is a replie to another one
  @ManyToOne(() => Tweet, (tweet) => tweet.replies, { nullable: true })
  replyToTweet: Tweet;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
