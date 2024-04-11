import { Box, Slide } from "@mui/material"
import { MessageText, PromotionsContainer } from "../../styles/promotionstyles"
import { useState } from "react"

const messages = [
    "Find reputable businesses and products",
    "Summer sales starts now, visit any store",
    "Do you have items to sale? Display them on our platform"
]

const Promotion = () => {
    const [messageIndex, setMessageIndex] = useState(0)
    return (
        <PromotionsContainer>
            <Slide direction="left">
                <Box display={"flex"} justifyContent="center" alignItems={"center"}>
                    <MessageText>
                        {
                            messages[messageIndex]
                        }
                    </MessageText>
                </Box>
            </Slide>
        </PromotionsContainer>
    )
}

export default Promotion


