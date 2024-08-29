import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./index.css";

import Navbar from "../../components/Navbar";
import Heading from "../../components/Heading";
import BlogList from "../../components/BlogList";
import Footer from "../../components/Footer";
import CategoriesScrollList from "../../components/CategoriesScrollList";
import Loader from "../../components/Loader";
import SuccessToast from "../../components/SuccessToast";
import ErrorToast from "../../components/ErrorToast";
import AddEditBlogModal from "../../components/AddEditBlogModal";
import DeleteBlogModal from "../../components/DeleteBlogModal";

import {
  fetchBlogsByCategoryId,
  resetSuccessAndError,
} from "../../features/blogsSlice";

import { fetchCategories } from "../../features/categoriesSlice";

import useBlogs from "../../hooks/useBlogs";

export default function BlogsPage() {
  const user = JSON.parse(localStorage.getItem("user"));

  const dispatch = useDispatch();
  const { categoryId } = useParams();
  const { onBlogAdd } = useBlogs();

  const {
    isLoading: isBlogsLoading,
    message: blogsMessage,
    isSuccess: isBlogsSuccess,
    isError: isBlogsError,
  } = useSelector((state) => state.blogs);

  const {
    isLoading: isCategoryLoading,
    message: categoryMessage,
    isSuccess: isCategorySuccess,
    isError: isCategoryError,
  } = useSelector((state) => state.categories);

  useEffect(() => {
    async function fetchData() {
      dispatch(fetchBlogsByCategoryId(categoryId));
      dispatch(fetchCategories());
    }
    fetchData();
  }, [categoryId]);

  const AddButton = () => {
    return (
      <button className="btn btn-outline-dark my-4" onClick={onBlogAdd}>
        ADD BLOG
      </button>
    );
  };

  if (isBlogsLoading || isCategoryLoading) {
    return <Loader />;
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <Heading />
        <div className="scroll-menu">
          <CategoriesScrollList categoryId={categoryId} />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p className="page-subtitle">Blog Posts</p>
          {user && user?.token && <AddButton />}
        </div>
        <BlogList />
      </div>
      <Footer />
      <SuccessToast
        show={isBlogsSuccess || isCategorySuccess}
        message={blogsMessage || categoryMessage}
        onClose={() => {
          dispatch(resetSuccessAndError());
        }}
      />
      <ErrorToast
        show={isBlogsError || isCategoryError}
        message={blogsMessage || categoryMessage}
        onClose={() => {
          dispatch(resetSuccessAndError());
        }}
      />
      <AddEditBlogModal />
      <DeleteBlogModal />
    </>
  );
}









// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

// import "./index.css";

// import Navbar from "../../components/Navbar";
// import Heading from "../../components/Heading";
// import BlogList from "../../components/BlogList";
// import Footer from "../../components/Footer";
// import CategoriesScrollList from "../../components/CategoriesScrollList";
// import Loader from "../../components/Loader";
// import SuccessToast from "../../components/SuccessToast";
// import ErrorToast from "../../components/ErrorToast";
// import AddEditBlogModal from "../../components/AddEditBlogModal";
// import DeleteBlogModal from "../../components/DeleteBlogModal";

// import blogsService from "../../services/blogsService";
// import categoriesService from "../../services/categoryService";

// export default function BlogsPage() {
//   const user = JSON.parse(localStorage.getItem("user"));

//   const { categoryId } = useParams();

//   const [loading, setLoading] = useState(false);
//   const [isSuccess, setIsSuccess] = useState(false);
//   const [isError, setIsError] = useState(false);
//   const [message, setMessage] = useState("");

//   const [blogs, setBlogs] = useState([]);
//   const [categories, setCategories] = useState([]);

//   const [addBlog, setAddBlog] = useState(null);
//   const [editBlog, setEditBlog] = useState(null);
//   const [deleteBlog, setDeleteBlog] = useState(null);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         setLoading(true);
//         const blogRes = await blogsService.getBlogsByCategoryId(categoryId);
//         const categoryRes = await categoriesService.getCategories();
//         setBlogs(blogRes.data);
//         setCategories(categoryRes.data);
//         setLoading(false);
//       } catch (error) {
//         setIsError(true);
//         setMessage(error.message);
//         setLoading(false);
//       }
//     }
//     fetchData();
//   }, [categoryId]);

//   const onBlogAdd = (blog) => {
//     setAddBlog({
//       // image: "",
//       title: "",
//       description: "",
//       categories: [],
//       content: [
//         {
//           sectionHeading: "",
//           sectionText: "",
//         },
//       ],
//       authorId: JSON.parse(localStorage.getItem("user"))?._id,
//     });
//   };
//   const onBlogEdit = (blog) => {
//     setEditBlog(blog);
//   };
//   const onBlogDelete = (blog) => {
//     setDeleteBlog(blog);
//   };

//   const createBlog = async (blog) => {
//     try {
//       setLoading(true);
//       const blogRes = await blogsService.createBlog(blog);
//       setBlogs([...blogs, blogRes.data]);
//       setAddBlog(null);
//       setMessage(blogRes.message);
//       setIsSuccess(true);
//       setLoading(false);
//     } catch (error) {
//       setMessage(error.message);
//       setIsError(true);
//       setLoading(false);
//     }
//   };

//   const updateBlog = async (blog) => {
//     try {
//       setLoading(true);
//       const blogRes = await blogsService.updateBlog(blog);
//       const blogIndex = blogs.findIndex((b) => b.id === blog.id);
//       const updatedBlogs = [...blogs];
//       updatedBlogs[blogIndex] = blogRes.data;
//       setBlogs(updatedBlogs);
//       setEditBlog(null);
//       setMessage("Blog updated successfully");
//       setIsSuccess(true);
//       setLoading(false);
//     } catch (error) {
//       setIsError(true);
//       setMessage(error.message);
//       setLoading(false);
//     }
//   };

//   const removeBlog = async (blog) => {
//     try {
//       setLoading(true);
//       await blogsService.deleteBlog(blog.id);
//       const updatedBlogs = blogs.filter((b) => b.id !== blog.id);
//       setBlogs(updatedBlogs);
//       setDeleteBlog(null);
//       setMessage("Blog deleted successfully");
//       setIsSuccess(true);
//       setLoading(false);
//     } catch (error) {
//       setIsError(true);
//       setMessage(error.message);
//       setLoading(false);
//     }
//   };

//   const AddButton = () => {
//     return (
//       <button className="btn btn-outline-dark my-4" onClick={onBlogAdd}>
//         ADD BLOG
//       </button>
//     );
//   };

//   if (loading) {
//     return <Loader />;
//   }

//   return (
//     <>
//       <Navbar />
//       <div className="container">
//         <Heading />
//         <div className="scroll-menu">
//           <CategoriesScrollList
//             categories={categories}
//             categoryId={categoryId}
//           />
//         </div>
//         <div style={{ display: "flex", justifyContent: "space-between" }}>
//           <p className="page-subtitle">Blog Posts</p>
//           {user && user?.token && <AddButton />}
//         </div>
//         <BlogList
//           blogs={blogs}
//           onBlogEdit={onBlogEdit}
//           onBlogDelete={onBlogDelete}
//         />
//       </div>
//       <Footer />
//       <SuccessToast
//         show={isSuccess}
//         message={message}
//         onClose={() => {
//           setIsSuccess(false);
//         }}
//       />
//       <ErrorToast
//         show={isError}
//         message={message}
//         onClose={() => {
//           setIsError(false);
//         }}
//       />
//       <AddEditBlogModal
//         addBlog={addBlog}
//         editBlog={editBlog}
//         categories={categories}
//         createBlog={createBlog}
//         updateBlog={updateBlog}
//         onClose={() => {
//           setAddBlog(null);
//           setEditBlog(null);
//         }}
//       />
//       <DeleteBlogModal
//         deleteBlog={deleteBlog}
//         removeBlog={() => {
//           removeBlog(deleteBlog);
//         }}
//         onClose={() => {
//           setDeleteBlog(null);
//         }}
//       />
//     </>
//   );
// }





// import React, { useState } from "react";
// import Navbar from "../../components/Navbar";
// import Heading from "../../components/Heading";
// import BlogList from "../../components/BlogList";
// import Footer from "../../components/Footer";

// import "./index.css";

// const data = require("../../dummy-data.json");
// const blogs = data.blogPosts.reverse();
// const categories = data.categories;

// export default function BlogsPage() {
//   const [categoryId, setCategoryId] = useState();

//   const setBlog = (blogId) => {
//     console.log("Function Prop executed");
//     console.log(blogId);
//   };

//   const CategoriesList = () => {
//     return categories.map((category, index) => {
//       return categoryId == category.id.toString() ? (
//         <button
//           key={index}
//           onClick={() => setCategoryId(category.id)}
//           style={{ color: "blue" }}
//         >
//           <p key={index}>{category.title}</p>
//         </button>
//       ) : (
//         <button
//           key={index}
//           onClick={() => {
//             console.log(category.id);
//             setCategoryId(category.id);
//           }}
//           style={{ color: "black" }}
//         >
//           <p key={index}>{category.title}</p>
//         </button>
//       );
//     });
//   };
//   return (
//     <>
//       <Navbar />
//       <div className="container">
//         <Heading />
//         <div className="scroll-menu">
//           <CategoriesList />
//         </div>
//         <div style={{ display: "flex", justifyContent: "space-between" }}>
//           <p className="page-subtitle">Blog Posts</p>
//         </div>
//         <BlogList blogs={blogs} setBlog={setBlog} />
//       </div>
//       <Footer />
//     </>
//   );
// }


// import React, { useState } from "react";

// import Navbar from "../../components/Navbar";
// import Heading from "../../components/Heading";
// import BlogList from "../../components/BlogList";
// import Footer from "../../components/Footer";

// import "../../App.css";
// import "./index.css";

// // Importing dummy data
// const data = require("../../dummy-data.json");
// let blogPosts = data.blogPosts;
// const categories = data.categories;

// export default function BlogsPage() {
//   //Initializing our states:
//   const [categoryId, setCategoryId] = useState();
//   const [blogs, setBlogs] = useState([]);

//   const CategoriesList = () => {
//     return categories.map((category, index) => {
//       return categoryId === category.id.toString() ? (
//         <button
//           key={index}
//           onClick={() => setCategoryId(category.id)}
//           style={{ color: "blue" }}
//         >
//           <p key={index}>{category.title}</p>
//         </button>
//       ) : (
//         <button
//           key={index}
//           onClick={() => setCategoryId(category.id)}
//           style={{ color: "black" }}
//         >
//           <p key={index}>{category.title}</p>
//         </button>
//       );
//     });
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="container">
//         <Heading />
//         <div className="scroll-menu">
//           <CategoriesList />
//         </div>
//         <div style={{ display: "flex", justifyContent: "space-between" }}>
//           <p className="page-subtitle">Blog Posts</p>
//         </div>
//         <BlogList blogPosts={blogPosts} />
//       </div>
//       <Footer />
//     </>
//   );
// }

// import React from 'react';

// import Navbar from "../../components/Navbar";
// import Heading from "../../components/Heading";
// import BlogList from "../../components/BlogList";
// import Footer from "../../components/Footer";
// import CategoriesList from '../../components/CategoriesList';

// import "../../App.css";
// import "./index.css";

// //Importing Dummy Data
// const data = require("../../dummy-data.json");
// let blogPosts = data.blogPosts;

// export default function BlogsPage() {
//   return (
//     <>
//       <Navbar />
//       <div className="container">
//         <Heading />
//         <div className="scroll-menu">
//           <CategoriesList />
//         </div>
//         <div style={{ display: "flex", justifyContent: "space-between" }}>
//           <p className="page-subtitle">Blog Posts</p>
//         </div>
//         <BlogList blogPosts={blogPosts} />
//       </div>
//       <Footer />
//       </>
//   );
// }

// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

// import "./index.css";

// import Navbar from "../../components/Navbar";
// import Heading from "../../components/Heading";
// import BlogList from "../../components/BlogList";
// import Footer from "../../components/Footer";
// import CategoriesScrollList from "../../components/CategoriesScrollList";
// import Loader from "../../components/Loader";
// import SuccessToast from "../../components/SuccessToast";
// import ErrorToast from "../../components/ErrorToast";
// import AddEditBlogModal from "../../components/AddEditBlogModal";
// import DeleteBlogModal from "../../components/DeleteBlogModal";

// import blogsService from "../../services/blogsService";
// import categoriesService from "../../services/categoryService";

// export default function BlogsPage() {
//   const { categoryId } = useParams();

//   const [loading, setLoading] = useState(false);
//   const [isSuccess, setIsSuccess] = useState(false);
//   const [isError, setIsError] = useState(false);
//   const [message, setMessage] = useState("");

//   const [blogs, setBlogs] = useState([]);
//   const [categories, setCategories] = useState([]);

//   const [addBlog, setAddBlog] = useState(null);
//   const [editBlog, setEditBlog] = useState(null);
//   const [deleteBlog, setDeleteBlog] = useState(null);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         setLoading(true);
//         const blogRes = await blogsService.getBlogsByCategoryId(categoryId);
//         const categoryRes = await categoriesService.getCategories();
//         setBlogs(blogRes.data);
//         setCategories(categoryRes.data);
//         setLoading(false);
//       } catch (error) {
//         setIsError(true);
//         setMessage(error.message);
//         setLoading(false);
//       }
//     }
//     fetchData();
//   }, [categoryId]);

//   const onBlogAdd = (blog) => {
//     setAddBlog({
//       // image: "",
//       title: "",
//       description: "",
//       categories: [],
//       content: [
//         {
//           sectionHeading: "",
//           sectionText: "",
//         },
//       ],
//       authorId: "",
//     });
//   };
//   const onBlogEdit = (blog) => {
//     setEditBlog(blog);
//   };
//   const onBlogDelete = (blog) => {
//     setDeleteBlog(blog);
//   };

//   const createBlog = async (blog) => {
//     try {
//       setLoading(true);
//       const blogRes = await blogsService.createBlog(blog);
//       setBlogs([...blogs, blogRes.data]);
//       setAddBlog(null);
//       setMessage(blogRes.message);
//       setIsSuccess(true);
//       setLoading(false);
//     } catch (error) {
//       setMessage(error.message);
//       setIsError(true);
//       setLoading(false);
//     }
//   };

//   const updateBlog = async (blog) => {
//     try {
//       setLoading(true);
//       const blogRes = await blogsService.updateBlog(blog);
//       const blogIndex = blogs.findIndex((b) => b.id === blog.id);
//       const updatedBlogs = [...blogs];
//       updatedBlogs[blogIndex] = blogRes.data;
//       setBlogs(updatedBlogs);
//       setEditBlog(null);
//       setMessage("Blog updated successfully");
//       setIsSuccess(true);
//       setLoading(false);
//     } catch (error) {
//       setIsError(true);
//       setMessage(error.message);
//       setLoading(false);
//     }
//   };

//   const removeBlog = async (blog) => {
//     try {
//       setLoading(true);
//       await blogsService.deleteBlog(blog.id);
//       const updatedBlogs = blogs.filter((b) => b.id !== blog.id);
//       setBlogs(updatedBlogs);
//       setDeleteBlog(null);
//       setMessage("Blog deleted successfully");
//       setIsSuccess(true);
//       setLoading(false);
//     } catch (error) {
//       setIsError(true);
//       setMessage(error.message);
//       setLoading(false);
//     }
//   };

//   const AddButton = () => {
//     return (
//       <button className="btn btn-outline-dark my-4" onClick={onBlogAdd}>
//         ADD BLOG
//       </button>
//     );
//   };

//   if (loading) {
//     return <Loader />;
//   }

//   return (
//     <>
//       <Navbar />
//       <div className="container">
//         <Heading />
//         <div className="scroll-menu">
//           <CategoriesScrollList
//             categories={categories}
//             categoryId={categoryId}
//           />
//         </div>
//         <div style={{ display: "flex", justifyContent: "space-between" }}>
//           <p className="page-subtitle">Blog Posts</p>
//           <AddButton />
//         </div>
//         <BlogList
//           blogs={blogs}
//           onBlogEdit={onBlogEdit}
//           onBlogDelete={onBlogDelete}
//         />
//       </div>
//       <Footer />
//       <SuccessToast
//         show={isSuccess}
//         message={message}
//         onClose={() => {
//           setIsSuccess(false);
//         }}
//       />
//       <ErrorToast
//         show={isError}
//         message={message}
//         onClose={() => {
//           setIsError(false);
//         }}
//       />
//       <AddEditBlogModal
//         addBlog={addBlog}
//         editBlog={editBlog}
//         categories={categories}
//         createBlog={createBlog}
//         updateBlog={updateBlog}
//         onClose={() => {
//           setAddBlog(null);
//           setEditBlog(null);
//         }}
//       />
//       <DeleteBlogModal
//         deleteBlog={deleteBlog}
//         removeBlog={() => {
//           removeBlog(deleteBlog);
//         }}
//         onClose={() => {
//           setDeleteBlog(null);
//         }}
//       />
//     </>
//   );
// }