import express from "express";

import { postComment, deleteComment, updateComment} from "../controllers/Comments.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.patch('/post/:id',auth, postComment);
router.patch('/delete/:id',auth, deleteComment)
router.patch('/update/:id',auth, updateComment)

export default router;