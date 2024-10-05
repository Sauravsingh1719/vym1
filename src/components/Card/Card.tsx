import { useEffect, useState } from "react";
import { CardStack } from "../ui/card-stack";
import Loading from "./loading"; // Import your loading component

interface Post {
  _id: string;
  name: string;
  createdAt: string;
  message: string;
}

export function CardStackDemo() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true); // New loading state

  useEffect(() => {
    // Fetch data from your API
    const fetchData = async () => {
      setLoading(true); // Set loading to true before fetching
      try {
        const response = await fetch("/api/get-messages"); // Your API endpoint
        const data = await response.json();
        if (data.success) {
          setPosts(data.data);
        }
      } catch (error) {
        console.error("Failed to fetch posts", error);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchData();
  }, []);

  // If loading, show the loading component
  if (loading) {
    return <Loading />; // Show loading spinner/message
  }

  // If there are no posts, display a message
  if (posts.length === 0) {
    return <p>No posts yet</p>;
  }

  // Map posts to the format expected by CardStack
  const cards = posts.map((post) => ({
    id: post._id, // Keep the string id
    name: post.name,
    designation: `Posted on ${new Date(post.createdAt).toLocaleString()}`,
    content: <p>{post.message}</p>,
  }));

  return (
    <div className="h-[40rem] flex items-center justify-center w-full">
      <CardStack items={cards} />
    </div>
  );
}