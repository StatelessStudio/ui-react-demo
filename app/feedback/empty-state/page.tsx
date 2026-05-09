'use client';

import { Heading } from '@stateless-studio/ui-react/components/typography';
import { Button } from '@stateless-studio/ui-react/components/buttons';
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from '@stateless-studio/ui-react/components/cards';
import { EmptyState } from '@stateless-studio/ui-react/components/feedback';
import { Grid } from '@stateless-studio/ui-react/components/layout';

export default function EmptyStatePage() {
	return (
		<Grid>
			<div>
				<Heading level={1}>Empty State</Heading>
				<p className="text-muted-foreground">
					Placeholder content when there is no data to display.
				</p>
			</div>
			<Card>
				<CardHeader>
					<CardTitle level={2}>Basic Empty State</CardTitle>
				</CardHeader>
				<CardContent>
					<EmptyState
						title="No items found"
						description="Get started by creating a new item."
						action={<Button>Create Item</Button>}
					/>
				</CardContent>
			</Card>
		</Grid>
	);
}
