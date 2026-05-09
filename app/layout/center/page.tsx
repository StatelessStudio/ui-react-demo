'use client';

import React from 'react';
import { Heading } from '@stateless-studio/ui-react/components/typography';
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from '@stateless-studio/ui-react/components/cards';
import { Center, Stack } from '@stateless-studio/ui-react/components/layout';

export default function CenterDemoPage() {
	return (
		<div className="space-y-8">
			<Heading level={2}>Center</Heading>
			<p className="text-muted-foreground">
				A utility component that perfectly centers its content both horizontally
				and vertically.
			</p>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				<Card>
					<CardHeader>
						<CardTitle>Basic Usage</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="h-48 border rounded-md border-dashed">
							<Center className="h-full w-full">
								<div className="bg-primary text-white p-4 rounded-md shadow-sm">
									Centered Content
								</div>
							</Center>
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>In Empty States or Loading</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="h-48 border rounded-md bg-primary/10">
							<Center className="h-full w-full text-foreground">
								<Stack
									gap="sm"
									className="items-center"
								>
									<span className="text-sm">Loading Data...</span>
								</Stack>
							</Center>
						</div>
					</CardContent>
				</Card>
			</div>

			<Card>
				<CardHeader>
					<CardTitle>Using with semantic HTML tags</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="h-32 border rounded-md bg-primary/10">
						<Center
							as="section"
							className="h-full w-full"
						>
							<p className="font-medium text-accent-foreground text-lg">
								Beautifully Centered &lt;section&gt;
							</p>
						</Center>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
