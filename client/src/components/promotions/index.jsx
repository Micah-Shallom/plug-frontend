import { Box, Slide } from "@mui/material"
import { MessageText, PromotionsContainer } from "../../styles/promotionStyles"
import { useEffect, useRef, useState } from "react"

const messages = [
    "Find reputable businesses and products",
    "Summer sales starts now, visit any store",
    "Do you have items to sale? Display them on our platform"
]

const Promotion = () => {
    const containerRef = useRef()
    const [messageIndex, setMessageIndex] = useState(0)
    const [show, setShow] = useState(true)

    useEffect(() => {
        const intervalID = setInterval(() => {
            setMessageIndex(i => (i + 1) % messages.length)

            setShow(true)
    
            setTimeout(() => {
                setShow(false)
            }, 3000);
        }, 4000);


        return () => {
            clearInterval(intervalID)
        }
    }, [])
    return (
        <PromotionsContainer ref={containerRef}>
            <Slide direction={show ? "left" : "right"} in={show} timeout={{enter:500, exit:100}}>
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


