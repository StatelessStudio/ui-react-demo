'use client';

import React from 'react';
import { Heading } from '@stateless-studio/ui-react/components/typography';
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from '@stateless-studio/ui-react/components/cards';
import { Flex } from '@stateless-studio/ui-react/components/layout';
import { cn } from '@stateless-studio/ui-react/style-engine';

const Box = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => (
	<div
		className={cn('p-4 bg-primary text-white rounded-md shadow-sm', className)}
	>
		{children}
	</div>
);

export default function FlexDemoPage() {
	return (
		<div className="space-y-8">
			<Heading level={2}>Flex</Heading>
			<p className="text-muted-foreground">
				A primitive layout component used to distribute space and align content
				using Flexbox.
			</p>

			<div className="grid grid-cols-1 gap-8">
				<Card>
					<CardHeader>
						<CardTitle>Basic Usage</CardTitle>
					</CardHeader>
					<CardContent>
						<Flex gap="md">
							<Box>Item 1</Box>
							<Box>Item 2</Box>
							<Box>Item 3</Box>
						</Flex>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Justify</CardTitle>
					</CardHeader>
					<CardContent className="space-y-4">
						<Flex
							justify="start"
							gap="sm"
							className="bg-muted p-4 rounded-md"
						>
							<Box>Start</Box>
							<Box>Start</Box>
						</Flex>
						<Flex
							justify="center"
							gap="sm"
							className="bg-muted p-4 rounded-md"
						>
							<Box>Center</Box>
							<Box>Center</Box>
						</Flex>
						<Flex
							justify="between"
							gap="sm"
							className="bg-muted p-4 rounded-md"
						>
							<Box>Between</Box>
							<Box>Between</Box>
						</Flex>
						<Flex
							justify="end"
							gap="sm"
							className="bg-muted p-4 rounded-md"
						>
							<Box>End</Box>
							<Box>End</Box>
						</Flex>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Direction</CardTitle>
					</CardHeader>
					<CardContent>
						<Flex
							direction="col"
							gap="sm"
						>
							<Box>Row 1</Box>
							<Box>Row 2</Box>
							<Box>Row 3</Box>
						</Flex>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
