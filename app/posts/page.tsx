import { createClient } from '@/utils/supabase/server';

export default async function Posts() {
  const supabase = await createClient();
  const { data: posts } = await supabase.from("Posts").select();

  return <pre>{JSON.stringify(posts, null, 2)}</pre>
}
