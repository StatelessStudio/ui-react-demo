'use client';

import { Heading } from '@stateless-studio/ui-react/components/typography';
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from '@stateless-studio/ui-react/components/cards';
import { Grid, GridItem } from '@stateless-studio/ui-react/components/layout';

export default function LayoutPage() {
	return (
		<Grid>
			<div>
				<Heading level={1}>Grid</Heading>
				<p className="text-muted-foreground">
					A layout system providing structured dimensions for content.
				</p>
			</div>
			<Card>
				<CardHeader>
					<CardTitle level={2}>Basic 3-Column Grid</CardTitle>
				</CardHeader>
				<CardContent>
					<Grid
						cols={{ sm: 2, lg: 3 }}
						gap={4}
					>
						<div className="bg-blue-100 text-blue-800 p-4 rounded text-center">
							Column 1
						</div>
						<div className="bg-blue-100 text-blue-800 p-4 rounded text-center">
							Column 2
						</div>
						<div className="bg-blue-100 text-blue-800 p-4 rounded text-center">
							Column 3
						</div>
					</Grid>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle level={2}>Grid Items & Spans</CardTitle>
				</CardHeader>
				<CardContent>
					<Grid
						cols={{ sm: 2, lg: 4 }}
						gap={4}
					>
						<GridItem
							colSpan={{ lg: 4 }}
							className="bg-purple-100 text-purple-800 p-4 rounded text-center font-semibold"
						>
							Dashboard Overview (span 4)
						</GridItem>
						<GridItem
							colSpan={{ sm: 2, lg: 1 }}
							className="bg-green-100 text-green-800 p-4 rounded text-center h-32 flex items-center justify-center"
						>
							Quick Links (span 1)
						</GridItem>
						<GridItem
							colSpan={{ lg: 3 }}
							className="bg-orange-100 text-orange-800 p-4 rounded text-center h-32 flex items-center justify-center"
						>
							Activity Chart (span 3)
						</GridItem>
						<GridItem
							colSpan={{ md: 2 }}
							className="bg-pink-100 text-pink-800 p-4 rounded text-center"
						>
							Recent Invoices (span 2)
						</GridItem>
						<GridItem
							colSpan={{ md: 2 }}
							className="bg-pink-100 text-pink-800 p-4 rounded text-center"
						>
							Support Tickets (span 2)
						</GridItem>
					</Grid>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle level={2}>Different Gaps</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="space-y-6">
						<div>
							<Heading level={3}>Gap: 1</Heading>
							<Grid
								cols={{ sm: 2, lg: 4 }}
								gap={1}
							>
								{Array.from({ length: 4 }).map((_, i) => (
									<div
										key={i}
										className="bg-muted p-2 rounded text-center"
									>
										{i + 1}
									</div>
								))}
							</Grid>
						</div>
						<div>
							<Heading level={3}>Gap: 8</Heading>
							<Grid
								cols={{ sm: 2, lg: 4 }}
								gap={8}
							>
								{Array.from({ length: 4 }).map((_, i) => (
									<div
										key={i}
										className="bg-muted p-4 rounded text-center"
									>
										{i + 1}
									</div>
								))}
							</Grid>
						</div>
					</div>
				</CardContent>
			</Card>
		</Grid>
	);
}
