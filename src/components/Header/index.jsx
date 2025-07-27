import Link from "next/link";
import styles from "./style.module.scss";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";


const Header = () => {
    return (
        <div className={styles.header}>
            <ul>
                <li>
                    <Link href="/login">
                        <AccessibilityIcon />
                        ログイン
                    </Link>
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
