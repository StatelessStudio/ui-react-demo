'use client';

import React from 'react';
import { Heading } from '@stateless-studio/ui-react/components/typography';
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from '@stateless-studio/ui-react/components/cards';
import { Container, Stack } from '@stateless-studio/ui-react/components/layout';

const Placeholder = ({ children }: { children: React.ReactNode }) => (
	<div className="bg-primary/20 border border-primary text-white font-medium text-center p-4 rounded-md h-32 flex items-center justify-center">
		{children}
	</div>
);

export default function ContainerDemoPage() {
	return (
		<div className="space-y-8">
			<Heading level={2}>Container</Heading>
			<p className="text-muted-foreground">
				A layout element that centers your content horizontally, adds responsive
				padding, and constrains the maximum width based on predefined sizes.
			</p>

			<Card>
				<CardHeader>
					<CardTitle>Maximum Width Options</CardTitle>
				</CardHeader>
				<CardContent className="bg-muted/30 py-8 space-y-8 overflow-hidden rounded-md">
					<Stack gap="lg">
						<div>
							<p className="text-sm font-semibold text-muted-foreground mb-2 text-center">
								size=&quot;sm&quot; (Small)
							</p>
							<Container size="sm">
								<Placeholder>Content contained to max-w-screen-sm</Placeholder>
							</Container>
						</div>

						<div>
							<p className="text-sm font-semibold text-muted-foreground mb-2 text-center">
								size=&quot;md&quot; (Medium)
							</p>
							<Container size="md">
								<Placeholder>Content contained to max-w-screen-md</Placeholder>
							</Container>
						</div>

						<div>
							<p className="text-sm font-semibold text-muted-foreground mb-2 text-center">
								size=&quot;lg&quot; (Large - Default)
							</p>
							<Container size="lg">
								<Placeholder>Content contained to max-w-screen-lg</Placeholder>
							</Container>
						</div>

						<div>
							<p className="text-sm font-semibold text-muted-foreground mb-2 text-center">
								size=&quot;xl&quot; (Extra Large)
							</p>
							<Container size="xl">
								<Placeholder>Content contained to max-w-screen-xl</Placeholder>
							</Container>
						</div>

						<div>
							<p className="text-sm font-semibold text-muted-foreground mb-2 text-center">
								size=&quot;fluid&quot; (Full Width)
							</p>
							<Container size="fluid">
								<Placeholder>Content contained to 100% width</Placeholder>
							</Container>
						</div>
					</Stack>
				</CardContent>
			</Card>
		</div>
	);
}
