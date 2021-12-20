/** @format */

import nc from "next-connect";

import request from "@/middlewares/loggers";
import error from "@/helpers/ncOpt.";
import InitDb from "@/helpers/Db";
const handler = nc(error);

handler.use(InitDb);

handler.use(request);

handler.get((req, res) => {
	res.send("hello");
});

export default handler;
