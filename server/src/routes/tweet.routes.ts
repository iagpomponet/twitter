import * as express from "express";
import { CreateTweetController } from "../modules/tweet/useCases/createTweet/CreateTweetController";
import { HandleAuth } from "../middleware/auth";
import { GetTweetsController } from "../modules/tweet/useCases/getTweets/GetTweetsController";
import { LikeTweetController } from "../modules/tweet/useCases/likeTweet/LikeTweetController";

const createTweetController = new CreateTweetController();
const getTweetsController = new GetTweetsController();
const likeTweetController = new LikeTweetController();

const router = express.Router();

router.post("/", HandleAuth, createTweetController.handle);

// TODO: Get all tweets - but accepct 2 querie params: userId and includeFollowers
router.get("/", HandleAuth, getTweetsController.handle);

// Like tweet
router.post("/:tweet_id/likes", HandleAuth, likeTweetController.handle);

export default router;
