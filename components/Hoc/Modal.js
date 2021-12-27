/** @format */

import React from "react";
import { useRecoilState } from "recoil";
import { CheckModalAtom, ModalAtom, TimeModalAtom } from "@/store/recoil";

function HOCMOdal({ children, type, title }) {
	let Atom;
	if (type == "Check") {
		Atom = CheckModalAtom;
	} else if (type == "Leave") {
		Atom = ModalAtom;
	} else if ((type = "time_card")) {
		Atom = TimeModalAtom;
	}
	const [showModal, setShowModal] = useRecoilState(Atom);
	return (
		<div
			className='ShareModalOut'
			onClick={(e) => {
				if (e.target.className == "ShareModalOut") {
					return setShowModal(false);
				}
			}}>
			<div className='ShareModal'>
				<div className='modal-content'>
					<div className='modal-header'>
						<h5 className='modal-title' id='exampleModalCenterTitle'>
							{title}
						</h5>

						<div className='header-content'>
							<button
								className='bg-lightBlue-500  dark-btn active:bg-lightBlue-300 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150'
								type='button'
								onClick={() => setShowModal(false)}>
								Back
							</button>
							<button
								type='button'
								className='btn-close'
								data-bs-dismiss='modal'
								aria-label='Close'
								onClick={() => setShowModal(false)}></button>
						</div>
					</div>
					<div className='modal-body'>{children}</div>
				</div>
			</div>
		</div>
	);
}

export default HOCMOdal;
