import Link from "next/link";
import { MoveRight } from "lucide-react";
import { Metadata } from "next";
import { Card } from "@/components/ui/card";
import BlogAnimation from "../components/animations/BlogAnimation";
import {client} from "@/sanity/lib/client";
export const metadata: Metadata = {
  title: "AI Sphere | Blog",
};

export default async function Blog() {
  interface dataType{
    post_title: string,
    post_desc: string,
  }
  const postData = async () => {
    const data = await client.fetch(`*[_type == "post"]{
  post_title, post_desc
}`)
    return data

  }

  const receivedData: dataType[] = await postData() 
console.log(receivedData)
  return (
    <>
      <div className="pt-20 w-full bg-slate-100">
        <div className="max-w-screen-xl mx-auto py-10 md:px-2 px-6">
          <h1 className="text-center text-5xl font-semibold">Our Latest Blog</h1>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 cursor-pointer pt-10">
            {receivedData.map((post:dataType, index) => (
              <BlogAnimation key={index}>
                <Card className="hover:scale-105 duration-200 pb-3 rounded-2xl shadow-lg">
                  <p className="m-4 text-slate-500">
                    <span>October</span> <span>23, 2024</span>
                  </p>
                  <h1 className="m-4 text-2xl font-semibold">{post.post_title}</h1>
                  <Link href={`/blog/${post.post_title}`} passHref className="flex items-center gap-1">
                    <p className="ml-4 text-blue-500 hover:text-blue-700 text-xl">{post.post_desc}</p>
                    <MoveRight className="text-blue-500" />
                    
                  </Link>
                </Card>
              </BlogAnimation>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}