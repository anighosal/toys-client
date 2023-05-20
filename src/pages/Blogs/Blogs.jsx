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
      <h2 className="text-red-500 text2xl font-bold ">
        Q: Compare SQL and NoSQL databases?
      </h2>
      <p className="text-blue-400 text-lg font-semibold">
        Ans: .SQL databases are primarily called Relational Databases and NoSQL
        databases are primarily called non-relational databases SQL databases
        are vertically scalable most of the situations. On the other hand NoSQL
        databases are horizontally scalable. SQL databases are table-based but
        NoSQL databases can be key-value pairs, document-based, graph databases,
        or wide-column stores
      </p>
      <br />
      <h2 className="text-red-500 text2xl font-bold ">
        Q: What is express js? What is Nest JS ?
      </h2>
      <p className="text-blue-400 text-lg font-semibold">
        Ans: Express: Express is a very popular framework, and it is used by a
        wide variety of developers to build all sorts of web applications. It is
        easy to learn and use, and it provides a robust set of features for
        building web applications. However, Express is a minimal framework, and
        it does not provide any built-in support for things like dependency
        injection or modules. This can make it difficult to build large and
        complex applications with Express. Nest: Nest is a newer framework, but
        it is quickly gaining popularity. It is built on top of Express, but it
        provides a more robust set of features for building scalable,
        enterprise-grade web applications. Nest supports dependency injection,
        modules, and other features that make it easier to build large and
        complex applications. Additionally, Nest has a growing community of
        developers and a large library of third-party modules. Ultimately, the
        best framework for you will depend on your specific needs and
        requirements. If you are looking for a simple and easy-to-use framework,
        then Express may be a good choice. However, if you are looking for a
        framework that can support large and complex applications, then Nest may
        be a better option.
      </p>
      <br />
      <h2 className="text-red-500 text2xl font-bold ">
        What is MongoDB aggregate and how does it work?
      </h2>
      <p className="text-blue-400 text-lg font-semibold">
        Ans: MongoDB aggregation is a process of transforming and summarizing
        data stored in MongoDB collections. It is a powerful tool that can be
        used to perform a variety of operations on data, such as grouping
        documents together, calculating summary statistics, and performing
        joins. MongoDB aggregation is based on a pipeline of stages. Each stage
        performs an operation on the input documents and passes the output to
        the next stage. The final stage in the pipeline produces the desired
        output.
      </p>
    </div>
  );
};

export default Blogs;
