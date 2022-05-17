import Datatable from "../../components/datatable/Datatable";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./list.scss";

const List = ({ title, url }) => {
	return (
		<div className="mainList">
			<Sidebar />
			<div className="listContainer">
				<Navbar />
				<Datatable title={title} url={url} />
			</div>
		</div>
	);
};

export default List;
