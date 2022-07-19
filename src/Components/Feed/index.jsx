import React from "react";
import Post from "./Post";

function Feed() {
  return (
    <div className="h-full w-full bg-whte grow p-5 ">
      <header className="flex justify-between">
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clipRule="evenodd"
          />
        </svg>
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
      </header>
      <main>
        {new Array(10).fill(0).map((i) => (
          <Post
            username={"shibu"}
            time="9 MINS AGO"
            desc={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error aperiam architecto doloribus quisquam, aliquam recusandae dolor nostrum velit beatae tempore? Quaerat doloremque alias corporis consequuntur impedit autem pariatur dignissimos amet!"
            }
            img={
              "https://images.unsplash.com/photo-1657318556399-edb27836fa19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80"
            }
            upvotes={20}
            downvotes={30}
          />
        ))}
      </main>
    </div>
  );
}

export default Feed;
