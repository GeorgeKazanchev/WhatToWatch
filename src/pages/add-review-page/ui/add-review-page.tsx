import React from 'react';
import * as styles from './add-review-page.module.scss';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../../shared/hooks/redux-typed-hooks';
import { selectFilmById } from '../../../store/reducers/films/films';
import { getRatingStars } from '../helpers/get-rating-stars';
import { Header } from '../../../entities/header';
import { Breadcrumbs } from '../entities/breadcrumbs';
import { UserBlock } from '../../../entities/user-block';

export const AddReviewPage: React.FC = () => {
    const { id } = useParams();
    const filmId = Number(id);

    const film = useAppSelector((state) => selectFilmById(state, filmId));
    if (!film) {
        throw new Error('Film is not found');
    }

    const ratingStars = getRatingStars();

    return (
        <section className={styles.page}>
            <div className={styles.header}>
                <div className={styles.background}>
                    <img src={film.images.backgroundSrc} alt={film.title} />
                </div>

                <h1 className={styles.visuallyHidden}>WTW</h1>

                <Header>
                    <Breadcrumbs
                        film={film}
                    />
                    <UserBlock />
                </Header>

                <div className={styles.poster}>
                    <img src={film.images.posterSrc} alt={film.title} width="218" height="327" />
                </div>
            </div>

            <div className={styles.addReview}>
                <form action="#">
                    <div>
                        <div className={styles.ratingStars}>
                            {ratingStars}
                        </div>
                    </div>

                    <div className={styles.reviewText}>
                        <textarea
                            className={styles.reviewTextarea}
                            name="review-text"
                            id="review-text"
                            placeholder="Review text"
                        ></textarea>

                        <div className={styles.reviewSubmit}>
                            <button className={styles.submitButton} type="submit">Post</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};
