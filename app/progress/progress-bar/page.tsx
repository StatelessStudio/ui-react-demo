'use client';

import { useState, useEffect } from 'react';
import { Heading } from '@stateless-studio/ui-react/components/typography';
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from '@stateless-studio/ui-react/components/cards';
import { ProgressBar } from '@stateless-studio/ui-react/components/progress';
import { Grid, Stack } from '@stateless-studio/ui-react/components/layout';

export default function ProgressPage() {
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setProgress((prev) => (prev > 100 ? 0 : prev + 10));
		}, 500);
		return () => clearInterval(interval);
	}, []);

	return (
		<Grid>
			<div>
				<Heading level={1}>Progress</Heading>
				<p className="text-muted-foreground">
					An indicator showing the completion progress of a task.
				</p>
			</div>
			<Card>
				<CardHeader>
					<CardTitle level={2}>Colors</CardTitle>
				</CardHeader>
				<CardContent className="flex flex-col gap-6 bg-muted/5 p-4 rounded">
					<ProgressBar
						value={progress}
						color="primary"
					/>
					<ProgressBar
						value={(progress + 10) % 100}
						color="secondary"
					/>
					<ProgressBar
						value={(progress + 30) % 100}
						color="accent"
					/>
					<ProgressBar
						value={(progress + 40) % 100}
						color="muted"
					/>
					<ProgressBar
						value={(progress + 50) % 100}
						color="success"
					/>
					<ProgressBar
						value={(progress + 60) % 100}
						color="warning"
					/>
					<ProgressBar
						value={(progress + 70) % 100}
						color="danger"
					/>
					<ProgressBar
						value={(progress + 80) % 100}
						color="info"
					/>
					<ProgressBar
						value={(progress + 90) % 100}
						color="gradient"
					/>
				</CardContent>
			</Card>
			<Card>
				<CardHeader>
					<CardTitle level={2}>Sizes</CardTitle>
				</CardHeader>
				<CardContent className="flex flex-col gap-6 bg-muted/5 p-4 rounded">
					<ProgressBar
						value={progress}
						size="sm"
					/>
					<ProgressBar
						value={progress}
						size="md"
					/>
					<ProgressBar
						value={progress}
						size="lg"
					/>
				</CardContent>
			</Card>
			<Card>
				<CardHeader>
					<CardTitle level={2}>Orientation</CardTitle>
				</CardHeader>
				<CardContent>
					<Stack gap="lg">
						<div>
							<p>Horizontal (default)</p>
							<ProgressBar
								value={progress}
								orientation="horizontal"
							/>
						</div>
						<div>
							<p>Vertical</p>
							<ProgressBar
								value={progress}
								orientation="vertical"
								className="h-[120px] w-[10px]"
							/>
						</div>
					</Stack>
				</CardContent>
			</Card>
			<Card>
				<CardHeader>
					<CardTitle level={2}>Direction</CardTitle>
				</CardHeader>
				<CardContent>
					<Stack gap="lg">
						<div>
							<p>Reverse (Horizontal)</p>
							<ProgressBar
								value={progress}
								orientation="horizontal"
								direction="reverse"
							/>
						</div>
						<div>
							<p>Reverse (Vertical)</p>
							<ProgressBar
								value={progress}
								orientation="vertical"
								direction="reverse"
								className="h-[120px] w-[10px]"
							/>
						</div>
					</Stack>
				</CardContent>
			</Card>
		</Grid>
	);
}
