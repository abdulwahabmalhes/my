/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState } from "react";
import {
	BlogDropdownMenus,
	ContactDropdownMenus,
	DemoDropdownMenus,
	ElementsMegaMenu,
	/* `PagesDropdownMenus` is being used as menu items for the "Service" navigation item in the header.
	It contains the dropdown menu items that will be displayed when the "Service" navigation item is
	hovered or clicked on. */
	PagesDropdownMenus,
} from "../navbar/menu-data";
import NavItem from "../navbar/nav-item";
import Navbar from "../navbar/navbar";
import useScroll from "./../../../hooks/useScroll";
export default function HeaderHomeFive() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const handleCloseMobileMenu = () => {
		setIsMobileMenuOpen(false);
	};
	const scroll = useScroll();
	return (
		<header
			className={`site-header fugu--header-section fugu--header-three ${scroll ? "sticky-menu" : ""}`}
			id="sticky-menu"
		>
			<div className="container-fluid">
				<nav className="navbar site-navbar">
					<div className="brand-logo rt-mr-20">
						<Link href={"/"}>
							{/* <img src="/images/logo/logo-white.svg" alt="" className="light-version-logo" /> */}
							<span style={{color:"white"}}>B2B Ultimate</span>
						</Link>
					</div>
					<div className="menu-block-wrapper">
						<div
							className={`menu-overlay ${isMobileMenuOpen ? "active" : null}`}
							onClick={handleCloseMobileMenu}
						></div>
						<nav className={`menu-block ${isMobileMenuOpen ? "active" : null}`} id="append-menu-header">
							<div className="mobile-menu-head">
								<div className="mobile-menu-close" onClick={handleCloseMobileMenu}>
									&times;
								</div>
							</div>

							<Navbar>
								<NavItem navItemText="Home" />
								<NavItem navItemText="Service" menuItems={PagesDropdownMenus} />
								<NavItem navItemText="About" menuItems={ElementsMegaMenu}  />
								<NavItem navItemText="Blog" menuItems={BlogDropdownMenus} />
								<NavItem navItemText="Contact Us" menuItems={ContactDropdownMenus} />
							</Navbar>
						</nav>
					</div>
					<div className="header-btn header-btn-l1 ms-auto d-none d-xs-inline-flex">
						<a className="fugu--btn fugu--menu-btn3" href="contact.html">
							Get Started
						</a>
					</div>

					<div className="mobile-menu-trigger" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
						<span></span>
					</div>
				</nav>
			</div>
		</header>
	);
}
