// import React from "react";

// import BlogGrid from "../../components/BlogGrid";
// import CategoriesList from "../../components/CategoriesList";
// import Footer from "../../components/Footer";
// import Heading from "../../components/Heading";
// import Navbar from "../../components/Navbar";
// import SubHeading from "../../components/Subheading";

// const data = require("../../dummy-data.json");
// const blogs = data.blogPosts.reverse();
// const categories = data.categories;

// export default function HomePage() {
//   return (
//     <>
//       <Navbar />
//       <div className="container">
//         <Heading />
//         <SubHeading subHeading={"Recent blogs"} />
//         <BlogGrid
//           blogs={blogs}
//           setBlog={(blogID) => {
//             console.log("Selected Blog Clicked:", blogID);
//           }}
//         />
//         <SubHeading subHeading={"Categories"} />
//         <CategoriesList categories={categories} />
//         <Footer />
//       </div>
//     </>
//   );
// }


import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs, reset as resetBlog } from "../../features/blogsSlice";
import {
  fetchCategories,
  reset as resetCategory,
} from "../../features/categoriesSlice";

import "../../App.css";

import Heading from "../../components/Heading";
import Navbar from "../../components/Navbar";
import BlogGrid from "../../components/BlogGrid";
import Footer from "../../components/Footer";
import Subheading from "../../components/Subheading";
import CategoriesList from "../../components/CategoriesList";
import SuccessToast from "../../components/SuccessToast";
import ErrorToast from "../../components/ErrorToast";
import Loader from "../../components/Loader";

export default function HomePage() {
  const dispatch = useDispatch();

  const {
    isError: isBlogsError,
    isSuccess: isBlogsSuccess,
    isLoading: isLoadingBlogs,
    message: blogsMessage,
  } = useSelector((state) => state.blogs);

  const {
    isError: isCategoriesError,
    isSuccess: isCategoriesSuccess,
    isLoading: isLoadingCategories,
    message: categoriesMessage,
  } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchBlogs());
    return () => {
      dispatch(resetBlog());
      dispatch(resetCategory());
    };
  }, [dispatch]);

  if (isLoadingCategories || isLoadingBlogs) {
    return <Loader />;
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <Heading />
        <Subheading subHeading={"Recent Blog Posts"} />
        <BlogGrid />
        <Subheading subHeading={"Categories"} />
        <CategoriesList />
        <Footer />
      </div>
      <SuccessToast
        show={isBlogsSuccess || isCategoriesSuccess}
        message={blogsMessage || categoriesMessage}
        onClose={() => {
          dispatch(resetBlog());
          dispatch(resetCategory());
        }}
      />
      <ErrorToast
        show={isBlogsError || isCategoriesError}
        message={blogsMessage || categoriesMessage}
        onClose={() => {
          dispatch(resetBlog());
          dispatch(resetCategory());
        }}
      />
    </>
  );
}

// import React, { useEffect, useState } from "react";

// import BlogGrid from "../../components/BlogGrid";
// import CategoriesList from "../../components/CategoriesList";
// import Footer from "../../components/Footer";
// import Heading from "../../components/Heading";
// import Navbar from "../../components/Navbar";
// import Subheading from "../../components/Subheading";
// import SuccessToast from "../../components/SuccessToast";
// import ErrorToast from "../../components/ErrorToast";
// import Loader from "../../components/Loader";

// import blogsService from "../../services/blogsService";
// import categoriesService from "../../services/categoryService";

// export default function HomePage() {
//   const [loading, setLoading] = useState();
//   const [isSuccess, setIsSuccess] = useState(false);
//   const [isError, setIsError] = useState(false);
//   const [message, setMessage] = useState("");

//   const [blogs, setBlogs] = useState([]);
//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     const fetchBlogs = async () => {
//       try {
//         setLoading(true);
//         const blogsRes = await blogsService.getBlogs();
//         const categoriesRes = await categoriesService.getCategories();
//         setBlogs(blogsRes.data);
//         setCategories(categoriesRes.data);
//         setLoading(false);
//       } catch (error) {
//         setIsError(true);
//         setMessage(error.message);
//         setLoading(false);
//       }
//     };
//     fetchBlogs();
//   }, []);

//   console.log('blogs is: ', blogs)

//   if (loading) {
//     return <Loader />;
//   }
//   return (
//     <>
//       <Navbar />
//       <div className="container">
//         <Heading />
//         <Subheading subHeading={"Recent blogs"} />
//         {/* <BlogGrid blogs={blogs} /> */}
//         <Subheading subHeading={"Categories"} />
//         <CategoriesList categories={categories} />
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
//     </>
//   );
// }


