import { FaHome } from "react-icons/fa"
import { FaChalkboardTeacher } from "react-icons/fa"

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		name: 'Dashboard',
		path: '/',
		icon: <FaHome />,
	},
	{
		name: 'Teachers',
		path: '/teachers',
		icon: <FaChalkboardTeacher />,
	},
]
