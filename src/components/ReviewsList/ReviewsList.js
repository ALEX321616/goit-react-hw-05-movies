import s from './ReviewsList.module.css';

export default function ReviewsList({ data }) {
  return (
    <>
      <ul className={s.list}>
        {data.map(({ author, content, id }) => (
          <li key={id} className={s.link}>
            {author}
            <p className={s.content}>{content}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
