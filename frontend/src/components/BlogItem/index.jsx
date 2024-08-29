import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import BlogItemText from "../BlogItemText";
import EditButtons from "../EditButtons";

import "./index.css";

export default function BlogItem({
  index,
  blog,
  imageOrientation,
  onBlogEdit,
  onBlogDelete,
}) {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const navigateToBlog = () => {
    if (!onBlogEdit && !onBlogDelete) navigate("/blog/" + blog.id);
  };

  const EditButtonsContainer = () => {
    return (
      <EditButtons
        onEdit={() => onBlogEdit(blog)}
        onDelete={() => onBlogDelete(blog)}
        onNavigate={() => {
          navigate("/blog/" + blog?.id);
        }}
      />
    );
  };

  if (imageOrientation === "top") {
    return (
      <div key={index} className="card-1" onClick={navigateToBlog}>
        <img src={blog.image} className="card-img-top" alt="..." />
        <div className="card-text-bottom">
          <BlogItemText blog={blog} headerFontSize="20px"></BlogItemText>
          {onBlogEdit && onBlogDelete && user && user.token ? (
            <EditButtonsContainer />
          ) : null}
        </div>
      </div>
    );
  } else {
    return (
      <div key={index} className="card-2" onClick={navigateToBlog}>
        <img src={blog.image} className="card-img-left" alt="..." />
        <div className="card-text-right">
          <BlogItemText blog={blog} headerFontSize="20px"></BlogItemText>
          {onBlogEdit && onBlogDelete && user && user.token ? (
            <EditButtonsContainer />
          ) : null}
        </div>
      </div>
    );
  }
}

BlogItem.prototype = {
  index: PropTypes.number.isRequired,
  blog: PropTypes.object.isRequired,
  imageOrientation: PropTypes.string.isRequired,
  onBlogEdit: PropTypes.func,
  onBlogDelete: PropTypes.func,
};




// import React from "react";
// import { useNavigate } from "react-router-dom";
// import PropTypes from "prop-types";

// import BlogItemText from "../BlogItemText";
// import EditButtons from "../EditButtons";

// import "./index.css";

// export default function BlogItem({
//   index,
//   blog,
//   imageOrientation,
//   onBlogEdit,
//   onBlogDelete,
// }) {
//   const user = JSON.parse(localStorage.getItem("user"));
//   const navigate = useNavigate();
//   const navigateToBlog = () => {
//     if (!onBlogEdit && !onBlogDelete) navigate("/blog/" + blog.id);
//   };

//   const EditButtonsContainer = () => {
//     return (
//       <EditButtons
//         onEdit={() => onBlogEdit(blog)}
//         onDelete={() => onBlogDelete(blog)}
//         onNavigate={() => {
//           navigate("/blog/" + blog.id);
//         }}
//       />
//     );
//   };

//   if (imageOrientation === "top") {
//     return (
//       <div key={index} className="card-1" onClick={navigateToBlog}>
//         <img src={blog.image} className="card-img-top" alt="..." />
//         <div className="card-text-bottom">
//           <BlogItemText blog={blog} headerFontSize="20px"></BlogItemText>
//           {onBlogEdit && onBlogDelete && user && user.token ? (
//             <EditButtonsContainer />
//           ) : null}
//         </div>
//       </div>
//     );
//   } else {
//     return (
//       <div key={index} className="card-2" onClick={navigateToBlog}>
//         <img src={blog.image} className="card-img-left" alt="..." />
//         <div className="card-text-right">
//           <BlogItemText blog={blog} headerFontSize="20px"></BlogItemText>
//           {onBlogEdit && onBlogDelete && user && user.token ? (
//             <EditButtonsContainer />
//           ) : null}
//         </div>
//       </div>
//     );
//   }
// }

// BlogItem.prototype = {
//   index: PropTypes.number.isRequired,
//   blog: PropTypes.object.isRequired,
//   imageOrientation: PropTypes.string.isRequired,
//   onBlogEdit: PropTypes.func,
//   onBlogDelete: PropTypes.func,
// };

// import React from "react";
// import { useNavigate } from "react-router-dom";
// import PropTypes from "prop-types";

// import BlogItemText from "../BlogItemText";
// import EditButtons from "../EditButtons";

// import "./index.css";

// export default function BlogItem({
//   index,
//   blog,
//   imageOrientation,
//   onBlogEdit,
//   onBlogDelete,
// }) {
//   const navigate = useNavigate();
//   const navigateToBlog = () => {
//     if (!onBlogEdit && !onBlogDelete) navigate("/blog/" + blog.id);
//   };

//   const EditButtonsContainer = () => {
//     return (
//       <EditButtons
//         onEdit={() => onBlogEdit(blog)}
//         onDelete={() => onBlogDelete(blog)}
//         onNavigate={() => {
//           navigate("/blog/" + blog.id);
//         }}
//       />
//     );
//   };

//   if (imageOrientation === "top") {
//     return (
//       <div key={index} className="card-1" onClick={navigateToBlog}>
//         <img src={blog.image} className="card-img-top" alt="..." />
//         <div className="card-text-bottom">
//           <BlogItemText blog={blog} headerFontSize="20px"></BlogItemText>
//           {onBlogEdit && onBlogDelete ? <EditButtonsContainer /> : null}
//         </div>
//       </div>
//     );
//   } else {
//     return (
//       <div key={index} className="card-2" onClick={navigateToBlog}>
//         <img src={blog.image} className="card-img-left" alt="..." />
//         <div className="card-text-right">
//           <BlogItemText blog={blog} headerFontSize="20px"></BlogItemText>
//           {onBlogEdit && onBlogDelete ? <EditButtonsContainer /> : null}
//         </div>
//       </div>
//     );
//   }
// }

// BlogItem.prototype = {
//   index: PropTypes.number.isRequired,
//   blog: PropTypes.object.isRequired,
//   imageOrientation: PropTypes.string.isRequired,
//   onBlogEdit: PropTypes.func,
//   onBlogDelete: PropTypes.func,
// };


// import React from "react";

// import BlogItemText from "../BlogItemText";

// import "./index.css";

// export default function BlogItem({ index, blog, setBlog, imageOrientation }) {
//   if (imageOrientation === "top") {
//     return (
//       <div
//         key={index}
//         className="card-1"
//         onClick={() => {
//           setBlog(blog.id);
//         }}
//       >
//         <img src={blog.image} className="card-img-top" alt="..." />
//         <div className="card-text-bottom">
//           <BlogItemText blog={blog} headerFontSize="20px"></BlogItemText>
//         </div>
//       </div>
//     );
//   } else {
//     return (
//       <div key={index} className="card-2" onClick={() => setBlog(blog.id)}>
//         <img src={blog.image} className="card-img-left" alt="..." />
//         <div className="card-text-right">
//           <BlogItemText blog={blog} headerFontSize="20px"></BlogItemText>
//         </div>
//       </div>
//     );
//   }
// }



// import React from "react";
// import PropTypes from "prop-types";

// import BlogItemText from "../BlogItemText";

// import "../../App.css";
// import "./index.css";


// export default function BlogItem({
//   index,
//   blogPost,
//   imageOrientation,
// }) {
// if (imageOrientation === "top") {
//     return (
//       <div key={index} className="card-1">
//         <img src={blogPost.image} className="card-img-top" alt="..." />
//         <div className="card-text-bottom">
//           <BlogItemText
//             blogPost={blogPost}
//             headerFontSize="20px"
//           ></BlogItemText>
//         </div>
//       </div>
//     );
//   } else {
//     return (
//       <div key={index} className="card-2">
//         <img src={blogPost.image} className="card-img-left" alt="..." />
//         <div className="card-text-right">
//           <BlogItemText
//             blogPost={blogPost}
//             headerFontSize="20px"
//           ></BlogItemText>
//         </div>
//       </div>
//     );
//   }
// }

// BlogItem.propTypes = {
//   index: PropTypes.number.isRequired,
//   blogPost: PropTypes.object.isRequired,
//   imageOrientation: PropTypes.string,
// };