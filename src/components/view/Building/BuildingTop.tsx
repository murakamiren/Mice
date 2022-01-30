import { css } from "@emotion/react";
import { VFC } from "react";

type btProps = {
	stepCount: number;
};

const BuildingTop: VFC<btProps> = (props) => {
	const wrap = css`
		margin-top: 16vh;
		.step-w {
			display: flex;
			justify-content: center;
			p {
				padding-top: 32px;
				text-align: center;
				font-size: clamp(32px, 4vw, 72px);
				color: #3165ec;
				font-weight: 700;
			}
		}
		.l-w {
			display: flex;
			justify-content: center;
		}
		.line {
			width: 2px;
			margin: 20px 0;
			height: 64px;
			background-color: #3165ec;
		}
	`;

	return (
		<div css={wrap}>
			<div className="step-w">
				<p>STEP {props.stepCount}</p>
			</div>
			<div className="l-w">
				<div className="line"></div>
			</div>
		</div>
	);
};

export default BuildingTop;
