import { FaHome } from "react-icons/fa"
import { FaChalkboardTeacher } from "react-icons/fa"
import { PiStudentDuotone } from "react-icons/pi"

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
	{
		name: 'Students',
		path: '/students',
		icon: <PiStudentDuotone />,
	},
]
