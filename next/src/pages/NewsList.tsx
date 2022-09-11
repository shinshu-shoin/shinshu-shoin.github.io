import Link from "next/link";
import type { InferGetStaticPropsType, NextPage } from "next";
import { client } from "libs/client";
import type { Blog } from "types/blog";

export const getStaticProps = async () => {
  const blog = await client.get({ endpoint: "blogs" });

  return {
    props: {
      blogs: blog.contents,
    },
  };
};

type Props = {
  blogs: Array<Blog>;
};

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  blogs,
}: Props) => {
  function ArticleList() {
    if (blogs.length === 0) {
      return <div>まだ記事がありません</div>;
    } else {
      return (
        <ul>
          {blogs.map(blog => (
            <li key={blog.id}>
              <Link href={`/blog/${blog.id}`} passHref>
                <div>
                  <a>{blog.title}</a>
                  <p>{blog.category.name}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      );
    }
  }

  return (
    <div>
      <ArticleList />
    </div>
  )
}

export default Home;
