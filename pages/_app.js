import '../styles/globals.css'
import "../public/css/default.css";
import "../public/css/fonts.css";
import "../public/css/layout.css";
import "../public/css/magnific-popup.css";
import "../public/css/media-queries.css";
import Head from "next/head";
import Nav from '../components/Nav';
function MyApp({ Component, pageProps }) {
  return (
	  <div>
			<Nav />
	  <Component {...pageProps}>
		<Head>
	  		  <link rel="shortcut icon" href="../public/favicon.ico" />
		</Head>
		</Component>
	  </div>
  )
}

export default MyApp
