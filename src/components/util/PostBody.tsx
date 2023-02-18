import "zenn-content-css";

type Props = {
  content: string;
};

const PostBody = ({ content }: Props) => {
  return (
    <div className="znc my-4 px-6 py-6 sm:px-20 sm:py-20 mx-5 sm:mx-auto rounded-3xl bg-beige">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default PostBody;
