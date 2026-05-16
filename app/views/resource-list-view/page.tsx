'use client';

import { useState } from 'react';
import { Button } from '@stateless-studio/ui-react/components/buttons';
import { useTableSelection } from '@stateless-studio/ui-react/hooks';
import { ResourceListView } from '@stateless-studio/ui-react/views';
import { TableState } from '@stateless-studio/ui-react/components/data-tables';

interface User {
	id: string;
	name: string;
	email: string;
	role: string;
}

const mockData: User[] = [
	{ id: '1', name: 'Alice Smith', email: 'alice@example.com', role: 'Admin' },
	{ id: '2', name: 'Bob Jones', email: 'bob@example.com', role: 'User' },
	{
		id: '3',
		name: 'Charlie Brown',
		email: 'charlie@example.com',
		role: 'User',
	},
	{ id: '4', name: 'Diana Prince', email: 'diana@example.com', role: 'Editor' },
];

export default function ResourceListViewDemo() {
	const [searchValue, setSearchValue] = useState('');
	const [tableState, setTableState] = useState<TableState>({
		page: 1,
		pageSize: 10,
		sortKey: 'name',
		sortDirection: 'asc',
	});

	const selection = useTableSelection<User>({
		getRowId: (row) => row.id,
		totalCount: mockData.length,
	});

	const filteredData = mockData.filter(
		(user) =>
			user.name.toLowerCase().includes(searchValue.toLowerCase()) ||
			user.email.toLowerCase().includes(searchValue.toLowerCase()) ||
			user.role.toLowerCase().includes(searchValue.toLowerCase())
	);

	const columns = [
		{
			header: 'Name',
			key: 'name',
			sortable: true,
			cell: (row: User) => row.name,
		},
		{
			header: 'Email',
			key: 'email',
			sortable: true,
			cell: (row: User) => row.email,
		},
		{
			header: 'Role',
			key: 'role',
			sortable: true,
			cell: (row: User) => row.role,
		},
	];

	return (
		<ResourceListView
			title="Users"
			data={filteredData}
			columns={columns}
			getRowKey={(row) => row.id}
			tableState={tableState}
			onTableStateChange={setTableState}
			selection={selection}
			searchValue={searchValue}
			onSearchChange={setSearchValue}
			totalCount={filteredData.length}
			toolbarActions={<Button color="primary">Add User</Button>}
			selectionActions={
				selection.selectedIds.size > 0 && (
					<Button
						color="danger"
						fill="outline"
					>
						Delete Selected ({selection.selectedIds.size})
					</Button>
				)
			}
		/>
	);
}
