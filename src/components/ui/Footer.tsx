import { css } from "@emotion/react";
import { VFC } from "react";
import { Link } from "react-router-dom";

const Footer: VFC = () => {
	const scrollTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	const wrap = css`
		width: 100%;
		/* height: 30vh; */
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		gap: 32px;

		padding: 60px 0 60px 8vw;
		background-color: #333;
		a {
			text-decoration: none;
		}
		p {
			font-size: 48px;
			color: #fff;
			letter-spacing: 4px;
			font-weight: 700;
			transition: all 0.3s cubic-bezier(0.07, 0.18, 0.14, 1);
			&:hover {
				color: #3165ec;
			}
		}
		ul {
			display: flex;
			gap: 32px;
			li {
				list-style: none;
				a {
					text-decoration: none;
					color: #fff;
					transition: all 0.3s cubic-bezier(0.07, 0.18, 0.14, 1);
					&:hover {
						color: #3165ec;
					}
				}
			}
		}
		small {
			color: #fff;
		}
		@media screen and (max-width: 768px) {
			align-items: center;
			padding: 60px 0;
			ul {
				flex-direction: column;
				li {
					text-align: center;
				}
			}
		}
	`;
	return (
		<div css={wrap}>
			<Link to="/">
				<p onClick={scrollTop}>MICE</p>
			</Link>
			<nav>
				<ul>
					<li>
						<Link to="custombuild">カスタムビルドPC</Link>
					</li>
					<li>
						<Link to="builtpc">ビルド済みPC</Link>
					</li>
					<li>
						<Link to="peripherals">周辺機器</Link>
					</li>
					<li>
						<Link to="support">サポート</Link>
					</li>
				</ul>
			</nav>
			<small>Copyright © 2022 MICE</small>
		</div>
	);
};

export default Footer;
