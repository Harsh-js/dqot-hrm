/** @format */

import InitDb from "@/helpers/Db";
import nc from "next-connect";
import { logger } from "@/configs/Log";
import request from "@/middlewares/loggers";
import error from "@/helpers/ncOpt.";

const handler = nc(error);

handler.use(InitDb);

handler.use(request);

handler.get((req, res) => {
	res.send("hello");
});

export default handler;
