/** @format */

const error = {
	onError: (err, req, res, next) => {
		console.error("err.stack: " + err.stack);
		return res.status(500).json({
			status: false,
			message: "Something Broke!",
			data: null,
		});
	},
};
export default error;
