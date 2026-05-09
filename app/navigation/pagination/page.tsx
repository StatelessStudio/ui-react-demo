'use client';

import { useState } from 'react';
import { Pagination } from '@stateless-studio/ui-react/components/navigation';
import { Heading } from '@stateless-studio/ui-react/components/typography';
import {
	Card,
	CardHeader,
	CardTitle,
	CardContent,
} from '@stateless-studio/ui-react/components/cards';
import { Grid } from '@stateless-studio/ui-react/components/layout';

export default function PaginationPageDemo() {
	const [currentPage, setCurrentPage] = useState<number>(5);

	return (
		<Grid>
			<div>
				<Heading level={1}>Pagination</Heading>
				<p className="text-muted-foreground">
					Pagination with page navigation, next and previous links.
				</p>
			</div>
			<Card>
				<CardHeader>
					<CardTitle level={2}>Basic Pagination</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="flex flex-col gap-8">
						<div>
							<Heading level={4}>Standard (Few pages)</Heading>
							<Pagination
								currentPage={3}
								totalPages={5}
								onPageChange={(page) => console.log('Page change:', page)}
							/>
						</div>

						<div>
							<Heading level={4}>Truncated (Many pages)</Heading>
							<Pagination
								currentPage={currentPage}
								totalPages={50}
								onPageChange={setCurrentPage}
							/>
						</div>
					</div>
				</CardContent>
			</Card>
		</Grid>
	);
}
