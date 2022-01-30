import { css } from "@emotion/react";
import { VFC } from "react";
import Btn from "../../atoms/Btn";
import customImg01 from "../../../assets/custom/custom-img-01.png";
import { useNavigate } from "react-router";

const CustomTop: VFC = () => {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate("/custombuild/building");
	};

	const wrap = css`
		width: 100vw;
		padding-top: 12vh;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 160px;
	`;

	const cWrap = css`
		width: 90%;
		height: 80%;
		display: flex;
		gap: 5%;
		@media screen and (max-width: 1024px) {
			flex-direction: column;
			align-items: center;
			gap: 0;
			margin-top: 64px;
		}
	`;

	const textWrap = css`
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 50%;
		padding: 0 16px;
		h1 {
			font-size: clamp(32px, 4vw, 72px);
			margin-bottom: 0.8em;
		}
		p {
			font-size: clamp(16px, 2vw, 20px);
			margin-bottom: 2em;
		}
		div {
		}
		@media screen and (max-width: 1024px) {
			width: 90%;
			align-items: center;
			text-align: center;
		}
	`;

	const imgWrap = css`
		width: 50%;
		overflow: hidden;
		img {
			width: 100%;
			scale: 0.8;
			object-position: center;
		}
		@media screen and (max-width: 1024px) {
			margin-top: 80px;
			width: 90%;
		}
	`;
	return (
		<div css={wrap}>
			<div css={cWrap}>
				<div css={textWrap}>
					<h1>MICEカスタムビルドへようこそ</h1>
					<p>
						MICEカスタムビルドでは、あなたがプレイしたいゲームを選び、そのゲームに適切なパーツを自由に選択しあなただけのオリジナルゲーミングPCを作ることができるサービスです
						<br />
						<br />
						あなただけのオリジナルマシーンを作成しましょう
					</p>
					<div>
						<Btn txt="組み立てる" w="144px" h="48px" bgColor="#3165ec" txtColor="#fff" onClick={handleClick} />
					</div>
				</div>
				<div css={imgWrap}>
					<img src={customImg01} alt="" />
				</div>
			</div>
		</div>
	);
};

export default CustomTop;
