import styles from "./style.module.scss";
import formStyles from "@/components/form.module.scss";
import LoginIcon from '@mui/icons-material/Login';
import PasswordIcon from '@mui/icons-material/Password';
import EmailIcon from '@mui/icons-material/Email';
import { useForm } from "react-hook-form";
import apiClient from "@/lib/apiClient";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { AlertMessage } from "../Alert";
import { Collapse } from "@mui/material";


const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: "",
            password: ""
        }
    });

    const [apiResult, setApiResult] = useState(""); // Alert表示用
    const [isOpen, setIsOpen] = useState(false);

    const router = useRouter(); // next/routerの方はフロントでは動かない

    // 3秒後にアラートを非表示にする
    useEffect(() => {
        if (isOpen && apiResult === "error") {
            const timer = setTimeout(() => {
                setIsOpen(false);
                setApiResult("");
            }, 3000); // 3秒後に非表示

            return () => clearTimeout(timer); // コンポーネントがアンマウントされたらタイマーをクリア
        }
        if (isOpen && apiResult === "success") {
            const timer = setTimeout(() => {
                setIsOpen(false);
                setApiResult("");
            }, 3000); // 3秒後に非表示

            return () => clearTimeout(timer); // コンポーネントがアンマウントされたらタイマーをクリア
        }
    }, [isOpen, apiResult]);

    // ログイン処理
    const handleLogin = async (data) => {
        const { email, password } = data;

        try {
            const response = await apiClient.post("/api/auth/login", {
                email,  // useStateで保持しているか、react-hook-formで保持しているかどちらかになります。
                password
            });
            // jwtトークンをlocalhostに保存（トークンというのは乗車チケットだと思ってください）
            localStorage.setItem("token", response.data.token);
            // ログイン成功後（乗車券が発行されたらページを移動させる）
            router.push('/');
        } catch (error) {
            console.log("ログイン処理失敗：", error);
            setApiResult("error");
            setIsOpen(!isOpen);
        }
    }

    return (
        <main className={styles.form}>
            <form onSubmit={handleSubmit(handleLogin)}>

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
                        {...register("email", {
                            required: 'メールアドレスは必須です',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'メールアドレス形式で入力してください'
                            }
                        })}
                    />
                    {errors.email && <p className={formStyles.form__error}>{errors.email.message}</p>}
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
                    {errors.password && <p className={formStyles.form__error}>{errors.password.message}</p>}
                </div>
                <Collapse in={isOpen && apiResult === "error"} mountOnEnter unmountOnExit>
                    <AlertMessage severity="error" message="ログイン処理でエラーが発生しました" />
                </Collapse>
                <Collapse in={isOpen && apiResult === "success"} mountOnEnter unmountOnExit>
                    <AlertMessage severity="success" message="ログイン処理でエラーが発生しました" />
                </Collapse>
                <button type="submit" className={styles.form__btn}>
                    <LoginIcon sx={{ color: "gray" }} />
                    ログイン
                </button>
            </form>
        </main>
    )
}

export default Login
