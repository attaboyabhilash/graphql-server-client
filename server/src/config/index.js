import { config } from "dotenv"

const { parsed } = config()

export const { DB, MODE, APP_SECRET, APP_REFRESH_SECRET, PORT } = parsed
