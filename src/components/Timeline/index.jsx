import { Button } from "@mui/material";
import styles from "./style.module.scss";
import formStyles from "@/components/form.module.scss";
import { useState } from "react";
import apiClient from "@/lib/apiClient";

const Timeline = ({ setPosts }) => {
    const [content, setContent] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(1111);

        if (!content.trim()) {
            alert("投稿内容を入力してください");
            return;
        }

        try {
            const token = localStorage.getItem("token");
            // tokenをチェックし、ない人は投稿できないようにしているのでここで確認する🤗
            if (!token) {
                alert("ログインが必要です");
                return;
            }
            const response = await apiClient.post(
                "/api/post",
                { content },
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );

            setContent(""); // ✅ 投稿後にフォームをリセット
            alert("投稿が完了しました！");

            // ✅ 投稿後に `posts` の状態を更新
            setPosts((prevPosts) => [response.data, ...prevPosts]);
        } catch (error) {
            console.error("投稿エラー:", error);
            alert("投稿に失敗しました");
        }
    };

    return (
        <div className={styles.timeline}>
            <form onSubmit={handleSubmit}>
                <textarea
                    name="content"
                    id="content"
                    value={content}
                    placeholder="本文を入力してください"
                    onChange={(e) => setContent(e.target.value)}
                >
                </textarea>
                <Button
                    onClick={handleSubmit}
                    size="large"
                    variant="outlined"
                    color="success"
                >
                    送信
                </Button>
            </form>
        </div>
    )
}

export default Timeline
