import { config } from "dotenv"

const { parsed } = config()

export const {
    DB,
    MODE,
    SECRET,
    BASE_URL,
    PORT,
    URL = `${BASE_URL}${PORT}`,
} = parsed
