import { useState } from 'react'
import './Taiwanmap.css'
import { taiwancities } from "data"
import { BlogCard } from "components"


export default function Taiwanmap() {
	const [areaid, setIdarea] = useState<string>()

	function selectArea(props) {
		setIdarea(props)
	}

	return <>
		<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
			viewBox="0 0 1065 1295" xmlSpace="preserve">
			<path id={areaid} onClick={() => selectArea("TWN1156")} className={areaid === "TWN1156" ? "basetwcolor select" : "basetwcolor"} d="M739.8,857.3l1.9,5.8l-3,5l-5.6,2.4l-1.4,3.2l1,4l5.6,3.6l6.3,5.2l2.8,7.6l0.3,2.5l-15.6,3.8
	l-6.4,4.1l-4,3.9l-7.8,5.1l-0.9,5.7l2.3,6l-2.7,4.9l-7.4,4l-0.8,6.9l2.1,9.9l-3,13.2l-0.1,11.2l-4.3,5.9l-8.5,7.2l-2.3,9.8l1.3,8.1
	l3,4.6l6.2,6.4l1.2,4.9l-3.9,0.5l-5.2-0.9l-4.3,0.2l-8.5,6.7l-5.9-5.5l-7.6-8.9l-7.2,1.8l-6.6,5.9l-13.1-6.6l-9.4,4.5l-6.4,7.1
	l-8,2.8l-17.8-1.1l-1.7,4.9l-1.3,7.2l-2.6,7.9l0.5,7l-0.1,9.5l-5.7,21.2l-0.1,7.1l2.7,7.5l0.4,8.2l-8.1,20.5l-2.6-1.1l-1.6,0.1
	l-1.8,0.7h-2.2l-13-10.2l-12.1-17.1l12.7,15.4l-1.5-7.4l-3.8-7.2l-5.3-6l-9-8.4l-3.5-4.2l-1.6-4.8l2.2-4.6l1.1-4.1l-1.5-5.8
	l-2.7-5.6l-4.9-7.7l-4.6-10.2l-1-4.5l0.1-3l1.5-3.6l0.3-2.4l-0.5-1.2l-2.7-2.3l-0.5-2.3l-2.9-4.9l-0.7-2l-2.1-13.6l6.1-3.7l0.2,0.5
	l3.9,8.6l4.8,2.5l15.7,2.2l8.2-0.9l8.4,1l4.2-1.5l3.5-2.6l6.5-2.6l6.3-4.4l2.4-5.5l3-5.2l5.3-7.1l6.1-6.4l6.5-5.4l7.4-7.2l6.5-8.4
	l10-17l10.4-15.1l2.3-6.6l-1-6.7l-1.4-4.5l0.1-5l3.6-3.5l6.9,0.7l5.8-0.6l12.3-7.3l4.5-5.4l7.9-6.1l7.7-4.3l4.2-5l3.6-6.8l8.5-6.8
	l18.5-9.4l4.3,1l5.8,2.2l4.2,5.9L739.8,857.3L739.8,857.3z"/>
			<path id={areaid} onClick={() => selectArea("TWN1158")} className={areaid === "TWN1158" ? "basetwcolor select" : "basetwcolor"} d="M569.4,1166l2,2.9l-0.3,1l-2.7,1.8l-5,4.3l-0.9-3.3l1.4-2.7l2.8-3.6h2L569.4,1166L569.4,1166z
	 M696.1,1022.7l3.5,6.6l0.7,4.9l5.4,1.3l5.5,3.6l-2.8,13.8l-0.1,5.2l-2,5l-9.8,4.1l-4.8,2.7l-7.6,1.6l-5.4,4.5l-2.4,6.6l-3.7,6.6
	l-3,7.5l-0.8,14.7l1.2,6.5l2,6.1l1.1,7.1v5.4l2.6,5l4.6,5.6l-2.5,3.8l-5.3,3.2l-2.1,3.9l-0.5,4.5l2.7,3.9l3.4,1.7l3.1,4.4l-0.1,5.7
	l0.6,6.1l3.2,5.9l4.6,4.9l10.2,4.7l4.5-0.3l0.9,51.6l-1.6,7.3l-2.5,6l-3.4,2.5l-4,3.7l0.1,8.3l1.5,9.2l-0.4,5.9l-4.5-6.8l-6.8-5.2
	l-7.8-3.5l-8-1.9l-0.3,6.6l-2.3,2.3l-3.4-0.8l-3.7-3.1l-0.2-2.4l1.3-7l-5.5-9.2l-0.5-2.4l0.1-2.1l0.4-3.2v-10.8l0.5-3.1l2.5-3.6
	l0.5-3l-19.9-51.6l-1.6-2.9l-5.5-6.8l-4.4-9.9l-2-2.8l-8.2-6.5l-5.4-3l-0.9-3.7l-0.7-1.3l-4.4-2.9l-10-4.8l-4.5-3.1l-4.8-4.2
	l-2.6-1.6l8.1-20.5l-0.4-8.2l-2.7-7.5l0.1-7.1l5.7-21.2l0.1-9.5l-0.5-7l2.6-7.9l1.3-7.2l1.7-4.9l17.8,1.1l8-2.8l6.4-7.1l9.4-4.5
	l13.1,6.6l6.6-5.9l7.2-1.8l7.6,8.9l5.9,5.5l8.5-6.7l4.3-0.2L696.1,1022.7L696.1,1022.7z"/>
			<path id={areaid} onClick={() => selectArea("TWN1160")} className={areaid === "TWN1160" ? "basetwcolor select" : "basetwcolor"} d="M483.8,968.3l-0.6,1.2l-2.3-2l-1.7-4.2l0.3-1.3h0.7l0.9,1.2l0.7,1.9l2.1,2.2L483.8,968.3
	L483.8,968.3z M484.3,940.7l-2.9,6.8l3.9-13.3l0.6,0.1L484.3,940.7z M487.8,927.9l3.5-9.9l0.5-0.1l0.2,1.9L487.8,927.9z
	 M494.1,905.4l-0.4,2.4l0.6-10.6l0.5,0.2L494.1,905.4L494.1,905.4z M643.6,916.9l-2.3,6.6l-10.4,15.1l-10,17l-6.5,8.4l-7.4,7.2
	l-6.5,5.4l-6.1,6.4l-5.3,7.1l-3,5.2l-2.4,5.5l-6.3,4.4l-6.5,2.6l-3.5,2.6l-4.2,1.5l-8.4-1l-8.2,0.9l-15.7-2.2l-4.8-2.5l-3.9-8.6
	L522,998l-6.1,3.7l-1-6.3l-1.8-3.6l-3.9-3.9l4.7-3.4l2.7-6.1l-1.1-5.2l-6.3-0.9l-1.2,1.8l-1.1,3.4l-1.8,2.7l-3.3-0.1l-1.3-2.3l0.5-7
	l-0.8-2.4l-4.1-1.8l-2.3,2.1l-1.8,2.9l-2.8,0.7l-2.9-2.5l-0.7-3.5l0.7-3.4l1.1-2.3l3-1.6l3.7-0.5l3.1-1l1-3l-1.4-1.5l-9.4-2.4v-1.9
	l7.9-0.1l-0.8-2.6l-4.3-3.7l-2.8-3.2l0.7-4l2.5-1.5l2.7-0.9l1.4-2.5l-0.8-3.9l-1.4-3.2l0.9-3l1.4-3.7l2.3-2.6l-0.5-2.3l0.5-2.3
	l3.3-9l1.6-1.7l2.6-0.6l-3.7-2.5l1.6-4.1l5.2,2l8.9,1.3l7.2,1.8l6.2-2.8l2.5-4.9l5.8-3.6l6.6-5.1l4.7-4.8l6.1-4.6l7.8-3.5l15.2-2.8
	l8.5-0.5l7.2,2.4l4,2.4l2.1,4.2l1.7,5.1l9.9,10.1l1,7.5l-1.8,14.2l1.6,4.6l4.5,3.5h3.8l5.3-2.4l5-0.6l3.7,1.1L643.6,916.9
	L643.6,916.9z"/>
			<path id={areaid} onClick={() => selectArea("TWN1161")} className={areaid === "TWN1161" ? "basetwcolor select" : "basetwcolor"} d="M724.3,489l-0.2,0.2l-4.6,1.1l-4.4-1.7l-2.7-3.8l-4.3-2.6l-6.9-2.7l1.2-4.1l5.5-11.4l2.2-3
	l0.7-1.5v-1.7l-0.7-1.9l-1.1-2.2l1.5-3l1.8-1.8l8.3,3.6l15.1,4.8l5.4,2.8l3.8,3.9l1.9,3.7l-1,3.6l-2.4,1.4l-5.1,0.9l-5.9,2.4
	l-3.4,4.3l-2.3,5.6L724.3,489L724.3,489z"/>
			<path id={areaid} onClick={() => selectArea("TWN1162")} className={areaid === "TWN1162" ? "basetwcolor select" : "basetwcolor"} d="M843.1,523.6l-2.3,6.5l-1.4,4.7l0.6,4.4l-3.8,5.8l-14,14.2l-4.3,10.5l-2.8-0.8l-10.6,1l-0.8,0.6
	l-0.6-4.9l-4.6-7.8l-3.3-3.3l-1.3-4.4l-5-4l-12.5,3.2l-4.8-0.5l-6.8,0.5l-7.7,2.1l-4.1-1l0.9-5.1l1.3-4.6l-1-4l-1-2.9l1-3.1l0.8-3.5
	l0.3-3.9l-0.7-5.2l-3.9-3.4l-12.1-5.7l-6-4.5l-3.9-4.4l-4.4-11.1l2.4-3.1l2.3-5.6l3.4-4.3l5.9-2.4l5.1-0.9l2.4-1.4l1-3.6l-1.9-3.7
	l-3.8-3.9l-5.4-2.8l-15.1-4.8l-8.3-3.6l1.5-2.3l0.6-3.9l0.9-2.9l2-2.9l2.7-2.1l2.5-0.9l-0.2-1.2l0.7-2.9l2.2-6.1l2.1-3.3l3.1,1.1
	l13.7-1l4.6,3.1l4,8.7l5,2l4.3,1.2l4.1,2l6.8,2.2l3.6,4.2l-1.1,5.8l3.5,3.7l6.5,2.1l4.2,3.1l3.1,3.1l3.8,0.7l3.9-0.3l3.4,3.5
	l2.6,4.5l4.3,2.2l3.4,2.6l0.4,5l1.6,7.3l-1.9,7.8l-4.6,6.5l0.5,4.3l5.2,3.9l6.2,3.8l5.5,0.9l4,2.9l7.3,4.1L843.1,523.6L843.1,523.6z
	"/>
			<path id={areaid} onClick={() => selectArea("TWN1163")} className={areaid === "TWN1163" ? "basetwcolor select" : "basetwcolor"} d="M982.4,448.9l2.1,0.5l1.6,2.2l-0.7,2.3l-3.8-0.1l-1.4-0.8l-1.7-2.7l0.9,0.3L982.4,448.9
	L982.4,448.9z M935.4,601.5h-1.1l-11.1-1.7l-18.5-11.1l-3.8,0.9l-2.4,6l-4.9,4.5h-6.5l-8.3-3.2l-15-3.8l-6.5-3.1l-2.5-2.1l-5.9-4.7
	H844l-4.7,2.3l-4,0.6l-3.7-2.5l-4.4-2.6l-4.9-1l-1.4-3.8l0.6-5.5l-3.6-1l4.3-10.5l14-14.2l3.8-5.8l-0.6-4.4l1.4-4.7l2.3-6.5l0.5-1.5
	l3.9-1.6l3.3,0.6l3.4-1.3l2.2-3.8l-3.1-12.4l5.4-3.9l3.1-0.9l5.7-1.6l4.9-1.8l3.8-3.3l5-3.5l6.6-3.2l3.9-2.8l-0.4-2l-1-3.2l-0.2-4.2
	l2-4.9l4.7-4l3.8-2.3l13-5.3l13.5-8.1l6.2-1.9l5-3.6l3.1-5l3.3-4.1l3.7-2l3.5-1.2l4.6-2.9l1.6-3.8l-2.5-3.6l1.4-2.9l11.2-2.3
	l3.7-2.5l8.4-4.4l5.9-1.3l3.3,1.9l0.8,1.1l-12,6l-5.5,4.7l-18.7,22.8l-2.9,4.8l-2.3,6.8l-1.6,7.7l-0.5,7.6l0.3,7.4l3.3,15.5l-0.2,4
	l-1.5,3.9l0.2,8.1l3.5,6.3l6.5,4l7.6,1.4v1.8l-3.2-0.3l-3.1,0.3l-2.6,0.8l-1.9,1.4l2.7,5l1.3,6.5l-0.8,5.6l-6,3.4l-0.4,2.5l0.7,3
	l1.7,2.7l0.6,2.8L953,559l-6.2,3.6l-7,8l-0.3,3.2l0.5,7l-1.2,2.6l-1.3,2.3l-0.8,3.2l-0.5,6.4l-0.6,1.6l-1,1.3l-0.5,1.4L935.4,601.5
	L935.4,601.5z"/>
			<path id={areaid} onClick={() => selectArea("TWN1164")} className={areaid === "TWN1164" ? "basetwcolor select" : "basetwcolor"} d="M934.8,365l-0.3,11.9l0.2,3l3.7,3.9l-0.4,2.5l-2.5,1.8l-4,1.5l-5.1-0.6l-10.6-4.4l-3-2.2l-3.7-3.4
	l-2.8-3.5l-1.7-3.5l-2.9-3.7l-0.6-2.9l3.2-2.2l7.2-3.1l4.4-2.9l1.4,0.9l2.4,2.7l3.9,1.4L934.8,365L934.8,365z"/>
			<path id={areaid} onClick={() => selectArea("TWN1165")} className={areaid === "TWN1165" ? "basetwcolor select" : "basetwcolor"} d="M724.3,489l4.4,11.1l3.9,4.4l6,4.5l12.1,5.7l3.9,3.4l0.7,5.2l-0.3,3.9l-0.8,3.5l-1,3.1l1,2.9l1,4
	l-1.3,4.6l-0.9,5.1l4.1,1l7.7-2.1l6.8-0.5l4.8,0.5l12.5-3.2l5,4l1.3,4.4l3.3,3.3l4.6,7.8l0.6,4.9l-3.7,2.6l-1.8,5.6l-4.9,2l-5.3-0.1
	l-4.2,3l-4.6,4.4l-5.9,3.2l-11.6,9.2l-6.8,2.9L746,608l-5.4-2.1l-5-5.6l-6-2.4l-9.9-0.8l-5.5,3.3l-0.9,7.4l-5.2,2.8l-12.1,0.7
	l-11.6-6.7l-6.6-1.2l-7.3-3.6l-15.1-11.1l-6.3-5.5l-4.7-5l-9.2-14.3l7.2-8.1l1.9-4l0.9-6.6l2.2-5.6l5.9-10.4l1.6-6.3l1.5-2.7l6.8-2
	l1.9-2.1l1.1-2.6l1.4-2.5l4.2-4.3l4.6-3.4l5.6-1.5l7.1,1.3l-0.9-5.4l2.7-3.7l3.7-3.8l1.9-5.7l0.8-1.9l3.6-1.8l0.3-1.3l6.9,2.7
	l4.3,2.6l2.7,3.8l4.4,1.7l4.6-1.1L724.3,489L724.3,489z"/>
			<path id={areaid} onClick={() => selectArea("TWN1166")} className={areaid === "TWN1166" ? "basetwcolor select" : "basetwcolor"} d="M897.4,413.2l-4.2,1.7l-5.8-0.1l-4.8-1l-3.7-3.3l-3.8-4.3l-5.8-4.6l-3.9-6.7l1.5-7.4l-1.2-6.3
	l-5.7-5.5l-3.8-4.2l1.6-3l1.8-2.4l2.1-4.6l3.6-4l10.9-6.4l2.9-2.5l4-2l3.8,1.2l2.1,2.2l-0.5,3.6l0.4,3.5l3.2,6.8l2.5,10l3.9,3.5
	l1.6,4.4l-1.6,6.6l0.1,5.1l4.6,2.6l3.8,3.2l-2,4.3L897.4,413.2L897.4,413.2z"/>
			<path id={areaid} onClick={() => selectArea("TWN1167")} className={areaid === "TWN1167" ? "basetwcolor select" : "basetwcolor"} d="M915.9,357.2l-4.4,2.9l-7.2,3.1l-3.2,2.2l0.6,2.9l2.9,3.7l1.7,3.5l2.8,3.5l3.7,3.4l3,2.2l10.6,4.4
	l5.1,0.6l4-1.5l2.5-1.8l0.4-2.5l-3.7-3.9l-0.2-3l0.3-11.9l34.6,8.4l3.2,2l-1.6,3.7l-0.4,2.9l0.7,5.2l2.4,8.7l2.6,4.1l2.2,0.9l7-1
	l3.6,0.4l4.2,1.1l3.7,1.9l2,2.5l-8.7,4.3l-0.8-1.1l-3.3-1.9l-5.9,1.3l-8.4,4.4l-3.7,2.5l-11.2,2.3l-1.4,2.9l2.5,3.6l-1.6,3.8
	l-4.6,2.9l-3.5,1.2l-3.7,2l-3.3,4.1l-3.1,5l-5,3.6l-6.2,1.9l-13.5,8.1l-13,5.3l-3.8,2.3l-4.7,4l-2,4.9l0.2,4.2l1,3.2l0.4,2l-3.9,2.8
	l-6.6,3.2l-5,3.5l-3.8,3.3l-4.9,1.8l-5.7,1.6l-2.5-5.4l-8.9-8.5l-1.4-5.6l-0.8-5.2l3.1-3.7l1.5-5.3l-8.5-12.3l-5-2l-7.4,0.4
	l-5.1-2.9l1.3-6.7l-1-5.1l-5.4-5.1l-1-5.1l1-5.8l-0.2-6.2l3.7-4l13.1-3.9l3.3-3.4l1-4.2l-0.5-4.1l-5.1-7.5l-4.2-2.2l-4.1-1l-3.2-2.8
	l-4.7-3.1l-6.3-3l-4.2-4.6l11.2-2.1l4.8-1.8l6.1-5.2l1.9-0.9l2.2-0.4h3.1l3.5,1.1l1.9,2.7l1.2,2.7l1.5,1.6l3.5-1.4l-3.6-5.7
	l-5.8-5.9l-3.1-1.9l0.9-2.7l1.8-1.5l1.9-0.9l0.8-1l2.1-5.1l3.2-5.9l6.6-5.9l9.6-4.9l11-2.5l10.8,1.2l4.5,3.4l10,14.2l3.6,7.4
	l1.2-0.5l2.7-0.7l3-0.4l2.2,0.6l-0.1,0.9l-1.1,1.3l-1,1.8l0.1,2.2l1.1,1.2L915.9,357.2L915.9,357.2z M897.4,413.2l7.6-9.6l2-4.3
	l-3.8-3.2l-4.6-2.6l-0.1-5.1l1.6-6.6l-1.6-4.4l-3.9-3.5l-2.5-10l-3.2-6.8l-0.4-3.5l0.5-3.6l-2.1-2.2l-3.8-1.2l-4,2l-2.9,2.5
	l-10.9,6.4l-3.6,4l-2.1,4.6l-1.8,2.4l-1.6,3l3.8,4.2l5.7,5.5l1.2,6.3l-1.5,7.4l3.9,6.7l5.8,4.6l3.8,4.3l3.7,3.3l4.8,1l5.8,0.1
	L897.4,413.2L897.4,413.2z"/>
			<path id={areaid} onClick={() => selectArea("TWN1168")} className={areaid === "TWN1168" ? "basetwcolor select" : "basetwcolor"} d="M861.8,498.8l-3.1,0.9l-5.4,3.9l3.1,12.4l-2.2,3.8l-3.4,1.3l-3.3-0.6l-3.9,1.6l-0.5,1.5l-4.8-2.2
	l-7.3-4.1l-4-2.9l-5.5-0.9l-6.2-3.8l-5.2-3.9l-0.5-4.3l4.6-6.5l1.9-7.8l-1.6-7.3l-0.4-5l-3.4-2.6l-4.3-2.2l-2.6-4.5l-3.4-3.5
	l-3.9,0.3l-3.8-0.7l-3.1-3.1l-4.2-3.1l-6.5-2.1l-3.5-3.7l1.1-5.8l-3.6-4.2l-6.8-2.2l-4.1-2l-4.3-1.2l-5-2l-4-8.7l-4.6-3.1l-13.7,1
	l-3.1-1.1l8.9-14.2l6.9-8.3l7.2-6.1l18.4-6.1l4.3-2.7l3.7-3.2l4.5-2.5l9-3.2l20.1-3.6l4.2,4.6l6.3,3l4.7,3.1l3.2,2.8l4.1,1l4.2,2.2
	l5.1,7.5l0.5,4.1l-1,4.2l-3.3,3.4l-13.1,3.9l-3.7,4l0.2,6.2l-1,5.8l1,5.1l5.4,5.1l1,5.1l-1.3,6.7l5.1,2.9l7.4-0.4l5,2l8.5,12.3
	l-1.5,5.3l-3.1,3.7l0.8,5.2l1.4,5.6l8.9,8.5L861.8,498.8L861.8,498.8z"/>
			<path id={areaid} onClick={() => selectArea("TWN1169")} className={areaid === "TWN1169" ? "basetwcolor select" : "basetwcolor"} d="M647.2,689.6l0.1,3.6l-4.3,1.6l-1.2,2.9l0.5,4l-2,4.6l-1.6,5.4l-0.1,5.7l-1.2,6.6l-0.9,13.4
	l2.1,6.3l3.6,3.3l3.9,1.4l5.6,2.9l-1,3.5l-3.8,1.5l-2.5,2.3l-2.4,1.6l-1,0.7l-12-2.4l-5.8,0.1l-12.2-6l-19.7-2.3l-11.6-4.4l-6.6-1.8
	l-7.6-0.4l-22,2.6l-7.6-4.4l0.8-1.4l1.6-7.1l1.2-3l7.1-6.8l2-2.8l2.7-7.8l4.2-7.7l5.7-16.1l2.7-4.7l3-3l2.5-1.7l2.2-1.1l1.6-1.4
	l0.6-3l1.2-2.8l5.1-4l1.2-3l0.6-10.1l0.9-2.8l2.7-2.6l11.3-13.2l5.8,1.9l4,3.5l2.7,6.3l1,7.6l4.5,5.4l11.9,3.5l4.3,3.6l3.2,5l2,4
	l0.1,4l1.2,3.3l4.3,0.8l5.4,3.5V689.6L647.2,689.6z"/>
			<path id={areaid} onClick={() => selectArea("TWN1170")} className={areaid === "TWN1170" ? "basetwcolor select" : "basetwcolor"} d="M499.6,893.2l-1.8,1.4l-0.4-1.1l2.4-3.1l0.9-2.4l1.1-1.5l0.6,0.5l0.1,1.1l-1.4,2L499.6,893.2
	L499.6,893.2z M501.8,880.6l-0.7-0.7l2-3.8l0.9-0.4l-0.5,1.9L501.8,880.6L501.8,880.6z M506.7,871.6l-0.1-4.4l0.5,0.4l0.1,2.9
	L506.7,871.6z M508.1,861.9l-0.8,1.6l-0.5-2L508.1,861.9z M506.8,855.8l-0.5,1.3L505,855L506.8,855.8z M477,856.8l-3.2,1.6l3.8-5.4
	l13.9-14.1l10.6-13.5l2.5-0.8l-9,14.7l-4.5,4.5l-2.9,3.5l-3.8,3.8l-3,2.1L477,856.8L477,856.8z M666.5,805.7l6.1,0.7l6.8,2.6
	l4.1,1.2l5.1,2.8l-0.3,5.3l-3,5.1l1.2,4.8l2.7,6.5l0.4,5.9l1.1,3.8l7.6,1.4l25.6,0.2l0.9,0.2l-18.5,9.4l-8.5,6.8l-3.6,6.8l-4.2,5
	l-7.7,4.3l-7.9,6.1l-4.5,5.4l-12.3,7.3l-5.8,0.6l-6.9-0.7l-3.6,3.5l-0.1,5l1.4,4.5l1,6.7l-8.4-1l-3.7-1.1l-5,0.6l-5.3,2.4h-3.8
	l-4.5-3.5l-1.6-4.6l1.8-14.2l-1-7.5l-9.9-10.1l-1.7-5.1l-2.1-4.2l-4-2.4l-7.2-2.4l-8.5,0.5l-15.2,2.8l-7.8,3.5l-6.1,4.6l-4.7,4.8
	l-6.6,5.1l-5.8,3.6l-2.5,4.9l-6.2,2.8l-7.2-1.8l-8.9-1.3l-5.2-2l3.8-0.3l3.3-1.4l1.4,0.5l-0.9-3.2l-2.2,1.6l-1.8-0.5l-2.5-0.1v-3.3
	l2.4-5.6l3.7-0.3l5.4,0.1l-3.7-10.5l-4.1-8l1.9-3.7v-1.9l-3.1-1.5l0.4-1.8l1.8-2l0.9-2.6l4-5.2l-8.5,0.5l-0.2-8.7l11.6-1.4l8.3,4.7
	l6.1,0.1l3.9-3.2l1.7-4.9l2.1-3l5.3-0.8l7-5.7l4.4-2.4l3.8-3.8l16.3-9.4l7.2-2l12.6-2.3l6.9-0.4l5.3,4.6l5,5.9l12.6,4.6l3.7-0.5
	l8.3-2.4l4.7,3.4l2.4,3.9l6.3-0.6l11.7-2.4l4-1.3v-3.4l0.3-5L666.5,805.7L666.5,805.7z M573.8,836.5l-3.8,4.1l0.9,5.6l6.1,2.4l7,4.5
	l7.3,1.7l6.8-2.7l4.5-0.6l3-2.2l-2.5-6.8l-2.5-4l-4.1-2.2l-5.6-2.1l-7.8,0.7L573.8,836.5L573.8,836.5z"/>
			<path id={areaid} onClick={() => selectArea("TWN1171")} className={areaid === "TWN1171" ? "basetwcolor select" : "basetwcolor"} d="M573.8,836.5l9.3-1.6l7.8-0.7l5.6,2.1l4.1,2.2l2.5,4l2.5,6.8l-3,2.2l-4.5,0.6l-6.8,2.7l-7.3-1.7
	l-7-4.5l-6.1-2.4l-0.9-5.6L573.8,836.5L573.8,836.5z"/>
			<path id={areaid} onClick={() => selectArea("TWN1172")} className={areaid === "TWN1172" ? "basetwcolor select" : "basetwcolor"} d="M935.4,601.5l0.6,0.8l1.6,2.9l0.2,1.1l-1.4,2.4l-5.8,5.7l-6.2,8.6l-4.7,3.7l-1.4,2l0.7,2.1
	l-0.9,1.5l-6.6,5.1l-2.5,2.4l-2.8,6l-2.9,12.2l-7.4,10.9l-1.5,4.4l0.2,4.7l1.8,5.2l1.5,2.3l1.3,1l0.8,1.4l0.1,3.2l-1.1,3.6l-3.7,5.8
	l-0.7,3.5l-0.4,6.4l-3.2,16.3l-6.4,17l-8,40.1l-4.8,9.8l-11,64.1l-3.5-1l-10.8,5.2l-3.9,5.4l1.7,6.9l0.6,6.9l-3.6,6.9l-3.4,5.2
	l-2.7,6.6l-2.4,8.4l-3.7,7.7l-4.8,13.2l-3.1,6.1l0.1,6.7l-0.9,6.2l-6.5,3.7l-8.2-1.1L794,941l-9.2-16l-5.7-1.5l-6.3-0.9l-5-4.8
	l-6.1-2.9l-7.8-2.8l-5-8.1l-1.2-7.4l-0.3-2.5l-2.8-7.6l-6.3-5.2l-5.6-3.6l-1-4l1.4-3.2l5.6-2.4l3-5l-1.9-5.8l6-3.5l3.1-2.8l-1.7-6.2
	l1.5-2.7l1.5-4l5.2-3.9l7.4-1.6l7.4-0.3l5.3-4.7l1.3-8.5l4-5.2l7.6-2.8l4.5-3.1l1.6-5.1l3.2-12.6l1.2-8.4l-0.9-7.2l-1.2-5.4
	l-3.2-4.1l-2.1-4l5.7-9.4l0.2-3.7l2.5-7l3.9-8.5l3-8.8l1.6-9.9l0.6-7.6l-1.8-4.5l-2-3.3l2.3-7.6l5.1-10.7l8-10.4l0.3-3.9l-1.5-4.5
	l-5.2-3.4l-2.9-3.1l-0.2-9.9l3.7-2.9l6.6-2.2l5.2-2.4l-0.2-3.7l-1.4-6.2l2.8-2l1.2-2.1l3.4-1.7l3.1-3.8l1.3-5.1l3-5l7.5-4.7l2.4-6.2
	l0.4-4.2l4.7-4.9l2.5,2.1l6.5,3.1l15,3.8l8.3,3.2h6.5l4.9-4.5l2.4-6l3.8-0.9l18.5,11.1l11.1,1.7L935.4,601.5L935.4,601.5z"/>
			<path id={areaid} onClick={() => selectArea("TWN1173")} className={areaid === "TWN1173" ? "basetwcolor select" : "basetwcolor"} d="M825,627.6l1.4,6.2l0.2,3.7l-5.2,2.4l-6.6,2.2l-3.7,2.9l0.2,9.9l2.9,3.1l5.2,3.4l1.5,4.5l-0.3,3.9
	l-8,10.4l-5.1,10.7l-2.3,7.6l2,3.3l1.8,4.5l-0.6,7.6l-1.6,9.9l-3,8.8l-3.9,8.5l-2.5,7l-0.2,3.7l-5.7,9.4l2.1,4l3.2,4.1l1.2,5.4
	l0.9,7.2l-1.2,8.4l-3.2,12.6l-1.6,5.1l-4.5,3.1l-7.6,2.8l-4,5.2l-1.3,8.5l-5.3,4.7l-7.4,0.3l-7.4,1.6l-5.2,3.9l-1.5,4l-1.5,2.7
	l1.7,6.2l-3.1,2.8l-6,3.5l-0.7-2l-4.2-5.9l-5.8-2.2l-4.3-1l-0.9-0.2l-25.6-0.2l-7.6-1.4l-1.1-3.8l-0.4-5.9l-2.7-6.5l-1.2-4.8l3-5.1
	l0.3-5.3l-5.1-2.8l-4.1-1.2l-6.8-2.6l-6.1-0.7l-2.6-3.5l-8.2,0.9l-6.8,2l-5.8-2.5l-4-4.7l0.9-5.7l1.9-5.2l-1-7.7l1-7.2l2-4.7
	l-1.9-7.2l2.4-1.6l2.5-2.3l3.8-1.5l1-3.5l-5.6-2.9l-3.9-1.4l-3.6-3.3l-2.1-6.3l0.9-13.4l1.2-6.6l0.1-5.7l1.6-5.4l2-4.6l-0.5-4
	l1.2-2.9l4.3-1.6l-0.1-3.6l4.3,0.2l17.9,2.5l4.2-0.6l5-4.8l7.6-14.4l3.7-8.5l6.4-3l10.1,1.4l6-0.2l5.8-7.7l3-1.9l8.9,6.7l3.5-0.9
	l2.6-5.5l4.7-3.9l6.6,0.1l5-1.9l7.9-7.6l5.1-2.9l4.4-0.8l8.8-4.7l6.2-0.2l6.3-1l11.1-4.4l4.6-0.3l4.7,1L825,627.6L825,627.6z"/>
			<path id={areaid} onClick={() => selectArea("TWN1174")} className={areaid === "TWN1174" ? "basetwcolor select" : "basetwcolor"} d="M803.7,570.5l0.8-0.6l10.6-1l2.8,0.8l3.6,1l-0.6,5.5l1.4,3.8l4.9,1l4.4,2.6l3.7,2.5l4-0.6l4.7-2.3
	h4.9l5.9,4.7l-4.7,4.9l-0.4,4.2l-2.4,6.2l-7.5,4.7l-3,5l-1.3,5.1l-3.1,3.8l-3.4,1.7l-1.2,2.1l-2.8,2l-13.4-1.3l-4.7-1l-4.6,0.3
	l-11.1,4.4l-6.3,1l-6.2,0.2l-8.8,4.7l-4.4,0.8l-5.1,2.9l-7.9,7.6l-5,1.9l-6.6-0.1l-4.7,3.9l-2.6,5.5l-3.5,0.9l-8.9-6.7l-3,1.9
	l-5.8,7.7l-6,0.2l-10.1-1.4l-6.4,3l-3.7,8.5l-7.6,14.4l-5,4.8l-4.2,0.6l-17.9-2.5l-4.3-0.2v-1.4l-5.4-3.5l-4.3-0.8l-1.2-3.3l-0.1-4
	l-2-4l-3.2-5l-4.3-3.6l-11.9-3.5l-4.5-5.4l-1-7.6l-2.7-6.3l-4-3.5l-5.8-1.9l0.6-0.8l0.8-3.3l3.3-2.7l2.2-6.5l2.7-12.3l9.3-16.1
	l2.8-9.9l3.4-5.5l13.3-14.8l9.2,14.3l4.7,5l6.3,5.5l15.1,11.1l7.3,3.6l6.6,1.2l11.6,6.7l12.1-0.7l5.2-2.8l0.9-7.4l5.5-3.3l9.9,0.8
	l6,2.4l5,5.6l5.4,2.1l8.9-4.7l6.8-2.9l11.6-9.2l5.9-3.2l4.6-4.4l4.2-3l5.3,0.1l4.9-2l1.8-5.6L803.7,570.5L803.7,570.5z"/>
			<path id={areaid} onClick={() => selectArea("TWN1176")} className={areaid === "TWN1176" ? "basetwcolor select" : "basetwcolor"} d="M642,760.2l1.9,7.2l-2,4.7l-1,7.2l1,7.7l-1.9,5.2l-0.9,5.7l4,4.7l5.8,2.5l6.8-2l8.2-0.9l2.6,3.5
	H666l-0.3,5v3.4l-4,1.3l-11.7,2.4l-6.3,0.6l-2.4-3.9l-4.7-3.4l-8.3,2.4l-3.7,0.5l-12.6-4.6l-5-5.9l-5.3-4.6l-6.9,0.4l-12.6,2.3
	l-7.2,2l-16.3,9.4l-3.8,3.8l-4.4,2.4l-7,5.7l-5.3,0.8l-2.1,3l-1.7,4.9l-3.9,3.2l-6.1-0.1l-8.3-4.7l-11.6,1.4l4.6-5.2l-0.2-16.4
	l0.7-12.3l2.8-9.8l4.3-7.7l1.3-10l2.3-8.8l1.3-3l6.1-8.1l1.1-2.8l0.7-1.5l5.6-4.3l0.8-1.6l7.6,4.4l22-2.6l7.6,0.4l6.6,1.8l11.6,4.4
	l19.7,2.3l12.2,6l5.8-0.1l12,2.4L642,760.2L642,760.2z"/>
			<path id={areaid} onClick={() => selectArea("TWN1177")} className={areaid === "TWN1177" ? "basetwcolor select" : "basetwcolor"} d="M889.2,1263l-5.5,1.7l-7.3-2.9l-6.8-4.8l-3.9-3.7l1.2-2.7l-0.1-2.5l-1-2.4l-1.7-2.1h19.5v1.8
	l-1.3,3.5l-0.4,2.9l0.9,2.5l4.7,3.5l2,2.5L889.2,1263L889.2,1263z M865.2,1085.4l-0.1,1.1l-3.4-0.4l-0.4-0.6l-2.7-1l-2.8-4.9
	l-1.4-4.3l0.6-0.6l10-0.7l1.1,0.6l0.8,2l-0.8,3.9l-0.9,1.6l-0.4,1.7L865.2,1085.4L865.2,1085.4z M702.1,1199.5l-4.5,0.3l-10.2-4.7
	l-4.6-4.9l-3.2-5.9l-0.6-6.1l0.1-5.7l-3.1-4.4l-3.4-1.7l-2.7-3.9l0.5-4.5l2.1-3.9l5.3-3.2l2.5-3.8l-4.6-5.6l-2.6-5v-5.4l-1.1-7.1
	l-2-6.1l-1.2-6.5l0.8-14.7l3-7.5l3.7-6.6l2.4-6.6l5.4-4.5l7.6-1.6l4.8-2.7l9.8-4.1l2-5l0.1-5.2l2.8-13.8l-5.5-3.6l-5.4-1.3l-0.7-4.9
	l-3.5-6.6l3.9-0.5l-1.2-4.9l-6.2-6.4l-3-4.6l-1.3-8.1l2.3-9.8l8.5-7.2l4.3-5.9l0.1-11.2l3-13.2l-2.1-9.9l0.8-6.9l7.4-4l2.7-4.9
	l-2.3-6l0.9-5.7l7.8-5.1l4-3.9l6.4-4.1l15.6-3.8l1.2,7.4l5,8.1l7.8,2.8l6.1,2.9l5,4.8l6.3,0.9l5.7,1.5l9.2,16l11.7,9.7l8.2,1.1
	l6.5-3.7l0.9-6.2l-0.1-6.7l3.1-6.1l4.8-13.2l3.7-7.7l2.4-8.4l2.7-6.6l3.4-5.2l3.6-6.9l-0.6-6.9l-1.7-6.9l3.9-5.4l10.8-5.2l3.5,1
	l-4.6,26.4L854,889l-7.1,9.4l-2.6,4.9l-2.1,6.1l-1.5,11.4l0.2,10.2l-1,9.7l-4.9,9.9l-2.1,2.1l-4.7,3.5l-2.2,2.2l-1,2.3l-1.7,5.8
	l-4.8,8.4l-2.9,13.1l-2.1,5.9l-10.3,14.8l-1.3,2.7l-13.9,11.8l-3.3,3.8l-0.4,2.7l0.6,6.2l-0.2,2.8l-1.2,3.2l-2.2,3.5l-4.7,6.1
	l-4.7,4.5l-16.1,10.7l-10.8,11.9l-2.7,1.4l-2.1,2.7l-5.2,13.5l-2.6,5l-8,10l-3.3,6l-1.9,12.3l-4.8,16.8l-9.5,16.7l-1.4,5.7
	l-1.7,16.1L702.1,1199.5L702.1,1199.5z"/>
			<path id={areaid} onClick={() => selectArea("TWN3414")} className={areaid === "TWN3414" ? "basetwcolor select" : "basetwcolor"} d="M320.7,926.5l-1.8,0.9l-1.3-1.5l-1.5-4.7l1-1.2l3.8-1.3l2.7,0.7l0.1,2.1l-0.2,1.6l-1.2,1.2
	L320.7,926.5z M319.5,914.5l-1.7,3.1l-2.2-0.6l-2-2.5l-0.3-2.5l1.2-1.1l3.2,0.5L319.5,914.5z M368.3,911.3l-0.4,0.1l-1.2-1.5
	l0.3-0.6l2.5-0.2l0.8,2L368.3,911.3L368.3,911.3z M382.3,906.7l0.3,0.2h2.3v1.3l-1.1,1.5l-0.7,1.8l-1.1-2.8L382.3,906.7L382.3,906.7
	z M348.8,877.1l-1.7,0.1l-3,1.8l-0.4-0.4l0.4-1.3l1.1-1.5l0.7-0.6l1.6-0.3l1.5,0.9L348.8,877.1z M340.4,870.4l0.1,2.3l0.5,1.6
	l1.4,1.2l-0.6,1.6l-1.2,1.2l0.6,1.9l-1.5,0.6l-3.1-0.3l-1.6-0.7l1.4-3.1l-0.2-4.2l-0.9,0.6l-2,0.6l-0.6-2.3l2.1-5.1l1.6-0.3l2.7,3.6
	L340.4,870.4L340.4,870.4z M290.9,864.7l2.4,0.6v1.6l-0.6,0.9l-2.1,0.6l-1.1-1.1L290.9,864.7L290.9,864.7z M349.4,839.9l-3.2,2.1
	l-2.1,0.6l-2.2,1.1l-1.3-0.5l-0.3-1.8l0.7-0.6l1.8,0.5l4-2L349.4,839.9L349.4,839.9z M368.9,811.9l-0.6,1.3l4-1.3l3.1,0.4l2.3-0.2
	l1.6-2.7l4.7,8.7l1.2,4l-0.5,3l-2-2l-2.5-1.7l-2.8-0.5l-4,2.2l-2.8,0.3l-1.4,0.8l-0.7,1.5l-1.1,4.1l-0.7,1.2l-4.7,2.7l-4.8,0.7
	l-4.8-1.9l-4.9-4.9l1.3-2.5l2.7,3.2l4,0.9l4.3-1.2l3.5-2.9l-2.4-0.9l-2-1.2l-1.5-1.6l-1.4-2.2l-0.8,1.4l-1,0.6l-0.3-4l0.3-4h1.8
	l2.1,0.5l7.4-4.6l4.6-1.6L368.9,811.9L368.9,811.9z M329,821.2h-3.8l0.7-2.1l1.2-1.3l1.9-0.5l2.5-0.2l2.2-0.9l0.6-2l0.1-4.8
	l3.2-10.4l3.1-3l4.2,3.6l-2.5,1.5l-1.7,3.6l-2.8,8.5l-0.1,2.2l0.7,2l-0.3,1.3l-3,0.5l-2.2,0.1l-1.5,0.3l-1.3,0.6L329,821.2
	L329,821.2z M362.8,803.3l-2.2,0.7l-1.1-1.5l-0.9-3.5l-2-2.9l-4.3-4.3l5.5-4.1l3.3,1.7l3.2,2.8l1.4,2.9l-2.5,2.4l1,3.5L362.8,803.3
	L362.8,803.3z M365.4,772.9l-0.3,0.9l-1.3-3l-0.2-1.4l1.8-1.5l1.6-3l0.5,1.1l2.5,1.4l-0.4,1.8l-2.2,1.3L365.4,772.9z"/>
			<path id={areaid} onClick={() => selectArea("TWN3415")} className={areaid === "TWN3415" ? "basetwcolor select" : "basetwcolor"} d="M9.2,576.4L4,577.9l-3-1.2l5-9.9l1.3-1.4l2.1-0.5l2.1-0.1l2,1.4l1.6,1.8v3.1l-1.4,2.1l-1.6,0.1
	l-1.1,1.2l-0.6,1.2L9.2,576.4L9.2,576.4z M64.2,549.6l4.7,12.6l-1,8.8l-3.9,4.6l-6.8-4.3l-5-1.6l-8.1,0.8L37,575l-3.9,6.1l-3.4,1.7
	l-3.9-1.9l-2.7-0.1l-2.4-1.1l-1.2-2.1l0.5-0.7l2.1-2.8l0.7-1.2l0.2-2.1l-0.1-2.5l-0.7-4.3l-1.8-4.2l-0.2-2.1l1.5-0.9l7.6-3.7l10,6.6
	l7-0.9l1.1-8.7l2.3-5.5l7.5-1.5L64.2,549.6L64.2,549.6z M333.5,411.9l-2.9,1.5l-1.3-1.2l0.7-3.2l2.4-1.4l1.7,0.3l0.2,1.9
	L333.5,411.9L333.5,411.9z"/>
			<path id={areaid} onClick={() => selectArea("TWN5128")} className={areaid === "TWN5128" ? "basetwcolor select" : "basetwcolor"} d="M469.2,123.9l-0.2,2.3l-1.9,2.1l-4.1,2l2.5-5.6l2.5,0.5l0.1-0.9L469.2,123.9z M457.4,123.1l-2,2.1
	l-2.4-3.4l3.6-1.3l2.7,1.5L457.4,123.1L457.4,123.1z M454.2,68.2l1,0.5l4.4-2.6h2.8v1.8l-2.8,3.2l-5.5,2.9l-1.7,0.3l-2.5-1.7
	l-0.8-2.4l0.5-2.8l1.1-2l1-0.2l0.3,2.2C452,67.4,454.2,68.2,454.2,68.2z M475.5,50.4l-0.6,2.2l0.6,1.2l-1.4-0.2l-1.5-2.2l-1.1-0.7
	l-2.3,1.3l-1-0.4l-1.3,0.3l-1.5,1.7l-1.2,5l-1.1-0.7l-0.5-1.5l0.5-4.3l0.5-1.6l1.1-0.7l2.7-0.9l0.7-0.9l2.2-1.3l2.5,0.4l1.3,1.9
	L475.5,50.4L475.5,50.4z M605.3,4.8l-1.2,0.4L603,4.8l-1.4,1.3l-1.1,2.1l-0.3-0.5L599,7.5l-1.8-1l1.1-1.7l-0.5-1.4l0.9-0.6l2.2-1.8
	l2.6,1.5l0.6,1.3L605.3,4.8z"/>
			{/* <rect id={areaid} x="894" y="358" onClick={() => selectArea("_x30_")} className={areaid === "_x30_" ? "basetwcolor select" : "basetwcolor"} width="0" height="0" />
			<rect id={areaid} x="669.9" y="526.1" onClick={() => selectArea("_x31_")} className={areaid === "_x31_" ? "basetwcolor select" : "basetwcolor"} width="0" height="0" />
			<rect id={areaid} x="569.7" y="1021.4" onClick={() => selectArea("_x32_")} className={areaid === "_x32_" ? "basetwcolor select" : "basetwcolor"} width="0" height="0" /> */}
			<g id="Layer_2">
				<text transform="matrix(1 0 0 1 287.3009 1086.4998)" className={areaid === "TWN1156" ? "twcity-label" : "labelhidden"}>Kaohsiung / 高雄</text>
				<text transform="matrix(1 0 0 1 446.9175 1215.0002)" className={areaid === "TWN1158" ? "twcity-label" : "labelhidden"}>Pingtung / 屏東</text>
				<text transform="matrix(1 0 0 1 304.6099 977.2396)" className={areaid === "TWN1160" ? "twcity-label" : "labelhidden"}>Tainan / 台南</text>
				<text transform="matrix(1 0 0 1 430.6462 469.5998)" className={areaid === "TWN1161" ? "twcity-label" : "labelhidden"}>Hsinchu City / 新竹市</text>
				<text transform="matrix(1 0 0 1 524.9809 429.6274)" className={areaid === "TWN1162" ? "twcity-label" : "labelhidden"}>Hsinchu / 新竹</text>
				<text transform="matrix(1 0 0 1 465.8398 532.9)" className={areaid === "TWN1165" ? "twcity-label" : "labelhidden"}>Miaoli / 苗栗</text>
				<text transform="matrix(1 0 0 1 798.0922 260.2363)" className={areaid === "TWN1164" ? "twcity-label" : "labelhidden"}>Keelung City / 基隆</text>
				<text transform="matrix(1 0 0 1 886.6469 545.4004)" className={areaid === "TWN1163" ? "twcity-label" : "labelhidden"}>Yilan / 宜蘭</text>
				<text transform="matrix(1 0 0 1 633.7136 338.9406)" className={areaid === "TWN1166" ? "twcity-label" : "labelhidden"}>Taipei City / 台北</text>
				<text transform="matrix(1 0 0 1 727.6852 297.0023)" className={areaid === "TWN1167" ? "twcity-label" : "labelhidden"}>New Taipei City / 新北</text>
				<text transform="matrix(1 0 0 1 339.2659 894.6002)" className={areaid === "TWN1170" ? "twcity-label" : "labelhidden"}>Chiayi / 嘉義</text>
				<text transform="matrix(1 0 0 1 347.8871 692.3006)" className={areaid === "TWN1169" ? "twcity-label" : "labelhidden"}>Changhua / 彰化</text>
				<text transform="matrix(1 0 0 1 551.9265 380.7501)" className={areaid === "TWN1168" ? "twcity-label" : "labelhidden"}>Taoyuan / 桃園</text>
				<text transform="matrix(1 0 0 1 252.957 863.8004)" className={areaid === "TWN1171" ? "twcity-label" : "labelhidden"}>Chiayi City / 嘉義市</text>
				<text transform="matrix(1 0 0 1 822.7891 808.6003)" className={areaid === "TWN1172" ? "twcity-label" : "labelhidden"}>Hualien / 花蓮</text>
				<text transform="matrix(1 0 0 1 641.6902 726.5808)" className={areaid === "TWN1173" ? "twcity-label" : "labelhidden"}>Nantou / 南投</text>
				<text transform="matrix(1 0 0 1 722.2191 1154.1495)" className={areaid === "TWN1177" ? "twcity-label" : "labelhidden"}>Taitung /台東</text>
				<text transform="matrix(1 0 0 1 362.1906 606.0957)" className={areaid === "TWN1174" ? "twcity-label" : "labelhidden"}>Taichung City / 台中</text>
				<text transform="matrix(1 0 0 1 347.805 773.8001)" className={areaid === "TWN1176" ? "twcity-label" : "labelhidden"}>Yunlin / 雲林</text>
				<text transform="matrix(1 0 0 1 156.4223 807.5003)" className={areaid === "TWN3414" ? "twcity-label" : "labelhidden"}>Penghu / 澎湖</text>
				<text transform="matrix(1 0 0 1 30.2982 614.9892)" className={areaid === "TWN3415" ? "twcity-label" : "labelhidden"}>Kinmen / 金門</text>
				<text transform="matrix(1 0 0 1 468.7559 96.1804)" className={areaid === "TWN5128" ? "twcity-label" : "labelhidden"}>Lienchiang / 連江</text>
			</g>

		</svg>

		{taiwancities.map((city) =>
			<p
				id={city.citycode}
				className={areaid === city.citycode ? "city-name citynameshow" : "city-name"}
			>{city.cityname}</p>
		)}

		{/* <div className="blogcard-container">
			<BlogCard />
		</div> */}
	</>
}