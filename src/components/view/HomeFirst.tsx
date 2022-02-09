import { css } from "@emotion/react";
import { VFC } from "react";
import Btn from "../atoms/Btn";
import homeImg01 from "../../assets/home-img-01.png";
import { useNavigate } from "react-router";

const HomeSecond: VFC = () => {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate("/custombuild");
	};

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

	const ttl = css`
		font-size: clamp(40px, 3vw, 48px);
		margin: 60px 0 120px;
		color: #333;
		text-align: center;
		@media screen and (max-width: 768px) {
			margin: 30px 0 60px;
		}
	`;

	const wrapCustom = css`
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap: 72px;
		color: #333;
		padding-bottom: 160px;
		.custom-img {
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
				padding-top: 0;
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
				<span>01</span> CUSTOMBUILD
			</p>
			<h2 css={ttl}>ー好きなゲームを、自分のPCで</h2>
			<div css={wrapCustom}>
				<div className="custom-img">
					<img src={homeImg01} alt="" />
				</div>
				<div className="custom-desc">
					<h3>あなたがしたいゲームができるPCを</h3>
					<p>
						MICEでは貴方だけのオリジナルゲーミングPCを作成することができます。まず、貴方がプレイしたいゲームを選択し、パーツ選択に移ります。パーツ選択では、CPUやGPU,ケースからケースファンまで全てカスタマイズ可能です。
						<br />
						<span>さあ、早速あなただけのオリジナルを組み上げよう。</span>
					</p>
					<div>
						<Btn w="144px" h="48px" txt="組み立てる" bgColor="#3165ec" txtColor="#fff" onClick={handleClick} />
						<Btn w="144px" h="48px" txt="詳細" bgColor="#333" txtColor="#fff" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomeSecond;
