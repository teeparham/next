export type ArticleProps = {
  title: string;
};

export function Article({ title }: ArticleProps) {
  return <div className="m-2">{title}</div>;
}
