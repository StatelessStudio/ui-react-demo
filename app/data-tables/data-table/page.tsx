'use client';

import { useState, useEffect, useCallback } from 'react';
import { Card, CardContent } from '@stateless-studio/ui-react/components/cards';
import { Badge } from '@stateless-studio/ui-react/components/feedback';
import { Input } from '@stateless-studio/ui-react/components/forms';
import {
	DataTable,
	TableState,
} from '@stateless-studio/ui-react/components/data-tables';

import {
	PageHeading,
	Grid,
} from '@stateless-studio/ui-react/components/layout';

const initialInvoices = [
	{
		invoice: 'INV001',
		paymentStatus: 'Paid',
		totalAmount: '$250.00',
		paymentMethod: 'Credit Card',
	},
	{
		invoice: 'INV002',
		paymentStatus: 'Pending',
		totalAmount: '$150.00',
		paymentMethod: 'PayPal',
	},
	{
		invoice: 'INV003',
		paymentStatus: 'Unpaid',
		totalAmount: '$350.00',
		paymentMethod: 'Bank Transfer',
	},
	{
		invoice: 'INV004',
		paymentStatus: 'Paid',
		totalAmount: '$450.00',
		paymentMethod: 'Credit Card',
	},
	{
		invoice: 'INV005',
		paymentStatus: 'Paid',
		totalAmount: '$550.00',
		paymentMethod: 'PayPal',
	},
];

export default function DataTablePage() {
	const [searchTerm, setSearchTerm] = useState('');
	const [tableState, setTableState] = useState<TableState>({
		page: 1,
		pageSize: 2,
		sortKey: undefined,
		sortDirection: 'asc',
	});

	const [isLoading, setIsLoading] = useState(true);
	const [data, setData] = useState<typeof initialInvoices>([]);
	const [totalPages, setTotalPages] = useState(1);

	const fetchInvoices = useCallback(
		(
			query: string,
			sortKey?: string,
			sortDirection?: 'asc' | 'desc',
			page: number = 1,
			pageSize: number = 2
		) => {
			setIsLoading(true);
			// Mocking an async backend fetch request
			setTimeout(() => {
				let result = initialInvoices.filter((invoice) =>
					invoice.invoice.toLowerCase().includes(query.toLowerCase())
				);

				if (sortKey) {
					result = [...result].sort((a, b) => {
						const valA = (a as Record<string, string>)[sortKey];
						const valB = (b as Record<string, string>)[sortKey];

						if (valA < valB) {
							return sortDirection === 'asc' ? -1 : 1;
						}
						if (valA > valB) {
							return sortDirection === 'asc' ? 1 : -1;
						}
						return 0;
					});
				}

				const total = Math.ceil(result.length / pageSize);
				setTotalPages(Math.max(1, total));

				const startIndex = (page - 1) * pageSize;
				result = result.slice(startIndex, startIndex + pageSize);

				setData(result);
				setIsLoading(false);
			}, 800);
		},
		[]
	);

	useEffect(() => {
		const timer = setTimeout(
			() => {
				fetchInvoices(
					searchTerm,
					tableState.sortKey,
					tableState.sortDirection,
					tableState.page,
					tableState.pageSize
				);
			},
			searchTerm ? 300 : 0
		);

		return () => clearTimeout(timer);
	}, [searchTerm, tableState, fetchInvoices]);

	return (
		<Grid>
			<PageHeading
				title="Data Table"
				subtitle="An advanced data table component with sorting, pagination, and loading states."
				actions={
					<Input
						type="search"
						placeholder="Search invoices..."
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
					/>
				}
			/>
			<Card>
				<CardContent className="p-0">
					<DataTable
						data={data}
						isLoading={isLoading}
						state={tableState}
						onStateChange={(newState) => setTableState(newState)}
						pagination={{
							totalPages,
							pageSizeOptions: [2, 5, 10],
						}}
						columns={[
							{
								header: 'Invoice',
								key: 'invoice',
								sortable: true,
								className: 'w-[1%] whitespace-nowrap bg-primary/5 font-medium',
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
