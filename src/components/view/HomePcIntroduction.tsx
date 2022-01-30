import { css } from "@emotion/react";
import { VFC } from "react";
import Btn from "../atoms/Btn";
import homeImg03 from "../../assets/home-img-03.png";

const HomePcIntroduction: VFC = () => {
	const wrap = css`
		width: 100vw;
	`;
	const topP = css`
		font-size: clamp(16px, 2vw, 32px);
		font-weight: 700;
		color: #333;
		/* text-shadow: 1px 1px 0 #333, -1px 1px 0 #333, 1px -1px 0 #333, -1px -1px 0 #333; */
		opacity: 0.6;
		padding: 16px 0 0 16px;
		span {
			font-size: clamp(28px, 3vw, 56px);
		}
	`;
	const descItems = css`
		margin: 120px 0 0;
		padding-bottom: 160px;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		color: #333;
		gap: 72px;
		.item-img {
			width: 640px;
			height: 480px;
			img {
				width: 100%;
				height: 100%;
				object-fit: contain;
				filter: drop-shadow(16px 32px 20px rgba(0, 0, 0, 0.1));
				transition: all 0.3s cubic-bezier(0.07, 0.18, 0.14, 1);
				&:hover {
					scale: 1.05;
				}
			}
		}
		.item-txt {
			width: 452px;
			padding-top: 120px;
			h2 {
				font-size: 16px;
				font-weight: 400;
				margin-bottom: 8px;
			}
			p {
				font-size: 72px;
				font-weight: 700;
				margin-bottom: 64px;
			}
			& > div {
				display: flex;
				justify-content: start;
				gap: 24px;
			}
		}
		@media screen and (max-width: 768px) {
			flex-direction: column;
			align-items: center;
			.item-img {
				width: 320px;
				height: 240px;
			}
			.item-txt {
				width: 90vw;
				padding-top: 60px;
				h2,
				p {
					text-align: center;
				}
				& > div {
					justify-content: space-around;
				}
			}
		}
	`;
	return (
		<div css={wrap}>
			<p css={topP}>
				<span>03</span> THE “MICE” SERIES
			</p>
			<div css={descItems}>
				<div className="item-img">
					<img src={homeImg03} alt="" />
				</div>
				<div className="item-txt">
					<h2>究極のオールラウンド</h2>
					<p>MICE A-1</p>
					<div>
						<Btn w="144px" h="48px" txt="購入する" bgColor="#3165ec" txtColor="#fff" />
						<Btn w="144px" h="48px" txt="詳細" bgColor="#333" txtColor="#fff" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomePcIntroduction;
