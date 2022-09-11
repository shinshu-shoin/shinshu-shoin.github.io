import { GetServerSideProps } from 'next';
import type { Blog } from '../../types/blog';
import { client } from '../../libs/client';

type Props = {
  blog: Blog;
}

export default function Blog({ blog }: Props) {
  return(
    <div>
      <h1>{blog.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: blog.content }}></div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const id = ctx.params?.id;
  const idExceptArray = id instanceof Array ? id[0] : id;
  const data = await client.get({
    endpoint: 'blogs',
    contentId: idExceptArray,
  });

  return {
    props: {
      blog: data,
    },
  };
};