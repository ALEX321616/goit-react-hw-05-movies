import s from './CastList.module.css';
import defaultFoto from '../../components/defaultImages/defaultFoto.jpg';

export default function CastList({ data }) {
  return (
    <>
      <ul>
        {data.map(
          ({ cast_id, original_name, profile_path = `${defaultFoto}` }) => (
            <li className={s.link} key={cast_id}>
              <p>{original_name}</p>
              <div className={s.thumb}>
                <img
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w200/${profile_path}`
                      : `${defaultFoto}`
                  }
                  alt={`${original_name}`}
                />
              </div>
            </li>
          )
        )}
      </ul>
    </>
  );
}
