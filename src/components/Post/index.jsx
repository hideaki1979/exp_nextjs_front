import styles from "./style.module.scss";

const Post = ({ content, createdAt, author }) => {
    return (
        <div className={styles.post}>
            <p>{new Date(createdAt).toLocaleString()}</p>
            <p>{content}</p>
            <p>{author.username}</p>

            {/* <Link href={link} className={styles.link}>{link}</Link> */}
        </div>
    )
}

export default Post
