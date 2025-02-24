import { createClient } from '@/utils/supabase/server';
import { Card, CardHeader, CardBody, CardFooter, Image, Divider } from "@heroui/react";

interface Post {
  guest: string;
  dish: string;
  date: string;
  note: string;
}

export default async function Posts() {
  const supabase = await createClient();
  const { data: posts } = await supabase.from("Posts").select();

  return (
    <div className="w-full mx-auto">
      <h1 className="text-3xl font-bold mb-6">Dinner Posts</h1>
      <div className="grid gap-4 2xl:grid-cols-3 md:grid-cols-2">
        {posts?.map((post: Post) => (
          <Card key={post.date} className="w-full">
            <CardHeader className="flex">
              <div className="flex flex-col">
                <h2 className="text-xl font-semibold">{post.guest}</h2>
                <p className="text-small text-default-500">
                  {new Date(post.date).toLocaleDateString()}
                </p>
                <h3 className="text-lg">{post.dish}</h3>
              </div>
            </CardHeader>
            <CardBody>
              <div className="w-full h-96 bg-gray-200 rounded-xl flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
              </div>
            </CardBody>
            <CardFooter>
              <p className="w-full text-default-600 p-4 bg-default-100 rounded-xl"><b>Note:</b><br />{post.note}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
