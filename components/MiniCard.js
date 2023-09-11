import Image from "next/image"
import Popup from 'reactjs-popup';
import { useState } from "react"
import Link from "next/link";

export default function MiniCard({ headerImage, imageList, title, Content,Blurb, url, onClick }) {

	const [open, setOpen] = useState(false);
	const closeModal = () => setOpen(false);
	const openModal = () => setOpen(true);

	const images = imageList.map((image, i) => {
		return (
			<div key = {i} className="border-[4px] border-black rounded my-[10px]" >
				<Image src={image} alt={title} width={600} height={200} />
			</div>
		)
	})
		
	return (
		<div
			className=" w-[300px] flex flex-col align-middle transform transition duration-500 hover:scale-110  text-center rounded-lg border-[2px] border-black m-[20px]"
			onClick={openModal}
		>

			<div className="border-b border-black text-[18px] font-bold text-black ">
				{title}
			</div>
			<Image alt={title} src={headerImage} width={400} height={200} />
			<div className="">
				{Blurb}
			</div>




			<Popup open={open} closeOnDocumentClick onClose={closeModal}>
				<div className="fixed top-0 left-0 flex items-center justify-center w-[100vw] h-[100vh]">
					<div className="w-[90vw] max-w-[700px] h-[70vh] bg-white rounded-lg shadow-[0px_35px_60px_-15px_rgba(0,0,0,0.3)] overflow-scroll ">
						<a className="relative cursor-pointer left-5 top-5 text-[20px]" onClick={closeModal}>
							&times;
						</a>
						<h2 className="text-center"> {title} </h2>
						<div className="flex flex-row flex-wrap justify-evenly px-4 mt-10">
							<div className="flex flex-col items-center  w-[350px] h-full py-[10px]">
								<Content />
							</div>
							<div className="flex flex-col items-center justify-evenly w-[250px] h-full py-[10px]">
								{images}
							</div>
						</div>
						<div className="ml-auto mr-auto my-10 w-[60px] bg-blue-900 rounded text-center">
							<Link href = {url} target = "_blank" >
								<span className = "text-white" >
							Visit Site
									</span>
								</Link>
						</div>
					</div>
				</div>
			</Popup>
		</div>

	)

}
