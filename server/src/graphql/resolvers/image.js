import { parse, join } from "path"
import { createWriteStream } from "fs"
import { URL } from "../../config"

export default {
    Query: {
        info: () => "This is Image Uploader",
    },
    Mutation: {
        imageUploader: async (_, { file }) => {
            let { filename, createReadStream } = await file
            let stream = createReadStream()
            //destructure name from filename if you want to add original filename to the uploaded file
            let { ext } = parse(filename)

            let serverFile = join(
                __dirname + `../../uploads/${Date.now()}${ext}`
            )

            let writeStream = await createWriteStream(serverFile)

            await stream.pipe(writeStream)

            const newServerFile = `${URL}/${serverFile.split("uploads\\")[1]}`

            return newServerFile
        },
    },
}
