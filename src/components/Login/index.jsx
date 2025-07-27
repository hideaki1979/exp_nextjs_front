import Link from "next/link";
import styles from "./style.module.scss";
import LoginIcon from '@mui/icons-material/Login';
import PasswordIcon from '@mui/icons-material/Password';
import EmailIcon from '@mui/icons-material/Email';



const Login = () => {
    return (
        <div className={styles.form}>
            <h3 className={styles.form__title}>ログイン</h3>

            <div className={styles.form__item}>
                <label htmlFor="">
                    <EmailIcon sx={{color: "gray"}} />
                    メールアドレス
                </label>
                <input type="text" placeholder="メールアドレスを入力してください" />
            </div>
            <div className={styles.form__item}>
                <label htmlFor="">
                    <PasswordIcon sx={{color: "gray"}} />
                    パスワード
                </label>
                <input type="password" placeholder="パスワードを入力してください" />
            </div>
            <button className={styles.form__btn}>
                <LoginIcon sx={{color: "gray"}} />
                ログイン
            </button>
        </div>
    )
}

export default Login