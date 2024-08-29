import React from "react";
import PropTypes from "prop-types";

import "./index.css";

import Categories from "../Categories";

export default function BlogItemText({ headerFontSize, blog }) {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <p className="date-author-text">
          {blog.author.firstName} {blog.author.lastName}
        </p>
        <div className="dot-divider"></div>
        <p className="date-author-text">{blog.createdAt.substring(0, 10)}</p>
      </div>
      <p
        style={{
          fontSize: headerFontSize,
          fontWeight: "bold",
          textAlign: "left",
        }}
      >
        {blog.title}
      </p>
      <p className="snippet" style={{ fontSize: "16px", textAlign: "left" }}>
        {blog.description.substring(0, 100)}...
      </p>
      <Categories blog={blog} />
    </div>
  );
}

BlogItemText.prototype = {
  headerFontSize: PropTypes.string.isRequired,
  blog: PropTypes.object.isRequired,
};

// import React from "react";
// import PropTypes from "prop-types";

// import "./index.css";

// export default function BlogItemText({ blogPost, headerFontSize }) {
//   return (
//     <div>
//       <div style={{ display: "flex" }}>
//         <p className="date-author-text">
//           {blogPost.author.firstName} {blogPost.author.lastName}
//         </p>
//         <div className="dot-divider"></div>
//         <p className="date-author-text">
//           {blogPost.createdAt.substring(0, 10)}
//         </p>
//       </div>
//       <p
//         style={{
//           fontSize: headerFontSize,
//           fontWeight: "bold",
//           textAlign: "left",
//         }}
//       >
//         {blogPost.title}
//       </p>
//       <p style={{ fontSize: "16px", color: "#667085", textAlign: "left" }}>
//         {blogPost.description.substring(0, 100)}...
//       </p>
//     </div>
//   );
// }

// BlogItemText.propTypes = {
//   blogPost: PropTypes.object.isRequired,
//   headerFontSize: PropTypes.string,
// };