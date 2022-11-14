interface PostAndDatePropTypes {
  date: string;
  title: string;
  url: string;
}

export const PostAndDate = ({ date, title, url }: PostAndDatePropTypes) => (
  <li>
    <time className="date">{date}</time>
    <span>
      <a href={url}>{title}</a>
    </span>
  </li>
);
