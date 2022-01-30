import { css } from "@emotion/react";
import { VFC } from "react";

type CardProps = {
	step: number;
	ttl: string;
	desc: string;
};

const StepCard: VFC<CardProps> = (props) => {
	const card = css`
		width: 25%;
		height: 400px;
		display: flex;
		flex-direction: column;
		align-items: center;
		border-radius: 5%;
		/* border: solid 1px rgba(0, 0, 0, 0.4); */
		box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.2);
		padding: 32px 16px 16px;
		.step {
			width: 50px;
			height: 50px;
			text-align: center;
			line-height: 50px;
			border-radius: 50%;
			background-color: #3165ec;
			color: #fff;
			font-size: 24px;
		}
		h3 {
			font-weight: 700;
			font-size: 28px;
		}
		p {
			font-weight: 400;
			font-size: 16px;
			text-align: center;
		}
		.line {
			width: 2px;
			height: 24px;
			margin: 16px 0;
			background-color: #3165ec;
		}
		@media screen and (max-width: 1024px) {
			width: 75%;
		}
		@media screen and (max-width: 768px) {
			width: 100%;
		}
	`;
	return (
		<div css={card}>
			<div className="step">{props.step}</div>
			<div className="line top"></div>
			<h3>{props.ttl}</h3>
			<div className="line"></div>
			<p>{props.desc}</p>
		</div>
	);
};

export default StepCard;
