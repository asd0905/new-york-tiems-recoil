import styled from "styled-components";

export const SLayout = styled.div`
    padding: 0 20px;
    height: 60px;
    display: flex;
    align-items: center;
    & > div {
        margin-right: 10px;
        &:last-child {
            margin-right: 0;
        }
    }
`