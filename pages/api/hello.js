/** @format */

import nc from "next-connect";

import request from "@/middlewares/loggers";
import error from "@/helpers/ncOpt.";
import InitDb from "@/helpers/Db";
import notifier from "node-notifier";
import cors from "cors";
const handler = nc(error);

handler.use(InitDb);

handler.use(request);

handler.get((req, res) => {
	res.send("hello");
});

export default handler;
