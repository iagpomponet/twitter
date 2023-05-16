import * as express from "express";
import { CreateTweetController } from "../modules/tweet/useCases/createTweet/CreateTweetController";
import { HandleAuth } from "../middleware/auth";
import { GetTweetsController } from "../modules/tweet/useCases/getTweets/GetTweetsController";

const createTweetController = new CreateTweetController();
const getTweetsController = new GetTweetsController();

const router = express.Router();

router.post("/", HandleAuth, createTweetController.handle);

// TODO: Get all tweets - but accepct 2 querie params: userId and includeFollowers
router.get("/", HandleAuth, getTweetsController.handle);

export default router;
