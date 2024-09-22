import React from 'react';
import * as styles from './login-page.module.scss';
import { Header } from '../../../entities/header';
import { Footer } from '../../../entities/footer';

export const LoginPage: React.FC = () => {
    return (
        <div className={styles.page}>
            <Header
                isUserPage={true}
                title='Sign in'
            />

            <div className={styles.singIn}>
                <form action="#" className={styles.form}>
                    <div className={styles.fields}>
                        <div className={styles.field}>
                            <input className={styles.input} type="email" placeholder="Email address" name="user-email" id="user-email" />
                            <label className={styles.visuallyHidden} htmlFor="user-email">Email address</label>
                        </div>
                        <div className={styles.field}>
                            <input className={styles.input} type="password" placeholder="Password" name="user-password" id="user-password" />
                            <label className={styles.visuallyHidden} htmlFor="user-password">Password</label>
                        </div>
                    </div>
                    <div>
                        <button className={styles.signInButton} type="submit">Sign in</button>
                    </div>
                </form>
            </div>

            <Footer
                isMainPage={false}
            />
        </div>
    );
};
