import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userRows, userColumns } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";

const Datatable = ({ title, url }) => {
	const [data, setData] = useState(userRows);

	const handleDelete = (uId) => {
		setData(data.filter((item) => item.id !== uId));
	};

	const actionColumn = [
		{
			field: "action",
			headerName: "Action",
			width: 150,
			renderCell: (params) => {
				return (
					<div className="cellAction">
						<Link to="/users/test">
							<div className="viewButton">View</div>
						</Link>
						<div
							className="deleteButton"
							onClick={() => handleDelete(params.row.id)}
						>
							Delete
						</div>
					</div>
				);
			},
		},
	];

	return (
		<div className="datatable">
			<div className="datatableTitle">
				{title}
				<Link to={`/${url}/new`} className="link">
					Add New
				</Link>
			</div>
			<DataGrid
				className="datagrid"
				rows={data}
				columns={userColumns.concat(actionColumn)}
				pageSize={10}
				rowsPerPageOptions={[10]}
				checkboxSelection
			/>
		</div>
	);
};

export default Datatable;
