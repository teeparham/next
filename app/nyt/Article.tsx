export type ArticleProps = {
  abstract: string;
  byline: string;
  image_url: string;
  title: string;
  url: string;
};

// images are height 293px, width 440px. 3x2
export function Article({
  abstract,
  byline,
  image_url,
  title,
  url,
}: ArticleProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block max-w-80 mr-2 mb-2 rounded overflow-hidden shadow-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 hover:shadow-xl transition-shadow"
    >
      <img className="w-full" src={image_url} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 dark:text-gray-300 text-base">{abstract}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="text-sm text-gray-600 dark:text-gray-400">
          {byline}
        </span>
      </div>
    </a>
  );
  return <div className="m-2">{title}</div>;
}
