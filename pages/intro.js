import React, { useState } from "react";
import Popup from "reactjs-popup";


export default function Intro() {

    const [open, setOpen] = useState(true);
    const audioRef = React.createRef();

    const playAudio = () => {
        document.getElementById("audio").play();
    }
    return (
        <div className="mt-[100px]">
            <audio id = "audio" src="warning.mp3" autoPlay></audio>
            <div className="w-full flex justify-center">
            </div>

            {open && <div>
				<div className="fixed top-0 left-0 flex items-center justify-center w-[100vw] h-[100vh]">
					<div className=" relative w-[90vw] max-w-[800px] my-auto bg-white rounded-lg shadow-[rgba(0,0,0,0.56)_0px_22px_70px_4px] overflow-scroll p-5 ">
						<div className=" mx-auto flex-col justify-center items-center mt-10 mb-10 ">
                                <div className=" mx-auto text-[20px] w-[150px] bg-black text-white rounded-md text-center  py-4 px-4" onClick={() => playAudio()}>
                                    Continue
                                </div>
					</div>
					</div>
				</div>
			</div>}
        </div>
    )
}