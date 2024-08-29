const express = require("express");
const blogsController = require("../controllers/blogController");
const { protect } = require("../middleware/authMiddleware");
const { upload } = require("../middleware/multer");

const router = express.Router();

router.post("/", protect, upload.single("image"), (req, res) => {
  blogsController.createBlog(req, res);
});

router.get("/", (req, res) => {
  blogsController.getBlogs(req, res);
});

router.get("/:id", (req, res) => {
  blogsController.getBlogById(req, res);
});

router.get("/category/:id", (req, res) => {
  blogsController.getBlogByCategoryId(req, res);
});

router.get("/author/:id", (req, res) => {
  blogsController.getBlogByAuthorId(req, res);
});

router.put("/:id", protect, (req, res) => {
  blogsController.updateBlogById(req, res);
});

router.delete("/:id", protect, (req, res) => {
  blogsController.deleteBlogById(req, res);
});

module.exports = router;





// const express = require("express");
// const blogsController = require("../controllers/blogController");
// const { protect } = require("../middleware/authMiddleware");

// const router = express.Router();

// router.post("/", protect, (req, res) => {
//   blogsController.createBlog(req, res);
// });

// router.get("/", (req, res) => {
//   blogsController.getBlogs(req, res);
// });

// router.get("/:id", (req, res) => {
//   blogsController.getBlogById(req, res);
// });

// router.get("/category/:id", (req, res) => {
//   blogsController.getBlogByCategoryId(req, res);
// });

// router.get("/author/:id", (req, res) => {
//   blogsController.getBlogByAuthorId(req, res);
// });

// router.put("/:id", protect, (req, res) => {
//   blogsController.updateBlogById(req, res);
// });

// router.delete("/:id", protect, (req, res) => {
//   blogsController.deleteBlogById(req, res);
// });

// module.exports = router;






// const express = require("express");
// const blogsController = require("../controllers/blogController");

// const router = express.Router();

// router.post("/", (req, res) => {
//   blogsController.createBlog(req, res);
// });

// router.get("/", (req, res) => {
//   blogsController.getBlogs(req, res);
// });

// router.get("/:id", (req, res) => {
//   blogsController.getBlogById(req, res);
// });

// router.get("/category/:id", (req, res) => {
//   blogsController.getBlogByCategoryId(req, res);
// });

// router.get("/author/:id", (req, res) => {
//   blogsController.getBlogByCategoryId(req, res);
// });

// router.put("/:id", (req, res) => {
//   blogsController.updateBlogById(req, res);
// });

// router.delete(
//   "/:id",
//   (req, res, next) => {
//     // TODO:
//     // Make sure the the user has the right header params to be able to execute this protected route
//     //if not good
//     // res.status(401).json({message:"User unAuthorized"})
//     //if al is good
//     //next()
//   },
//   (req, res) => {
//     blogsController.deleteBlogById(req, res);
//   }
// );

// module.exports = router;