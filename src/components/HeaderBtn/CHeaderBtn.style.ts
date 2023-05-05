import styled from "styled-components";

export const SSearchBtn = styled.div`
	padding: 0 15px;
	height: 33px;
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	letter-spacing: -0.04em;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	color: #6d6d6d;
	border: 1px solid #6d6d6d;
	border-radius: 15px;
	cursor: pointer;
	svg {
		margin-right: 5px;
	}
	&.active {
		color: #3478f6;
		border-color: #3478f6;
		svg {
			fill: #3478f6;
		}
	}
`;
