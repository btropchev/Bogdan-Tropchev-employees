import { DataGrid } from '@mui/x-data-grid';

function DataGridComponent({data}) {
	const COLUMNS = [
		{ field: 'id', headerName: '#', width: 70 },
		{ field: 'EmpID1', headerName: 'Employee ID 1', width: 130 },
		{ field: 'EmpID2', headerName: 'Employee ID 2', width: 130 },
		{ field: 'ProjectID', headerName: 'Project ID', width: 130 },
		{ field: 'DaysWorkedTogether', headerName: 'Days worked', width: 200 }
	];

	const ROWS = data.map((item, index) => ({
		id: index + 1,
		...item
	}));

	return (
		<div className="table-container">
			{data.length > 0 ? (
				<DataGrid rows={ROWS} columns={COLUMNS} pageSize={5} />
			) : (
				<p className="no-data">No data to display.</p>
			)}
		</div>
	)
}

export default DataGridComponent;