import { Alert } from "@mui/material"
import { forwardRef } from "react"

export const AlertMessage = forwardRef(({ severity, message }, ref) => {
    return (
        <Alert ref={ref} severity={severity}>
            {message}
        </Alert>
    )
})
