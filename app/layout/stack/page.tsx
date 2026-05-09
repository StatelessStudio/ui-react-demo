'use client';

import React from 'react';
import { Heading } from '@stateless-studio/ui-react/components/typography';
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from '@stateless-studio/ui-react/components/cards';
import { Stack, Divider } from '@stateless-studio/ui-react/components/layout';
import { cn } from '@stateless-studio/ui-react/style-engine';

const Box = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => (
	<div
		className={cn('p-4 bg-primary text-white rounded-md shadow-sm ', className)}
	>
		{children}
	</div>
);

export default function StackDemoPage() {
	return (
		<div className="space-y-8">
			<Heading level={2}>Stack</Heading>
			<p className="text-muted-foreground">
				A layout component specifically designed for vertical stacking of
				elements with uniform pacing.
			</p>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				<Card>
					<CardHeader>
						<CardTitle>Basic Stack</CardTitle>
					</CardHeader>
					<CardContent>
						<Stack gap="md">
							<Box>Item 1</Box>
							<Box>Item 2</Box>
							<Box>Item 3</Box>
						</Stack>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Semantic Structure</CardTitle>
					</CardHeader>
					<CardContent>
						<Stack
							as="ul"
							gap="sm"
						>
							<li className="p-2 border rounded-md">List Item 1</li>
							<li className="p-2 border rounded-md">List Item 2</li>
							<li className="p-2 border rounded-md">List Item 3</li>
						</Stack>
					</CardContent>
				</Card>
			</div>

			<Card>
				<CardHeader>
					<CardTitle>Gap Sizes</CardTitle>
				</CardHeader>
				<CardContent className="space-y-8">
					<Stack gap="xs">
						<div className="text-sm font-bold text-muted-foreground">
							gap=&quot;xs&quot;
						</div>
						<Box>A</Box>
						<Box>B</Box>
					</Stack>
					<Divider />
					<Stack gap="lg">
						<div className="text-sm font-bold text-muted-foreground">
							gap=&quot;lg&quot;
						</div>
						<Box>A</Box>
						<Box>B</Box>
					</Stack>
				</CardContent>
			</Card>
		</div>
	);
}
