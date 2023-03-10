type Props = {
  image: string;
  link: string;
  title: string;
  desc: string;
  stack: string[];
};

const Card = (props: Props) => {
  return (
    <a
      href={props.link}
      target="_blank"
      className="card w-auto mb-6 border-2 dark:border-none bg-white shadow-xl"
    >
      <figure className="bg-white">
        <img
          src={props.image}
          alt={props.title}
          width={400}
          height={100}
          className="object-cover h-32 sm:h-48"
        />
      </figure>
      <div className="card-body py-4 sm:py-6 text-gray-500 text-center">
        <h2 className="text-base sm:text-xl font-bold text-darkBlack">
          {props.title}
        </h2>
        <p className="text-xs font-semibold">{props.desc}</p>
        <p className="text-xs mt-2">
          {props.stack.map((s) => (
            <span className="bg-red-400/60 text-white rounded-md mx-1 px-2 py-1">
              {s}
            </span>
          ))}
        </p>
      </div>
    </a>
  );
};

export default Card;
