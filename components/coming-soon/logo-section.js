import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export default function LogoSection() {
	return (
		<Link href="/">
			{/* <img src="/images/logo/logo-black.svg" alt="" /> */}
			<span style={{color:"black"}}>B2B Ultimate</span>
		</Link>
	);
}
