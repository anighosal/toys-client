import React from "react";

const Blogs = () => {
  return (
    <div className="mt-10 border-spacing-2">
      <h2 className="text-red-500 text2xl font-bold ">
        Q: What is an access token and refresh token? How do they work and where
        should we store them on the client-side?
      </h2>
      <p className="text-blue-400 text-lg font-semibold">
        Ans: 1.Token which is used to give users access to information and
        resources once their credentials are validated is called access token.
        token which allows the user to get a new access token without needing to
        log in again refresh token. A refresh token simplifies the process of
        getting a new access token. The authentication server issues an access
        token when a user attempts to access a resource for the first time or
        after a previous access token has expired. When a current access token
        expires, a valid refresh token is used to automatically request a new
        access token from the authorization server. Tokens can be stored in
        local storage or browser memory.
      </p>{" "}
      <br />
      <h2 className="text-red-500 text2xl font-bold "></h2>
      <p className="text-blue-400 text-lg font-semibold"></p>
      <br />
      <h2 className="text-red-500 text2xl font-bold "></h2>
      <p className="text-blue-400 text-lg font-semibold"></p>
      <br />
      <h2 className="text-red-500 text2xl font-bold "></h2>
      <p className="text-blue-400 text-lg font-semibold"></p>
    </div>
  );
};

export default Blogs;
