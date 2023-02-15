import {
  HomeIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  GiftIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";

const links = [
  {
    title: "Home",
    link: "/",
    icon: <HomeIcon className="h-4 w-4" />,
  },
  {
    title: "About",
    link: "/about",
    icon: <ChatBubbleOvalLeftEllipsisIcon className="h-4 w-4" />,
  },
  {
    title: "Works",
    link: "/works",
    icon: <GiftIcon className="h-4 w-4" />,
  },
  {
    title: "Blog",
    link: "/blog",
    icon: <PencilSquareIcon className="h-4 w-4" />,
  },
];

const Card = () => {
  return (
    <div className="card w-80 bg-base-100 shadow-xl">
      <figure>
        <img src="/rorisu_tasogare.png" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        {/* <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div> */}
      </div>
    </div>
  );
};

export default Card;
