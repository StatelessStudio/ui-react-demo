'use client';

import React, { useState } from 'react';
import { Heading } from '@stateless-studio/ui-react/components/typography';
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from '@stateless-studio/ui-react/components/cards';
import { Badge } from '@stateless-studio/ui-react/components/feedback';
import { Button } from '@stateless-studio/ui-react/components/buttons';
import { Checkbox } from '@stateless-studio/ui-react/components/forms';
import { useTableSelection } from '@stateless-studio/ui-react/hooks';
import {
	DataTable,
	TableState,
} from '@stateless-studio/ui-react/components/data-tables';
import { Grid } from '@stateless-studio/ui-react/components/layout';

const initialInvoices = [
	{
		id: '1',
		invoice: 'INV001',
		paymentStatus: 'Paid',
		totalAmount: '$250.00',
		paymentMethod: 'Credit Card',
	},
	{
		id: '2',
		invoice: 'INV002',
		paymentStatus: 'Pending',
		totalAmount: '$150.00',
		paymentMethod: 'PayPal',
	},
	{
		id: '3',
		invoice: 'INV003',
		paymentStatus: 'Unpaid',
		totalAmount: '$350.00',
		paymentMethod: 'Bank Transfer',
	},
	{
		id: '4',
		invoice: 'INV004',
		paymentStatus: 'Paid',
		totalAmount: '$450.00',
		paymentMethod: 'Credit Card',
	},
	{
		id: '5',
		invoice: 'INV005',
		paymentStatus: 'Paid',
		totalAmount: '$550.00',
		paymentMethod: 'PayPal',
	},
];

export default function DataTableSelectionPage() {
	const [tableState, setTableState] = useState<TableState>({
		page: 1,
		pageSize: 2,
		sortKey: undefined,
		sortDirection: 'asc',
	});

	const processedData = React.useMemo(() => {
		const result = [...initialInvoices];

		if (tableState.sortKey) {
			result.sort((a, b) => {
				const valA = a[tableState.sortKey as keyof typeof a];
				const valB = b[tableState.sortKey as keyof typeof b];

				if (valA < valB) {
					return tableState.sortDirection === 'asc' ? -1 : 1;
				}

				if (valA > valB) {
					return tableState.sortDirection === 'asc' ? 1 : -1;
				}

				return 0;
			});
		}

		const startIndex = (tableState.page - 1) * tableState.pageSize;
		return result.slice(startIndex, startIndex + tableState.pageSize);
	}, [tableState]);

	const selection = useTableSelection({
		getRowId: (item: (typeof initialInvoices)[number]) => item.id,
	});

	const handleSelectAll = () => {
		const isAllSelected = selection.selectedCount === processedData.length;
		if (isAllSelected) {
			selection.deselectAll();
		}
		else {
			selection.selectAll(processedData);
		}
	};

	const handleDelete = () => {
		if (selection.selectedIds.size > 0) {
			alert(
				`Deleting ${selection.selectedIds.size} item(s): ` +
					Array.from(selection.selectedIds).join(', ')
			);
			selection.deselectAll();
		}
	};

	return (
		<Grid>
			<div>
				<Heading level={1}>Data Table with Row Selection</Heading>
				<p className="text-muted-foreground">
					Example demonstrating row selection using the useTableSelection hook
					without built-in selection in DataTable.
				</p>
			</div>
			<Card>
				<CardHeader className="flex flex-row items-center justify-between gap-4">
					<CardTitle level={2}>Selectable Data Table</CardTitle>
					<div className="flex items-center gap-2">
						{selection.selectedCount > 0 && (
							<>
								<span className="text-sm text-muted-foreground">
									{selection.selectedCount} selected
								</span>
								<Button
									color="danger"
									onClick={handleDelete}
								>
									Delete Selected
								</Button>
							</>
						)}
					</div>
				</CardHeader>
				<CardContent>
					<DataTable
						data={processedData}
						state={tableState}
						onStateChange={(newState) => setTableState(newState)}
						pagination={{
							totalPages: Math.ceil(
								initialInvoices.length / tableState.pageSize
							),
							pageSizeOptions: [2, 5, 10],
						}}
						getRowKey={(row) => row.id}
						columns={[
							{
								header: (
									<Checkbox
										checked={
											selection.selectedCount === processedData.length &&
											processedData.length > 0
										}
										ref={(input) => {
											if (input) {
												input.indeterminate =
													selection.selectedCount > 0 &&
													selection.selectedCount < processedData.length;
											}
										}}
										onChange={handleSelectAll}
										aria-label="Select all items"
									/>
								),
								key: 'select',
								cell: (item) => (
									<Checkbox
										checked={selection.isSelected(item.id)}
										onChange={() => selection.toggleRow(item.id)}
										aria-label={`Select invoice ${item.invoice}`}
									/>
								),
							},
							{
								header: 'Invoice',
								key: 'invoice',
								sortable: true,
							},
							{
								header: 'Status',
								key: 'paymentStatus',
								sortable: true,
								cell: (item) => (
									<Badge
										color={
											item.paymentStatus === 'Paid'
												? 'success'
												: item.paymentStatus === 'Pending'
													? 'warning'
													: 'danger'
										}
									>
										{item.paymentStatus}
									</Badge>
								),
							},
							{
								header: 'Method',
								key: 'paymentMethod',
								sortable: true,
							},
							{
								header: 'Amount',
								key: 'totalAmount',
								sortable: true,
								cell: (item) => (
									<span className="font-bold">{item.totalAmount}</span>
								),
							},
						]}
					/>
				</CardContent>
			</Card>
		</Grid>
	);
}
