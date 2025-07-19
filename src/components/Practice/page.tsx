import React from "react";

type Post = {
  id: number;
  title: string;
};

const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5", {
    next: { revalidate: 10 }, // ISR: Revalidates every 10 seconds
  });
  return res.json();
};

export default async function Practice() {
  const posts: Post[] = await getPosts();
  const timestamp = new Date().toLocaleTimeString();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">ISR Example in App Router</h1>
      <p className="text-gray-500">Last updated: {timestamp}</p>
      <ul className="mt-4">
        {posts.map((post) => (
          <li key={post.id} className="p-2 border-b">{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
