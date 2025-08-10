import Link from "next/link";
import styles from "./style.module.scss";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import LogoutIcon from '@mui/icons-material/Logout';


const Header = () => {

    const [isAuth, setIsAuth] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem("token");
        setIsAuth(!!token);
    }, []);

    const logout = () => {
        localStorage.removeItem("token");   // ログイン成功時の乗車券（トークン）を削除する。
        setIsAuth(false);
        router.push('/login');
    }

    return (
        <div className={styles.header}>
            <ul>
                <li>
                    {isAuth ? (
                        <button type="button" className={styles.logoutButton} onClick={logout}  aria-label="ログアウト">
                            <LogoutIcon />
                            ログアウト
                        </button>
                    ) : (
                        <Link href="/login">
                            <AccessibilityIcon />
                            ログイン
                        </Link>

                    )}
                </li>
                <li>
                    <Link href="/signup">
                        <AirplanemodeActiveIcon />
                        登録
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Header
