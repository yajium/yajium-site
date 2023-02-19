import "zenn-content-css";
import remarkToc from "remark-toc";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import rehypeSlug from "rehype-slug";

type Props = {
  content: string;
};

const PostBody = ({ content }: Props) => {
  return (
    <div className="znc my-4 px-6 py-6 sm:px-20 sm:py-20 mx-5 text-sm sm:text-base sm:mx-auto rounded-3xl bg-beige">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default PostBody;
