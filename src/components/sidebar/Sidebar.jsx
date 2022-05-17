import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import StoreIcon from "@mui/icons-material/Store";
import PaymentIcon from "@mui/icons-material/Payment";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AssessmentIcon from "@mui/icons-material/Assessment";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import PsychologyIcon from "@mui/icons-material/Psychology";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

const Sidebar = () => {
	const { dispatch } = useContext(DarkModeContext);

	return (
		<div className="sidebar">
			<div className="top">
				<NavLink to="/">
					<span className="logo">Danishadmin</span>
				</NavLink>
			</div>
			<hr />
			<div className="center">
				<ul>
					<p className="title">MAIN</p>
					<NavLink to="/">
						<li>
							<DashboardIcon className="icon" />
							<span>Dashboard</span>
						</li>
					</NavLink>

					<p className="title">LISTS</p>
					<NavLink to="/users">
						<li>
							<PersonOutlineOutlinedIcon className="icon" />
							<span>Users</span>
						</li>
					</NavLink>
					<NavLink to="/products">
						<li>
							<StoreIcon className="icon" />
							<span>Products</span>
						</li>
					</NavLink>
					<li>
						<PaymentIcon className="icon" />
						<span>Orders</span>
					</li>
					<li>
						<LocalShippingIcon className="icon" />
						<span>Delivery</span>
					</li>

					<p className="title">USEFUL</p>
					<li>
						<AssessmentIcon className="icon" />
						<span>Stats</span>
					</li>
					<li>
						<NotificationsNoneOutlinedIcon className="icon" />
						<span>Notifications</span>
					</li>

					<p className="title">SERVICES</p>
					<li>
						<HealthAndSafetyIcon className="icon" />
						<span>System Health</span>
					</li>
					<li>
						<PsychologyIcon className="icon" />
						<span>Logs</span>
					</li>
					<li>
						<SettingsIcon className="icon" />
						<span>Settings</span>
					</li>

					<p className="title">USER</p>
					<li>
						<AccountCircleOutlinedIcon className="icon" />
						<span>Profile</span>
					</li>
					<li>
						<LogoutIcon className="icon" />
						<span>Logout</span>
					</li>
				</ul>
			</div>
			<div className="bottom">
				<div
					className="colorOption"
					onClick={() => dispatch({ type: "LIGHT" })}
				></div>
				<div
					className="colorOption"
					onClick={() => dispatch({ type: "DARK" })}
				></div>
			</div>
		</div>
	);
};

export default Sidebar;
