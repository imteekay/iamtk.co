export const PostAndDate = ({ date, title, link }) => (
  <li>
    <time className="date">{date}</time>
    <span>
      <a href={link}>{title}</a>
    </span>
  </li>
);
