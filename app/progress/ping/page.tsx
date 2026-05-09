'use client';

import { Heading } from '@stateless-studio/ui-react/components/typography';
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from '@stateless-studio/ui-react/components/cards';
import { Grid } from '@stateless-studio/ui-react/components/layout';
import { Ping } from '@stateless-studio/ui-react/components/progress';

export default function PingPage() {
	return (
		<div className="space-y-6">
			<Heading level={2}>Ping Overview</Heading>

			<Grid>
				<Card>
					<CardHeader>
						<CardTitle>Basic Usage</CardTitle>
					</CardHeader>
					<CardContent className="flex items-center gap-4">
						<Ping color="primary" />
						<Ping color="secondary" />
						<Ping color="success" />
						<Ping color="warning" />
						<Ping color="danger" />
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Sizes</CardTitle>
					</CardHeader>
					<CardContent className="flex items-center gap-6">
						<div className="flex flex-col items-center gap-2">
							<Ping size="sm" />
							<span className="text-sm text-muted-foreground">Small</span>
						</div>
						<div className="flex flex-col items-center gap-2">
							<Ping size="md" />
							<span className="text-sm text-muted-foreground">Medium</span>
						</div>
						<div className="flex flex-col items-center gap-2">
							<Ping size="lg" />
							<span className="text-sm text-muted-foreground">Large</span>
						</div>
					</CardContent>
				</Card>
			</Grid>
		</div>
	);
}
