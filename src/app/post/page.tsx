"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import CurrentDateTime from "../../components/currentDate";
import { CardStackDemo } from "@/components/Card/Card";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import Toast from "@/components/ui/Toast";
import Link from "next/link";


// Validation schema using Zod
const schema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters long"),
  message: z.string().min(20, "Message must be at least 20 characters long").max(500, "Message cannot exceed 500 characters"),
});

const words = [
  { text: "Something" },
  { text: "on" },
  { text: "your" },
  { text: "Mind ?", className: "text-blue-500 dark:text-blue-500" },
];

const Post = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [suggesting, setSuggesting] = useState(false); // State for loading suggest button
  const [toast, setToast] = useState<{ title: string; description?: string } | null>(null);

  const { register, handleSubmit, setValue, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: any) => { 
    setLoading(true);
    try {
      const { name, message } = data; // Destructure specific fields
      const response = await axios.post("/api/post-messages", {
        ...data, // Use the entire data object
        createdAt: new Date().toISOString(),
      });

      if (response.data.success) {
        setToast({
          title: "Success!",
          description: "Your thought has been posted successfully.",
        });
        setTimeout(() => {
          setToast(null);
          router.push("/feed");
        }, 2000);
      }
    } catch (error) {
      setToast({
        title: "Error",
        description: "There was an issue posting your thought. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const onSuggest = async () => {
    setSuggesting(true); // Set suggesting state to true while fetching suggestion
    try {
      const response = await axios.post("/api/suggest-messages");

      if (response.data && response.data.messages) {
        // Fill the message box with the suggested message
        setValue("message", response.data.messages);
        setToast({
          title: "Suggestion Added",
          description: "A message has been suggested.",
        });
      } else {
        setToast({
          title: "No Suggestions",
          description: "No suggested message found.",
        });
      }
    } catch (error) {
      setToast({
        title: "Error",
        description: "Unable to fetch a suggested message. Please try again.",
      });
    } finally {
      setSuggesting(false); // Reset suggesting state to false
    }
  };

  return (
    <div className="h-screen lg:px-40 sm:mx-10 flex flex-col justify-between">
      <div className="flex items-center justify-around pt-10 flex-row ">
        <CurrentDateTime />
        <div className="flex gap-10">
          <Link href="/feed">
            <button className="bg-black text-white px-4 py-2 rounded shadow-lg">Feed</button>
          </Link>
          <Link href="/Admin">
            <button className="bg-black text-white px-4 py-2 rounded shadow-lg">Admin</button>
          </Link>
        </div>
      </div>
      <hr className="mt-4 border-t border-gray-500 px-10" />
      <div className="flex items-center justify-center flex-col lg:mx-40 mt-20 flex-grow">
        <h1 className="text-neutral-900 font-extrabold lg:text-7xl sm:text-4xl md:text-5xl text-center">
          Your words can inspire change.<br /> Start posting now!
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:px-10">
          <div className="flex items-center justify-center flex-col gap-5 w-full">
            <div>
              <TypewriterEffectSmooth words={words} />
            </div>

            {/* Form for Posting Thoughts */}
            <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  {...register("name")}
                  className="shadow-lg border border-gray-400 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-black"
                  placeholder="Enter your name"
                />
                {errors.name && <p className="text-red-500 text-xs italic">{errors.message && (
                        <ul className="text-red-500 text-xs italic">
                          {Object.entries(errors.message).map(([fieldName, error]) => (
                            <li key={fieldName}>{error.message}</li>
                          ))}
                        </ul>
                      )}</p>}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  {...register("message")}
                  className="shadow-lg border border-gray-400 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-black"
                  placeholder="Enter your message"
                />
                {errors.message && <p className="text-red-500 text-xs italic">{errors.message && (
                    <ul className="text-red-500 text-xs italic">
                      {Object.entries(errors.message).map(([fieldName, error]) => (
                        <li key={fieldName}>{error.message}</li>
                      ))}
                    </ul>
                  )}</p>}
              </div>

              <div className="flex items-center justify-between">
                <button className="bg-black text-white px-4 py-2 rounded shadow-lg" type="submit" disabled={loading}>
                  {loading ? "Posting..." : "POST"}
                </button>
                <button
                  type="button"
                  className="bg-black text-white px-4 py-2 rounded shadow-lg"
                  onClick={onSuggest}
                  disabled={suggesting}
                >
                  {suggesting ? "Suggesting..." : "Suggest"}
                </button>
              </div>
            </form>

            {/* Show Toast if available */}
            {toast && (
              <Toast
                title={toast.title}
                description={toast.description}
                onClose={() => setToast(null)}
              />
            )}
          </div>
          <div>
            <CardStackDemo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
