
import MiniCard from "./MiniCard"
import shhmint from "../public/images/portfolio/shhmint.png"
import middHacks from "../public/images/portfolio/middHacks.png"
import bulletpitch from "../public/images/portfolio/bulletpitch.png"
import textileMapping from "../public/images/portfolio/textileMappingImg.png"
export default function MiniPortfolio() {

	let bpContent = () => {

		return (
			<div>
				<p className="indent-10 m-0">
				I am currently working as the head of technology at bulletpitch. bulletpitch is a newsletter about emerging startups that are distrupting industries and shaping the next generation.
				</p>

				<p className="indent-10 m-0">
				At bulletpitch I have learned how to communicate technical knowledge, work in teams to develop new products, and maintain technical deployements.  
				</p>	
				<p className="indent-10 m-0">
				Used technologies include Next.js, Wordpress, linux, python, html/css/js, google search console, google analytics.  
				</p>	
			</div>
		)
	}

	let shhmintContent = () => {

		return (
			<div>
				<p className="indent-10 m-0">
				 Shhmint was the crossmint 2022 hackathon finisher. Our goal was to allow shopify users to mint NFT's along with their physical goods. This could allow shopify buyers to obtain tokens/NFTs associated with their purchase, potentually increasing proof purchase. Using the shopify  
				</p>

				<p className="indent-10 m-0">
				Used technologies include polaris, postgres, sql, shopify developer tools, digitalocean.  
				</p>	
			</div>
		)
	}

	let middXContent = () => {

		return (
			<div>
				<p className="indent-10 m-0">
					MiddXchange was the winner of the Middlebury 2022 hackathon. We attempted to build a portal for individuals to sell and purchase items in the Middlebury community. We found that it was difficult for individuals to know where to look when attempting to obtain or get rid of items, so we created this took to create a channel of communication.
				</p>

				<p className="indent-10 m-0">
				Used technologies include Next.js, sqlite3, knex, html/css/js
				</p>	
			</div>
		)
	}

	let textileContent = () => {

		return (
			<div>
				<p className="indent-10 m-0">
					This interface dashboard was a project created in "Data Science AcrossDiciplines", my winter term class at Middlebury college. Our group wanted to show where different textiles were being traded, the amount that was being traded, and various details about the textiles.  
				</p>

				<p className="indent-10 m-0">
				Used technologies include R, shiny.
				</p>	
			</div>
		)
	}

	
	return (
		<>
			<div className="flex flex-row flex-wrap">
				<MiniCard image={bulletpitch} title = "bulletpitch" Content={bpContent} />
				<MiniCard image={shhmint} title = "shhmint" Content = {shhmintContent} />
				<MiniCard image={middHacks} title = "MiddXChange" Content = {middXContent} /> 
				<MiniCard image={textileMapping} title="Textile Mapping" Content = {textileContent}/>

			</div>
		</>
	)

}
