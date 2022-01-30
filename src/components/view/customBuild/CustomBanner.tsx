import { css } from "@emotion/react";
import { VFC } from "react";
import apexImg from "../../../assets/custom/custom-banner-img-01.png";
import valImg from "../../../assets/custom/custom-banner-img-02.png";

const CustomBanner: VFC = () => {
	const wrap = css`
		width: 100vw;
		height: 240px;
		background-color: #333;
		margin-bottom: 160px;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 32px 0;
		color: #fff;
		h2 {
			font-size: 24px;
			font-weight: 400;
			margin-bottom: 40px;
		}
		.b-w {
			display: flex;
			gap: 80px;
			@media screen and (max-width: 1024px) {
				gap: 40px;
			}
			& > div {
				img {
					height: 100px;
					fill: #fff;
					@media screen and (max-width: 1024px) {
						height: 50px;
					}
				}
			}
		}
	`;
	return (
		<div css={wrap}>
			<h2>様々なゲームから選択可能</h2>
			<div className="b-w">
				<div>
					<img src={apexImg} alt="" />
				</div>
				<div>
					<img src={valImg} alt="" />
				</div>
			</div>
		</div>
	);
};

export default CustomBanner;
