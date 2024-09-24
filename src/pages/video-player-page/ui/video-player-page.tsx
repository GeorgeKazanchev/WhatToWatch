import React, { useState } from 'react';
import * as styles from './video-player-page.module.scss';

export const VideoPlayerPage: React.FC = () => {
    const [isPlaying] = useState(false);

    const playButton = isPlaying
        ? (
            <button type="button" className={styles.playButton}>
                <svg viewBox="0 0 14 21" width="14" height="21">
                    <use xlinkHref="#pause"></use>
                </svg>
                <span>Pause</span>
            </button>
        )
        : (
            <button type="button" className={styles.playButton}>
                <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
            </button>
        );

    return (
        <div className={styles.page}>
            <video src="#" className={styles.video} poster="img/player-poster.jpg"></video>

            <button type="button" className={styles.exit}>Exit</button>

            <div className={styles.controls}>
                <div className={styles.controlsRow}>
                    <div className={styles.time}>
                        <progress className={styles.progress} value="30" max="100"></progress>
                        <div className={styles.toggler} style={{ left: '30%' }}>Toggler</div>
                    </div>
                    <div className={styles.timeValue}>1:30:29</div>
                </div>

                <div className={styles.controlsRow}>
                    {playButton}

                    <div className={styles.title}>Kiss Kiss Bang Bang</div>

                    <button type="button" className={styles.fullscreenButton}>
                        <svg viewBox="0 0 27 27" width="27" height="27">
                            <use xlinkHref="#full-screen"></use>
                        </svg>
                        <span>Full screen</span>
                    </button>
                </div>
            </div>
        </div>
    );
};
