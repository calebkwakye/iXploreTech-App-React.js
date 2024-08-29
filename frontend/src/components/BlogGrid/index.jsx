// import React from "react"
// import "./index.css";

// import BlogItem from "../BlogItem";

// export default function BlogGrid({ blogPosts }) {
//   if (!blogPosts || !blogPosts.length) {
//     return null;
//   }

//   return (
//     <>
//       <div className="blog-grid-container">
//         <div className="item-1">
//           {blogPosts.length > 0 && (
//             <BlogItem
//               imageOrientation={"top"}
//               index={0}
//               blogPost={blogPosts[0]}
//             />
//           )}
//         </div>

//         <div className="right-block">
//           {blogPosts.length > 1 && (
//             <div className="item-2">
//               <BlogItem
//                 imageOrientation={"left"}
//                 index={1}
//                 blogPost={blogPosts[1]}
//               />
//             </div>
//           )}

//           {blogPosts.length > 2 && (
//             <div className="item-3">
//               <BlogItem index={2} blogPost={blogPosts[2]} />
//             </div>
//           )}
//         </div>
//       </div>
//       {blogPosts.length > 3 && (
//         <div className="item-4">
//           <BlogItem index={3} blogPost={blogPosts[3]} />
//         </div>
//       )}
//     </>
//   );
// }

import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

import "./index.css";

import BlogItem from "../BlogItem";

export default function BlogGrid() {
  const { blogs } = useSelector((state) => state.blogs);

  if (!blogs || !blogs.length) {
    return null;
  }

  return (
    <>
      <div className="blog-grid-container">
        <div className="item-1">
          {blogs.length > 0 && (
            <BlogItem imageOrientation={"top"} index={0} blog={blogs[0]} />
          )}
        </div>

        <div className="right-block">
          {blogs.length > 1 && (
            <div className="item-2">
              <BlogItem imageOrientation={"left"} index={1} blog={blogs[1]} />
            </div>
          )}

          {blogs.length > 2 && (
            <div className="item-3">
              <BlogItem index={2} blog={blogs[2]} />
            </div>
          )}
        </div>
      </div>
      {blogs.length > 3 && (
        <div className="item-4">
          <BlogItem index={3} blog={blogs[3]} />
        </div>
      )}
    </>
  );
}

BlogGrid.prototype = {};



// import React from "react";
// import PropTypes from "prop-types";

// import "./index.css";
// import BlogItem from "../BlogItem";

// export default function BlogGrid({ blogs }) {
//   if (!blogs || !blogs.length) {
//     return null;
//   }

//   return (
//     <>
//       <div className="blog-grid-container">
//         <div className="item-1">
//           {blogs.length > 0 && (
//             <BlogItem imageOrientation={"top"} index={0} blog={blogs[0]} />
//           )}
//         </div>

//         <div className="right-block">
//           {blogs.length > 1 && (
//             <div className="item-2">
//               <BlogItem imageOrientation={"left"} index={1} blog={blogs[1]} />
//             </div>
//           )}

//           {blogs.length > 2 && (
//             <div className="item-3">
//               <BlogItem index={2} blog={blogs[2]} />
//             </div>
//           )}
//         </div>
//       </div>
//       {blogs.length > 3 && (
//         <div className="item-4">
//           <BlogItem index={3} blog={blogs[3]} />
//         </div>
//       )}
//     </>
//   );
// }

// BlogGrid.prototype = {
//   blogs: PropTypes.array.isRequired,
// };