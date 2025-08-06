import Link from "next/link";
import styles from "./style.module.scss";

const NotFound = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>404エラー</h1>
                <h2 className={styles.subtitle}>該当するページが見つかりません</h2>
                <p className={styles.description}>
                    お探しのページが存在しないか、移動または削除された可能性があります。
                </p>
                <Link href='/' className={styles.link}>ホームに戻る</Link>
            </div>
        </div>
    )
}

export default NotFound