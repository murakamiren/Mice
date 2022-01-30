import { css } from "@emotion/react";
import { motion } from "framer-motion";
import React, { VFC } from "react";

type btnProps = {
	txt: string;
	w: string;
	h: string;
	bgColor: string;
	txtColor: string;
	gradient?: string;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Btn: VFC<btnProps> = ({ txt, w, h, bgColor, txtColor, gradient, onClick }) => {
	const btnStyle = css`
		width: ${w};
		height: ${h};
		background-color: ${bgColor};
		background: ${gradient};
		border-radius: 8px;
		box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.2);
		button {
			display: block;
			width: 100%;
			height: 100%;
			color: ${txtColor};
			font-size: 14px;
		}
	`;

	return (
		<motion.div
			css={btnStyle}
			whileHover={{ filter: "brightness(75%)", scale: 1.05 }}
			whileTap={{ filter: "brightness(75%)", scale: 1.05 }}
			transition={{ duration: 0.3, ease: [0.07, 0.18, 0.14, 1] }}
		>
			<button onClick={onClick}>{txt}</button>
		</motion.div>
	);
};

export default Btn;
