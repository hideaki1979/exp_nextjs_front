import styles from "./style.module.scss";
import LoginIcon from '@mui/icons-material/Login';
import PasswordIcon from '@mui/icons-material/Password';
import EmailIcon from '@mui/icons-material/Email';
import { useForm } from "react-hook-form";
import { useState } from "react";

const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            name: "",
            email: "",
            password: ""
        }
    });

    const handleOnSubmit = (data) => {
        console.log(JSON.stringify(data, null, 2));
    }

    return (
        <main className={styles.form}>
            <form onSubmit={handleSubmit(handleOnSubmit)}>

                <h3 className={styles.form__title}>アカウントを作成</h3>

                <div className={styles.form__item}>
                    <label htmlFor="name">
                        <EmailIcon sx={{ color: "gray" }} />
                        お名前
                    </label>
                    <input
                        type="text"
                        placeholder="お名前を入力してください"
                        id="name"
                        name="name"
                        {...register("name", {
                            required: "名前は必須です"
                        })}
                    />
                    {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}
                </div>
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
                        {...register("email", {
                            required: 'メールアドレスは必須です',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'メールアドレス形式で入力してください'
                            }
                        })}
                    />
                    {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
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
                        {...register("password", {
                            required: 'パスワードは必須です',
                            minLength: { value: 8, message: 'パスワードは8文字以上入力してください' }
                        })}
                    />
                    {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}
                </div>
                <button type="submit" className={styles.form__btn}>
                    <LoginIcon sx={{ color: "gray" }} />
                    アカウント登録
                </button>
            </form>
        </main>
    )
}

export default Signup
