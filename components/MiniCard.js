import Image from "next/image"
import Popup from 'reactjs-popup';
import { useState } from "react"

export default function MiniCard({ image, title, Content, onClick }) {

	const [open, setOpen] = useState(false);
	const closeModal = () => setOpen(false);
	const openModal = () => setOpen(true);

	return (
		<div
			className=" w-[150px] border-black align-middle transform transition duration-500 hover:scale-110  text-center rounded-lg bg-black m-[10px]"
			onClick={openModal}
		>

			<Image alt={image} src={image} width={200} height={200} />
			<div className="text-white">
				{title}
			</div>




			<Popup open={open} closeOnDocumentClick onClose={closeModal}>
				<div className="fixed top-0 left-0 flex items-center justify-center w-[100vw] h-[100vh]">
					<div className="w-[70vw] h-[70vh] bg-white rounded-lg shadow-lg overflow-scroll ">
						<a className="relative left-5 top-5 text-[20px]" onClick={closeModal}>
							&times;
						</a>
						<h2 className="text-center"> {title} </h2>
						<div className="flex flex-row flex-wrap justify-evenly px-4 mt-10">
							<div className="flex flex-col items-center  w-[250px] h-full py-[10px]">
								<Content /> 	
							</div>
							<div className="flex flex-col items-center justify-evenly w-[250px] h-full py-[10px]">
								<div className="border-[4px] border-black rounded my-[10px]" >  
									<Image src = {image} alt = {title} width = {600} height = {200}/>
								</div>
								<div className="border-[4px] border-black rounded my-[10px]" >  
									<Image src = {image} alt = {title} width = {600} height = {200}/>
								</div>
								<div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Popup>
		</div>

	)

}
