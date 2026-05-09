'use client';

import { Heading } from '@stateless-studio/ui-react/components/typography';
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from '@stateless-studio/ui-react/components/cards';
import { Badge } from '@stateless-studio/ui-react/components/feedback';
import { Grid } from '@stateless-studio/ui-react/components/layout';

export default function BadgePage() {
	return (
		<Grid>
			<div>
				<Heading level={1}>Badge</Heading>
				<p className="text-muted-foreground">
					Small status indicators for highlighting items.
				</p>
			</div>
			<Card>
				<CardHeader>
					<CardTitle level={2}>Colors</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="flex flex-wrap gap-4 items-center">
						<Badge color="primary">Primary</Badge>
						<Badge color="secondary">Secondary</Badge>
						<Badge color="accent">Accent</Badge>
						<Badge color="muted">Muted</Badge>
						<Badge color="success">Success</Badge>
						<Badge color="warning">Warning</Badge>
						<Badge color="danger">Danger</Badge>
						<Badge color="info">Info</Badge>
						<Badge color="gradient">Gradient</Badge>
					</div>
				</CardContent>
			</Card>
		</Grid>
	);
}
