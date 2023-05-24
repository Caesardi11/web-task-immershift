import React from 'react';
import { global, detailJob, profil, directionDown } from '../assets';

export default function Sidenav() {
	return (
		<div className="bg-custom-black h-full w-64 p-5 py-7">
			<div className="flex">
				<div className="text-2xl text-white font-bold">SMK LTD.</div>
			</div>
			<div className="sidebar-items mt-7">
				<div className="rounded-xl flex space-x-3 bg-gradient-to-br from-blue-500 to-indigo-800 p-3 items-center">
					<img src={global} alt="Gambar" className=" w-7 h-7" />
					<div className="">
						<div className="text-white">Global</div>
					</div>
				</div>
				<div className="mt-5">
					<p className="text-custom-grey text-opacity-60">Individual Ship</p>
				</div>
				<div className="mt-4">
					<img src={detailJob} alt="detail job" className="w-full" />
				</div>
				<div className="mt-6">
					<div className="rounded-xl flex flex-row justify-between space-x-3 bg-card-sideNav p-4 items-center">
						<img src={profil} alt="Gambar" className=" w-7 h-7" />
						<div className="">
							<div className="text-white">Imam Uddin</div>
						</div>
						<img src={directionDown} alt="direction" className="" />
					</div>
				</div>
				<div className="mt-6">
					<div className="rounded-xl flex flex-row justify-between space-x-3 bg-card-sideNav p-4 items-center">
						<img src={profil} alt="Gambar" className=" w-7 h-7" />
						<div className="">
							<div className="text-white">Niaz Hossain</div>
						</div>
						<img src={directionDown} alt="direction" className="" />
					</div>
				</div>
				<div className="mt-6">
					<div className="rounded-xl flex flex-row justify-between space-x-3 bg-card-sideNav p-4 items-center">
						<img src={profil} alt="Gambar" className=" w-7 h-7" />
						<div className="">
							<div className="text-white">Mortaza</div>
						</div>
						<img src={directionDown} alt="direction" className="" />
					</div>
				</div>
				<div className="mt-6">
					<div className="rounded-xl flex flex-row justify-between space-x-3 bg-card-sideNav p-4 items-center">
						<img src={profil} alt="Gambar" className=" w-7 h-7" />
						<div className="">
							<div className="text-white">F.M. Zukov</div>
						</div>
						<img src={directionDown} alt="direction" className="" />
					</div>
				</div>
			</div>
		</div>
	);
}
