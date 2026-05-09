'use client';

import { Heading } from '@stateless-studio/ui-react/components/typography';
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from '@stateless-studio/ui-react/components/cards';
import { Spinner } from '@stateless-studio/ui-react/components/progress';
import { Grid } from '@stateless-studio/ui-react/components/layout';

export default function SpinnerPage() {
	return (
		<Grid>
			<div>
				<Heading level={1}>Spinner</Heading>
				<p className="text-muted-foreground">
					An animated spinning icon to indicate loading state.
				</p>
			</div>
			<Card>
				<CardHeader>
					<CardTitle level={2}>Colors</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="flex flex-wrap gap-8 items-center p-4 rounded">
						<Spinner
							size="md"
							color="primary"
						/>
						<Spinner
							size="md"
							color="secondary"
						/>
						<Spinner
							size="md"
							color="accent"
						/>
						<Spinner
							size="md"
							color="muted"
						/>
						<Spinner
							size="md"
							color="success"
						/>
						<Spinner
							size="md"
							color="warning"
						/>
						<Spinner
							size="md"
							color="danger"
						/>
						<Spinner
							size="md"
							color="info"
						/>
					</div>
				</CardContent>
			</Card>
			<Card>
				<CardHeader>
					<CardTitle level={2}>Sizes</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="flex flex-wrap gap-8 items-center p-4 rounded">
						<Spinner
							size="sm"
							color="primary"
						/>
						<Spinner
							size="md"
							color="primary"
						/>
						<Spinner
							size="lg"
							color="primary"
						/>
						<Spinner
							size="xl"
							color="primary"
						/>
					</div>
				</CardContent>
			</Card>
		</Grid>
	);
}
