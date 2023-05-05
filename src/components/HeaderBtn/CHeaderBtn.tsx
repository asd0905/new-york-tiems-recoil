import React, { ReactNode } from "react";
import { SSearchBtn } from "./CHeaderBtn.style";

export default function CHeaderBtn({
	onClick,
	img,
	type,
	className,
}: {
	onClick: () => void;
	type: string;
	img?: ReactNode;
	className?: string;
}) {
	return (
		<SSearchBtn onClick={onClick} className={className}>
			{img}
			{type}
		</SSearchBtn>
	);
}
