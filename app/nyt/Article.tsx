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
      className="inline-block md:max-w-80 mr-4 mb-4 rounded-xl overflow-hidden 
        shadow-lg bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100
        hover:shadow-xl transition-shadow align-top"
    >
      {/* eslint-disable @next/next/no-img-element */}
      {image_url && <img className="w-full" src={image_url} alt={title} />}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-neutral-700 dark:text-neutral-300 text-base">
          {abstract}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="text-sm text-neutral-600 dark:text-neutral-400">
          {byline}
        </span>
      </div>
    </a>
  );
}
