interface PostAndDatePropTypes {
  date: string;
  title: string;
  link: string;
}

export const PostAndDate = ({ date, title, link }: PostAndDatePropTypes) => (
  <li>
    <time className="date">{date}</time>
    <span>
      <a href={link}>{title}</a>
    </span>
  </li>
);
