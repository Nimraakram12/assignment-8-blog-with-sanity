"use client";
import posts from "../../../post-details/data.json";
import Image from "next/image";
import Link from "next/link";
import { MoveRight, CalendarDays } from "lucide-react";
import { motion } from "framer-motion";

export default function PopularArticles() {
  return (
    <section className="pt-16 bg-gray-200"  id="popular-articles">
      <div className="max-w-screen-xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          exit={{ opacity: 0, y: -20 }}
          className="text-4xl font-semibold mb-10 ml-8"
        >
          Popular Articles
        </motion.h1>

        <div className="flex gap-x-8 gap-y-12 flex-col xl:flex-row px-7">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 1 }}
            transition={{ duration: 1, delay: 0.1 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex flex-col xl:max-w-xl"
          >
            {posts.slice(0, 1).map((post, index) => (
              <Link href={`/blog/${post.id}`} key={index} className="">
                <Image
                  src={post.src}
                  alt="Blog-1"
                  height={300}
                  width={400}
                  loading="lazy"
                  className="w-full h-60 object-cover rounded-md"
                />
                <p className="my-4 text-slate-500">
                  <span>October</span> <span>23, 2024</span>
                </p>
                <motion.h1
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="text-3xl font-semibold mb-4"
                >
                  {post.tittle}
                </motion.h1>
                <p>{post.content}</p>
              </Link>
            ))}
          </motion.div>

          <div className="flex flex-col sm:gap-4 gap-12">
            {posts.slice(1, 4).map((post, index) => (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                exit={{ opacity: 0, y: 20 }}
                className="flex sm:flex-row items-center sm:items-start flex-col gap-3"
                key={index}
              >
                <Image
                  src={post.src}
                  alt={post.tittle}
                  height={150}
                  width={250}
                  loading="lazy"
                  className="w-60 h-40 object-cover rounded-md cursor-pointer"
                />
                <div className="flex flex-col text-center sm:text-start items-center sm:items-start">
                  <div className="mb-4 flex gap-2">
                    <CalendarDays className="w-5" />
                    <span className="font-light">11/3/24</span>
                  </div>
                  <h1 className="text-2xl font-semibold">{post.tittle}</h1>
                  <Link
                    href={`/blog/${post.id}`}
                    className="flex items-center gap-x-1 cursor-pointer"
                  >
                    <p className="mt-4 text-blue-500 hover:text-blue-700 text-xl">
                      Read More
                    </p>
                    <MoveRight className="text-blue-500 mt-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}