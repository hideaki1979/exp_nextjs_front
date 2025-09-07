import styles from "./style.module.scss";

const Post = ({ content, createdAt, author }) => {
    return (
        <div className={styles.post}>
            <p>{createdAt ? new Date(createdAt).toLocaleString("ja-JP") : "-"}</p>
            <p>{content}</p>
            <p>{author ? author.username : "-"}</p>

            {/* <Link href={link} className={styles.link}>{link}</Link> */}
        </div>
    )
}

export default Post
