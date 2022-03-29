import { useRouter } from "next/router";
import Todo from "../../components/Core/Todo";
import BlogLayout from "../../layout/BlogLayout";
import { getAllPosts } from "../../lib/api";

const Blog = ({ allPosts }) => {
  return (
    <>
      <Todo featureName="Blog" />

      {allPosts.map((post) => (
        <a key={post.name} href={post.href}>
          {post.title} - {post.author.name}
        </a>
      ))}
    </>
  );
};

export default Blog;

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
}
