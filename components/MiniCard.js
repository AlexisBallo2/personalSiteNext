import Image from "next/image"
import Popup from 'reactjs-popup';
import { useState } from "react"
import Link from "next/link";

export default function MiniCard({ headerImage, imageList, title, Content, Blurb, url, onClick }) {

	const [open, setOpen] = useState(false);
	const closeModal = () => setOpen(false);
	const openModal = () => setOpen(true);

	const images = imageList.map((image, i) => {
		return (
			<div key={i} className=" border-[1px] w-[300px] border-black rounded " >
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
					<div className=" relative w-[90vw] max-w-[800px] my-auto bg-white rounded-lg shadow-[rgba(0,0,0,0.56)_0px_22px_70px_4px] overflow-scroll p-5 ">
						<a className="absolute cursor-pointer right-8 top-5 text-[40px] text-black " onClick={closeModal}>
							&times;
						</a>
						<div className="w-full h-full flex-col justify-center items-center mt-10 mb-20 ">
							<h1 className=" text-center h-[50px] mb-10">
								{title}
							</h1>
							<div className=" flex flex-col md:flex-row  text-black ">
								<div className=" flex flex-col justify-start items-center ml-10 md:w-[40%] ">
									<Content />
								</div>
								<div className=" flex flex-col justify-start gap-5 items-center md:w-[50%] ">
									{images}
								</div>
							</div>

						</div>
						{/* <h2 className="text-center"> {title} </h2>
						<div className="flex flex-row flex-wrap justify-evenly px-4 mt-10">
							<div className="flex flex-col items-center w-[80%] h-full py-[10px]">
								<Content />
							</div>
							<div className="flex flex-col items-center justify-evenly w-[250px] h-full py-[10px]">
							</div>
						</div>
						<div className = "flex flex-row flex-wrap justify-center gap-3 ">
								{images}
						</div>
						<div className="ml-auto mr-auto my-10 w-[80px] bg-blue-900 rounded text-center">
							<Link href = {url} target = "_blank" >
								<span className = "text-white px-1" >
							Visit Site
									</span>
								</Link>
						</div> */}
					</div>
				</div>
			</Popup>
		</div>

	)

}
