// Temporary column data
export const userColumns = [
	{
		field: "id",
		headerName: "ID",
		width: 100,
	},
	{
		field: "user",
		headerName: "User",
		width: 230,
		renderCell: (params) => {
			return (
				<div className="cellWithImg">
					<img src={params.row.img} alt="avatar" className="cellImg" />
					{params.row.username}
				</div>
			);
		},
	},
	{
		field: "email",
		headerName: "Email",
		width: 230,
	},
	{
		field: "age",
		headerName: "Age",
		width: 100,
	},
	{
		field: "status",
		headerName: "Status",
		width: 130,
		renderCell: (params) => {
			return (
				<div className={`cellWithStatus ${params.row.status}`}>
					{params.row.status}
				</div>
			);
		},
	},
];

// Temporary row data
export const userRows = [
	{
		id: 1,
		username: "Snow",
		img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
		email: "lsnow@gmail.com",
		status: "active",
		age: 42,
	},
	{
		id: 2,
		username: "Lannister",
		img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
		email: "lsnow@gmail.com",
		status: "pending",
		age: 35,
	},
	{
		id: 3,
		username: "Stark",
		img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
		email: "lsnow@gmail.com",
		status: "active",
		age: 45,
	},
	{
		id: 4,
		username: "Targaryen",
		img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
		email: "lsnow@gmail.com",
		status: "passive",
		age: 34,
	},
	{
		id: 5,
		username: "Melisandre",
		img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
		email: "lsnow@gmail.com",
		status: "pending",
		age: 46,
	},
	{
		id: 6,
		username: "Clifford",
		img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
		email: "lsnow@gmail.com",
		status: "pending",
		age: 36,
	},
	{
		id: 7,
		username: "Frances",
		img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
		email: "lsnow@gmail.com",
		status: "active",
		age: 65,
	},
	{
		id: 8,
		username: "Jon",
		img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
		email: "frances@gmail.com",
		status: "passive",
		age: 36,
	},
	{
		id: 9,
		username: "Roxie",
		img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
		email: "snow@gmail.com",
		status: "pending",
		age: 25,
	},
	{
		id: 10,
		username: "Roxie",
		img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
		email: "roxie@gmail.com",
		status: "active",
		age: 21,
	},
];
