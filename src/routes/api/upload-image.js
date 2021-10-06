// const multer = require("multer")
// const storage = multer.memoryStorage()
// const upload = multer({ storage: storage })

// export async function post(params) {
//   app.post("/api/uploadImage", upload.single("article-image"), async (req, res) => {
//     // console.log("app post image upload")
//     let imagePath = req.file.originalname.replace(/\s/g, "_") + ".webp"
//     await sharp(req.file.buffer)
//       .webp()
//       .toFile(`./static/article_images/${imagePath}`)
//       .then(() => {
//         res.send(JSON.stringify({ imageName: imagePath }))
//       })
//   })
// }
