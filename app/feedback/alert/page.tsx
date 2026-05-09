'use client';

import { Heading } from '@stateless-studio/ui-react/components/typography';
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from '@stateless-studio/ui-react/components/cards';
import { Alert } from '@stateless-studio/ui-react/components/feedback';
import { Grid } from '@stateless-studio/ui-react/components/layout';

export default function AlertPage() {
	return (
		<Grid>
			<div>
				<Heading level={1}>Alert</Heading>
				<p className="text-muted-foreground">
					Messages that require user&apos;s attention.
				</p>
			</div>
			<Card>
				<CardHeader>
					<CardTitle level={2}>Variants</CardTitle>
				</CardHeader>
				<CardContent className="flex flex-col gap-4">
					<Alert
						color="primary"
						title="Primary Alert"
					>
						This is a primary alert.
					</Alert>
					<Alert
						color="secondary"
						title="Secondary Alert"
					>
						This is a secondary alert.
					</Alert>
					<Alert title="Default Alert">
						This uses the default info variant.
					</Alert>
					<Alert
						color="accent"
						title="Accent Alert"
					>
						This is a accent alert.
					</Alert>
					<Alert
						color="muted"
						title="Muted Alert"
					>
						This is a muted alert.
					</Alert>
					<Alert
						color="success"
						title="Success Alert"
					>
						Your action was completed successfully!
					</Alert>
					<Alert
						color="warning"
						title="Warning Alert"
					>
						Please be careful before proceeding with this action.
					</Alert>
					<Alert
						color="danger"
						title="Danger Alert"
					>
						There was a severe error processing your request.
					</Alert>
					<Alert
						color="info"
						title="Info Alert"
					>
						This is a standard informational alert.
					</Alert>
					<Alert
						color="gradient"
						title="Gradient Alert"
					>
						This alert looks very colorful and vibrant!
					</Alert>
				</CardContent>
			</Card>
		</Grid>
	);
}
