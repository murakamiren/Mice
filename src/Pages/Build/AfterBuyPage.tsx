import { css } from "@emotion/react";
import { useEffect, VFC } from "react";
import { useNavigate } from "react-router";

const AfterBuyPage: VFC = () => {
	const navigate = useNavigate();

	useEffect(() => {
		setTimeout(() => navigate("/"), 3000);
	}, []);

	const w = css`
		width: 100vw;
		margin: 20vh 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		h1 {
			font-size: clamp(24px, 3vw, 32px);
		}
		.f {
			margin-bottom: 160px;
		}
		.b {
			width: 90%;
			text-align: center;
		}
	`;
	return (
		<div css={w}>
			<h1>ご購入ありがとうございました</h1>
			<p className="f">Thanks for buying!</p>
			<p className="b">このページは３秒後にホームページへとリダイレクトされます</p>
		</div>
	);
};

export default AfterBuyPage;
