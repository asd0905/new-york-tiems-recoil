import styled from "styled-components";

export const SFooter = styled.footer`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px 80px;
    height: 85px;
    background: #000000;
    border-radius: 30px;
    position: fixed;
    bottom: 0;
    width: 100vw;
    left: 0;
    & > a {
        display: flex;
        flex-direction: column;
        align-items: center;
        svg, p {
            color: #6D6D6D;
            font-style: normal;
            font-weight: 600;
            font-size: 10px;
            line-height: 12px;
            stroke: #6D6D6D;
            
        }
        p {
            margin-top: 10px;
        }
        .scrapSvg {
            path, rect {
                stroke-width: 2;
            }
        }
        .homeSvg {
            path {
                fill: #6D6D6D;
            }
        }
        &.on {
            svg, p, rect, path {
                color: #ffffff;
                stroke: #ffffff;
            }
            .homeSvg {
                path {
                    fill: #ffffff;
                }
            }
        }
    }
`;