import s from './CardFilms.module.css';
import defaultFoto from '../../components/defaultImages/defaultFoto.jpg';

function CardFilms({ cardFilm }) {
  return (
    <>
      {cardFilm && (
        <>
          <div className={s.container}>
            <div className={s.thumb}>
              <img
                src={
                  cardFilm.poster_path
                    ? `https://image.tmdb.org/t/p/w200/${cardFilm.poster_path}`
                    : `${defaultFoto}`
                }
                alt={`${cardFilm.title}`}
              />
            </div>
            <div className={s.content}>
              <h1>{cardFilm.title}</h1>
              <p className={s.text}>
                User Score : {Math.round(cardFilm.popularity)}
              </p>
              <h2>Overview</h2>
              <p className={s.text}>{cardFilm.overview}</p>
              <h4>Genres</h4>
              <p className={s.text}>
                {cardFilm.genres.map(({ name }) => name).join(' ')}
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default CardFilms;
