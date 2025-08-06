import { Button } from "@mui/material";
import styles from "./style.module.scss";
import { useForm } from "react-hook-form";

const Timeline = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            content: ""
        }
    });

    const handleOnSubmit = (data) => {
        console.log(JSON.stringify(data, null, 2));
    }

    return (
        <div className={styles.timeline}>
            <form onSubmit={handleSubmit(handleOnSubmit)}>
                <textarea
                    name="content"
                    id="content"
                    placeholder="本文を入力してください"
                    {...register("content", {
                        required: "本文は必須です"
                    })}
                >

                </textarea>
                <Button
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
