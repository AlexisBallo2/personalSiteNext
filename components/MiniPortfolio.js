import MiniCard from "./MiniCard"
import shhmint from "../public/images/portfolio/shhmint.png"
import shhmint2 from "../public/images/portfolio/shhmint2.png"
import middHacks from "../public/images/portfolio/middHacks.png"
import bulletpitch from "../public/images/portfolio/bulletpitch.png"
import bulletpitch2 from "../public/images/portfolio/bulletpitch2.png"
import bulletpitch3 from "../public/images/portfolio/bulletpitch3.png"
import textileMapping from "../public/images/portfolio/textileMappingImg.png"
import textileMapping2 from "../public/images/portfolio/textileMappingImg2.png"
import semantle from "../public/images/portfolio/semantle.png"
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
				 Shhmint was the crossmint 2022 hackathon finisher. Our goal was to allow shopify users to mint NFTs along with their physical goods. This could allow shopify buyers to obtain tokens/NFTs associated with their purchase, potentually increasing proof purchase. Using the shopify  
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
					This interface dashboard was a project created in &quot;Data Science Across Diciplines&quot;, my winter term class at Middlebury college. Our group wanted to show where different textiles were being traded, the amount that was being traded, and various details about the textiles.  
				</p>

				<p className="indent-10 m-0">
				Used technologies include R, shiny.
				</p>	
			</div>
		)
	}
	
	let dlContent = () => {

		return (
			<div>
				<p className="indent-10 m-0">
					As part of Middlebury&lsquo;s winter term class &ldquo;Deep Learning&ldquo;, my group implemented a BERT word embedding model. From our word embedding model, we compiled a matrix of word embeddings and made our own version of the popular &ldquo;semantle&ldquo; word guessing game. The code to the jupyter notebook and web-app is linked from the github repo.
				</p>

				<p className="indent-10 m-0">
				Used technologies include python, TensorFlow, Next.js
				</p>	
			</div>
		)
	}

	
	return (
		<>
			<div className="flex flex-row flex-wrap justify-center">
				<MiniCard 
					imageList={[bulletpitch,bulletpitch2,bulletpitch3]} 
					headerImage = {bulletpitch}
					title = "Bulletpitch" 
					Content={bpContent} 
					url = "https://www.bulletpitch.xyz?utm_source=alexis"
				/>
				<MiniCard 
					imageList = {[shhmint,shhmint2]} 
					headerImage = {shhmint}
					title = "shhmint" 
					Content = {shhmintContent}
					url = "https://www.shhmint.com/" 
				/>
				<MiniCard 
					imageList = {[middHacks]} 
					headerImage = {middHacks}
					title = "MiddXChange" 
					Content = {middXContent} 
					url = "https://github.com/AlexisBallo2/Hackathon2022" 
				/> 
				<MiniCard 
					imageList={[semantle]} 
					headerImage = {semantle}
					title = "BERT deep learning" 
					Content = {dlContent} 
					url = "https://github.com/AlexisBallo2/semantleClone" 
				/> 
				<MiniCard 
					imageList={[textileMapping2, textileMapping]} 
					headerImage = {textileMapping2}
					title="Textile Mapping" 
					Content = {textileContent}
					url = "https://alexisballo.shinyapps.io/finalProject/" 
				/>

			</div>
		</>
	)

}
