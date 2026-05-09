'use client';

import {
	PageHeading,
	Grid,
} from '@stateless-studio/ui-react/components/layout';
import { Button } from '@stateless-studio/ui-react/components/buttons';
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from '@stateless-studio/ui-react/components/cards';

export default function PageHeadingDemo() {
	return (
		<Grid>
			<div>
				<PageHeading
					title="Page Heading Component"
					subtitle="Review the two examples below of how to use the Page Heading component."
				/>
			</div>

			<Card>
				<CardHeader>
					<CardTitle level={2}>Example 1: Basic with Actions</CardTitle>
				</CardHeader>
				<CardContent>
					<PageHeading
						title="Dashboard"
						subtitle="Welcome back, here's what's happening today."
						actions={<Button color="primary">Create Report</Button>}
					/>
					<div className="h-32 border-2 border-dashed border-muted rounded-md flex items-center justify-center text-muted-foreground">
						Page Content
					</div>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle level={2}>
						Example 2: Multiple Actions & Custom Elements
					</CardTitle>
				</CardHeader>
				<CardContent>
					<PageHeading
						title={
							<div className="flex items-center gap-3">
								<div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">
									P
								</div>
								<span>Project Settings</span>
							</div>
						}
						subtitle="Manage your project configuration and preferences here."
						actions={
							<>
								<Button
									color="secondary"
									fill="outline"
								>
									Cancel
								</Button>
								<Button color="primary">Save Changes</Button>
							</>
						}
					/>
					<div className="h-32 border-2 border-dashed border-muted rounded-md flex items-center justify-center text-muted-foreground mt-4">
						Page Content
					</div>
				</CardContent>
			</Card>
		</Grid>
	);
}
