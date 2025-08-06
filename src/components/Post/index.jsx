import styles from "./style.module.scss";
import Link from "next/link";

const Post = ({ name, date, content, link }) => {
    return (
        <div className={styles.post}>
            <p>{name}</p>
            <p>{date}</p>
            <p>{content}</p>

            <Link href={link} className={styles.link}>{link}</Link>
        </div>
    )
}

export default Post
