import { blogPosts } from "../blogData";
import BlogPostClient from "./BlogPostClient"

export const dynamic = "force-dynamic"

export default async function BlogDetails({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const [ post ] = blogPosts.filter((post) => post.slug == slug)

    return (
        <BlogPostClient post={post} />
    );
}