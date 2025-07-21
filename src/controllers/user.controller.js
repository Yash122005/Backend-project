import { asyncHandler } from "../utils/asynkHandler.js";

const registerUser = asyncHandler(async (req, res) => {
    res.status(200).json({
        massage : "YASH GUPTA"
    })
})

export { registerUser };