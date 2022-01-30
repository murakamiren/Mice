import { css } from "@emotion/react";
import { VFC } from "react";
import Btn from "../atoms/Btn";
import homeImg02 from "../../assets/home-img-02.jpg";

const HomeFirst: VFC = () => {
	const wrap = css`
		width: 100vw;
		background-color: #0f0f0f;
	`;

	const topP = css`
		font-size: clamp(16px, 2vw, 32px);
		font-weight: 700;
		color: #fff;
		/* text-shadow: 1px 1px 0 #333, -1px 1px 0 #333, 1px -1px 0 #333, -1px -1px 0 #333; */
		opacity: 0.6;
		padding: 16px 0 0 16px;
		span {
			font-size: clamp(28px, 3vw, 56px);
		}
	`;

	const ttl = css`
		font-size: clamp(40px, 3vw, 48px);
		margin: 60px 0 120px;
		color: #fff;
		text-align: center;
		@media screen and (max-width: 768px) {
			margin: 30px 0 60px;
		}
	`;

	const wrapCustom = css`
		display: flex;
		justify-content: center;
		flex-direction: row-reverse;
		flex-wrap: wrap;
		gap: 72px;
		color: #fff;
		padding-bottom: 160px;
		.custom-img {
			width: 640px;
			height: 480px;
			overflow: hidden;
			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
				box-shadow: 4px 8px 20px rgba(0, 0, 0, 0.3);
				transition: all 0.3s cubic-bezier(0.07, 0.18, 0.14, 1);
				&:hover {
					scale: 1.05;
				}
			}
		}
		.custom-desc {
			width: 452px;
			padding-top: 64px;
			h3 {
				font-size: clamp(24px, 3vw, 32px);
				font-weight: 700;
				margin-bottom: 24px;
			}
			p {
				font-size: 16px;
				font-weight: 400;
				margin-bottom: 64px;
				span {
					display: block;
					margin-top: 1em;
				}
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
			.custom-img {
				width: 320px;
				height: 240px;
			}
			.custom-desc {
				width: 90vw;
				h3,
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
				<span>02</span> CONPLETED BUILD
			</p>
			<h2 css={ttl}>ー完成されたゲーミングPCで戦う</h2>
			<div css={wrapCustom}>
				<div className="custom-img">
					<img src={homeImg02} alt="" />
				</div>
				<div className="custom-desc">
					<h3>MICEオリジナルビルドPC</h3>
					<p>
						テキストが入るよテキストが入るよテキストが入るよテキストが入るよテキストが入るよテキストが入るよテキストが入るよテキストが入るよテキストが入るよテキストが入るよテキストが入るよテキストが入るよテキストが入るよテキストが入るよテキストが入るよテキストが入るよテキストが入るよテキストが入るよテキストが入るよテキストが入るよテキストが入るよテキストが入るよテキストが入るよ
						<br />
						<span>即戦力のパフォーマンスを体感しよう</span>
					</p>
					<div>
						<Btn w="144px" h="48px" txt="一覧" bgColor="#3165ec" txtColor="#fff" />
						<Btn w="144px" h="48px" txt="詳細" bgColor="#fff" txtColor="#333" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomeFirst;
