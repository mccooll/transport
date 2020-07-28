import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header = () => (
	<header class={style.header}>
		<h1>Transport.ly</h1>
		<nav>
			<Link activeClassName={style.active} href="/">Itineraries</Link>
			<Link activeClassName={style.active} href="/flights">Flights</Link>
			<Link activeClassName={style.active} href="/orders">Orders</Link>
		</nav>
	</header>
);

export default Header;
