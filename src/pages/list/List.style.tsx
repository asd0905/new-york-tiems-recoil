import styled from "styled-components";

export const SLayout = styled.div`
    background: #F0F1F4;
    padding: 20px 0;
    .newsListBox {
        max-height: calc(100vh - 105px);
        padding: 0 20px;
        overflow-y: auto;
    }
    .newsList {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 10px 20px;
        gap: 8px;
        height: 104px;
        background: #FEFEFE;
        border-radius: 8px;
        position: relative;
        margin-bottom: 8px;
        &:last-child {
            margin-bottom: 0;
        }

        .star {
            position: absolute;
            top: 14.5px;
            right: 24px;
        }
        h3 {
            height: 56px;
            font-family: 'Apple SD Gothic Neo';
            font-style: normal;
            font-weight: 600;
            font-size: 18px;
            line-height: 28px;
            letter-spacing: -0.05em;
            text-transform: uppercase;
            color: #000000;
            padding-right: 25px;
            display: -webkit-box;
            word-wrap: break-word;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            text-overflow: ellipsis;
            overflow: hidden;
        }
        
        .newsInfo {
            display: flex;
            width: 100%;
            span {
                height: 20px;
                font-family: 'Apple SD Gothic Neo';
                font-style: normal;
                font-weight: 400;
                font-size: 13px;
                line-height: 20px;
                letter-spacing: -0.05em;
                color: #000000;
                display: block;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                max-width: 25vw;
                
                &.source {
                    margin-right: 8px;
                }
                &.date {
                    font-family: 'Apple SD Gothic Neo';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 13px;
                    line-height: 20px;
                    letter-spacing: -0.05em;
                    color: #6D6D6D;
                    margin-left: auto;
                }
            }
        }
    }

    .interSectRef {
        height: 80px;
        background-color: #ddd;
    }
`;
