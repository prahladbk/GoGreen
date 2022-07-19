import React from "react";

function Post({ username, time, desc, img, upvotes, downvotes }) {
  return (
    <div className="flex flex-col gap-2 shadow-md p-2 rounded-md mt-5">
      <div className="flex p-1 pb-0">
        <div className="w-12 h-12 bg-gray-300 rounded-full block m-1"></div>
        <div className="grid grid-rows-2 grid-cols-1 p-1">
          <span className="text-xl font-bold">{username}</span>
          <span className="text-sm">{time}</span>
        </div>
      </div>
      <div className="text-sm">{desc}</div>
      <img src={img} className="max-h-48 object-cover w-full rounded-lg" />
      <div className="flex gap-3">
        {upvotes}
        <svg
          className="w-6 h-6 mr-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
        {downvotes}
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
}

export default Post;
