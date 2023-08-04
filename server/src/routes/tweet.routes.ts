import * as express from "express";
import { CreateTweetController } from "../modules/tweet/useCases/createTweet/CreateTweetController";
import { HandleAuth } from "../middleware/auth";
import { GetTweetsController } from "../modules/tweet/useCases/getTweets/GetTweetsController";
import { LikeTweetController } from "../modules/tweet/useCases/likeTweet/LikeTweetController";
import { ReplyTweetController } from "../modules/tweet/useCases/replyTweet/ReplyTweetController";
import { GetTweetByIdController } from "../modules/tweet/useCases/getTweetById/GetTweetByIdController";

const createTweetController = new CreateTweetController();
const getTweetsController = new GetTweetsController();
const likeTweetController = new LikeTweetController();
const replyTweetController = new ReplyTweetController();
const getTweetsByIdController = new GetTweetByIdController();

const router = express.Router();

router.post("/", HandleAuth, createTweetController.handle);

// TODO: Get all tweets - but accepct 2 querie params: userId and includeFollowers
router.get("/", HandleAuth, getTweetsController.handle);

//
router.get("/:tweet_id", HandleAuth, getTweetsByIdController.handle);

// Like tweet
router.post("/:tweet_id/likes", HandleAuth, likeTweetController.handle);

// Replie to tweet
router.post("/:tweet_id/reply", HandleAuth, replyTweetController.handle);

export default router;
