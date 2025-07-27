import styles from "./style.module.scss";
import LoginIcon from '@mui/icons-material/Login';
import PasswordIcon from '@mui/icons-material/Password';
import EmailIcon from '@mui/icons-material/Email';



const Login = () => {
    return (
        <main className={styles.form}>
            <h3 className={styles.form__title}>ログイン</h3>

            <div className={styles.form__item}>
                <label htmlFor="email">
                    <EmailIcon sx={{ color: "gray" }} />
                    メールアドレス
                </label>
                <input
                    type="text"
                    placeholder="メールアドレスを入力してください"
                    id="email"
                    name="email"
                />
            </div>
            <div className={styles.form__item}>
                <label htmlFor="password">
                    <PasswordIcon sx={{ color: "gray" }} />
                    パスワード
                </label>
                <input
                    type="password"
                    placeholder="パスワードを入力してください"
                    id="password"
                    name="password"
                />
            </div>
            <button type="submit" className={styles.form__btn}>
                <LoginIcon sx={{ color: "gray" }} />
                ログイン
            </button>
        </main>
    )
}

export default Login
