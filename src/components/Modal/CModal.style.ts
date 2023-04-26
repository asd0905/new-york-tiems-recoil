import { motion } from "framer-motion";
import styled from "styled-components";

export const SOverlay = styled(motion.div)`
    position: fixed;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.2);
    z-index: 9;
    display: flex;
    justify-content: center;
    align-items: center;

    .modalContainer {
        width: calc(100% - 40px);
        min-height: 60vh;
        background-color: #ffffff;
        padding: 20px;
        border-radius: 16px;

        label {
            h3 {
                font-size: 16px;
                font-weight: 600;
                line-height: 24px;
                letter-spacing: -0.05em;
                color: #000000;
            }
            input {
                font-size: 14px;
                line-height: 24px;
                &:placeholder {
                    color: #C4C4C4;
                }
                width: 100%;
                height: 44px;
                display: flex;
                flex-direction: row;
                align-items: center;
                padding: 10px 20px;
                gap: 181px;
                border: 1px solid #C4C4C4;
                border-radius: 8px;
            }
        }

        .modalBtn {
            width: 100%;
            height: 60px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #ffffff;
            background-color: #3478F6;
            border-radius: 16px;
            font-size: 16px;
            border: 0;
            cursor: pointer;
        }

        .nationBox {
            
        }
    }
`

export const SDateSpan = styled.div`
    font-size: 14px;
    line-height: 24px;
    &:placeholder {
        color: #C4C4C4;
    }
    width: 100%;
    height: 44px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px 20px;
    gap: 181px;
    border: 1px solid #C4C4C4;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    background-color: #ffffff;
    cursor: pointer;
`