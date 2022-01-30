import { css } from "@emotion/react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { motion } from "framer-motion";
import { useEffect, useState, VFC } from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar: VFC = () => {
	const [isShow, setIsShow] = useState(true);
	const [opacitySty, setOpacitySty] = useState(0);
	const [menuOpen, setMenuOpen] = useState(false);
	const [navCover, setNavCover] = useState(false);
	const [isWhite, setIsWhite] = useState(Boolean);
	const [currScroll, setCurrScroll] = useState(window.scrollY);
	const location = useLocation();

	const handleMenu = () => {
		setMenuOpen((pre) => !pre);
		console.log(menuOpen);
	};

	const handleLinkClick = () => {
		setMenuOpen(false);
	};

	useScrollPosition(
		({ prevPos, currPos }) => {
			const visible = currPos.y > prevPos.y;
			setIsShow(visible);
			if (isShow || menuOpen) {
				setOpacitySty(0);
			} else {
				setOpacitySty(-12);
			}
		},
		[isShow]
	);

	useEffect(() => {
		const scrY = () => setCurrScroll(window.scrollY);
		window.addEventListener("scroll", scrY);
		// console.log(currScroll, window.innerHeight);
	}, [currScroll]);

	useEffect(() => {
		if (location.pathname === "/custombuild") {
			setIsWhite(true);
		} else if (location.pathname === "/custombuild/building") {
			setIsWhite(true);
		} else if (location.pathname === "/custombuild/afterbuy") {
			setIsWhite(true);
		} else {
			setIsWhite(false);
		}
	}, [location]);

	const navAnimation = {
		off: {
			opacity: 0,
		},
		on: {
			opacity: 1,
			transition: {
				staggerChildren: 0.3,
				delayChildren: 0.5,
			},
		},
	};

	const navItems = {
		off: {
			opacity: 0,
			y: -100,
		},
		on: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 1,
				ease: [0.07, 0.18, 0.14, 1],
			},
		},
	};

	const navStyle = css`
		display: flex;
		position: fixed;
		top: 0;
		justify-content: center;
		width: 100vw;
		height: 12vh;
		z-index: 10;
		transform: translateY(${opacitySty}vh);
		transition: all 0.7s cubic-bezier(0.07, 0.18, 0.14, 1);
		&::before {
			content: "";
			position: absolute;
			width: 100%;
			height: ${currScroll > window.innerHeight || navCover || menuOpen ? 100 : 0}%;
			z-index: -1;
			overflow: hidden;
			background-color: #fff;
			transition: all 0.5s cubic-bezier(0.07, 0.18, 0.14, 1);
			box-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
		}
		ul {
			list-style: none;
			display: flex;
			width: 70%;
			/* height: 100%; */
			align-items: center;
			justify-content: space-around;
			li {
				font-size: 16px;
				width: 20%;
				text-align: center;
				&:nth-of-type(3) {
					font-size: 32px;
					letter-spacing: 4px;
					font-weight: 700;
				}
				a {
					text-decoration: none;
					color: ${currScroll > window.innerHeight || navCover || menuOpen || isWhite ? "#333" : "#fff"};
					transition: all 0.3s cubic-bezier(0.07, 0.18, 0.14, 1);
					&:hover {
						color: #3165ec;
					}
				}
			}
		}
		.res-wrap {
			display: flex;
			height: 100%;
			align-items: center;
		}
		.res-ttl {
			display: none;
			font-size: 32px;
			font-weight: 700;
			letter-spacing: 4px;
			line-height: 12vh;
			a {
				text-decoration: none;
				color: #fff;
			}
		}
		.burger {
			display: none;
			div {
				width: 25px;
				height: 2px;
				background-color: #fff;
				margin: 5px;
				background-color: ${currScroll > window.innerHeight || navCover || menuOpen || isWhite ? "#333" : "#fff"};
			}
			.line1 {
				transition: all 0.3s cubic-bezier(0.07, 0.18, 0.14, 1);
				transform: rotate(${menuOpen ? -45 : 0}deg) translate(${menuOpen ? -4 : 0}px, ${menuOpen ? 6 : 0}px);
			}
			.line2 {
				transition: all 0.3s cubic-bezier(0.07, 0.18, 0.14, 1);
				opacity: ${menuOpen ? 0 : 1};
			}
			.line3 {
				transition: all 0.3s cubic-bezier(0.07, 0.18, 0.14, 1);
				transform: rotate(${menuOpen ? 45 : 0}deg) translate(${menuOpen ? -4 : 0}px, ${menuOpen ? -6 : 0}px);
			}
		}
		@media screen and (max-width: 1024px) {
			justify-content: center;
			ul {
				position: absolute;
				right: 0;
				top: 12vh;
				height: 92vh;
				flex-direction: column;
				align-items: center;
				width: 100vw;
				font-size: 16px;
				background-color: #fff;
				transform: translateX(${menuOpen ? 0 : 100}vw);
				transition: all 0.5s cubic-bezier(0.07, 0.18, 0.14, 1);
				padding: 0 32px;
				z-index: -10;
				li {
					width: 100%;
					text-align: center;
					&:nth-of-type(3) {
						display: none;
					}
				}
			}
			.res-ttl {
				display: block;
				transition: all 0.3s cubic-bezier(0.07, 0.18, 0.14, 1);
				justify-self: center;
				a {
					color: ${currScroll > window.innerHeight || navCover || menuOpen || isWhite ? "#333" : "#fff"};
					&:hover {
						color: #3165ec;
					}
				}
			}
			.burger {
				display: block;
				position: absolute;
				right: 5%;
			}
		}
	`;

	return (
		<motion.nav css={navStyle} onHoverStart={() => setNavCover(true)} onHoverEnd={() => setNavCover(false)}>
			<motion.ul variants={navAnimation} initial="off" animate="on">
				<motion.li variants={navItems}>
					<Link to="custombuild" onClick={handleLinkClick}>
						カスタムビルドPC
					</Link>
				</motion.li>
				<motion.li variants={navItems}>
					<Link to="builtpc" onClick={handleLinkClick}>
						ビルド済みPC
					</Link>
				</motion.li>
				<motion.li variants={navItems} className="logo">
					<Link to="/" onClick={handleLinkClick}>
						MICE
					</Link>
				</motion.li>
				<motion.li variants={navItems}>
					<Link to="peripherals" onClick={handleLinkClick}>
						周辺機器
					</Link>
				</motion.li>
				<motion.li variants={navItems}>
					<Link to="support" onClick={handleLinkClick}>
						サポート
					</Link>
				</motion.li>
			</motion.ul>
			<div className="res-wrap">
				<p className="res-ttl">
					<Link to="/">MICE</Link>
				</p>
				<div className="burger" onClick={handleMenu}>
					<div className="line1"></div>
					<div className="line2"></div>
					<div className="line3"></div>
				</div>
			</div>
		</motion.nav>
	);
};

export default NavBar;
