'use client';

import { Heading } from '@stateless-studio/ui-react/components/typography';
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from '@stateless-studio/ui-react/components/cards';
import { Grid } from '@stateless-studio/ui-react/components/layout';
import { Collapsible } from '@stateless-studio/ui-react/components/collapsible';

export default function CollapsiblePage() {
	return (
		<div className="space-y-6">
			<Heading level={2}>Collapsible</Heading>

			<Grid>
				<Card>
					<CardHeader>
						<CardTitle>Basic Usage</CardTitle>
					</CardHeader>
					<CardContent className="space-y-4">
						<Collapsible title="Account Settings">
							Configure your email, notifications, and password preferences
							here.
						</Collapsible>

						<Collapsible
							title="How to integrate the component?"
							defaultOpen
						>
							Simply import the `Collapsible` component from `layout` and pass a
							title and children.
						</Collapsible>

						<Collapsible
							title="Disabled Variant"
							disabled
						>
							You cannot open this content.
						</Collapsible>
					</CardContent>
				</Card>
			</Grid>
		</div>
	);
}
