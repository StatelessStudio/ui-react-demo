'use client';

import React from 'react';
import { Heading } from '@stateless-studio/ui-react/components/typography';
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from '@stateless-studio/ui-react/components/cards';
import { Group, Stack } from '@stateless-studio/ui-react/components/layout';
import { Button } from '@stateless-studio/ui-react/components/buttons';
import { Badge } from '@stateless-studio/ui-react/components/feedback';

const Placeholder = ({ width }: { width: string }) => (
	<div
		className="bg-primary text-white text-sm flex items-center justify-center p-2 rounded-md shadow-sm"
		style={{ width }}
	>
		Item
	</div>
);

export default function GroupDemoPage() {
	return (
		<div className="space-y-8">
			<Heading level={2}>Group</Heading>
			<p className="text-muted-foreground">
				A layout primitive designed specifically for horizontally stacking
				elements that should naturally wrap onto the next line.
			</p>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				<Card>
					<CardHeader>
						<CardTitle>Basic Group</CardTitle>
					</CardHeader>
					<CardContent>
						<Group gap="md">
							<Button color="primary">Action One</Button>
							<Button color="secondary">Action Two</Button>
							<Button fill="ghost">Cancel</Button>
						</Group>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Wrapping Behavior</CardTitle>
					</CardHeader>
					<CardContent className="bg-muted/50 p-4 rounded-md">
						<Group gap="sm">
							<Placeholder width="120px" />
							<Placeholder width="150px" />
							<Placeholder width="100px" />
							<Placeholder width="200px" />
							<Placeholder width="180px" />
							<Placeholder width="140px" />
						</Group>
					</CardContent>
				</Card>
			</div>

			<Card>
				<CardHeader>
					<CardTitle>With Tags/Badges</CardTitle>
				</CardHeader>
				<CardContent>
					<Stack gap="md">
						<div className="text-sm font-medium text-muted-foreground">
							Tech Stack (start aligned)
						</div>
						<Group
							gap="xs"
							justify="start"
						>
							<Badge color="primary">React</Badge>
							<Badge color="primary">TypeScript</Badge>
							<Badge color="primary">Node.js</Badge>
							<Badge color="primary">Tailwind CSS</Badge>
							<Badge color="primary">Next.js</Badge>
						</Group>

						<div className="text-sm font-medium text-muted-foreground mt-4">
							Centered Tags
						</div>
						<Group
							gap="sm"
							justify="center"
						>
							<Badge color="secondary">UI/UX</Badge>
							<Badge color="secondary">Design Systems</Badge>
							<Badge color="secondary">Frontend</Badge>
						</Group>

						<div className="text-sm font-medium text-muted-foreground mt-4">
							Spread Aside
						</div>
						<Group
							gap="sm"
							justify="between"
						>
							<Badge>Left Tag</Badge>
							<Group gap="xs">
								<Badge>Docs</Badge>
								<Badge>Changelog</Badge>
							</Group>
						</Group>
					</Stack>
				</CardContent>
			</Card>
		</div>
	);
}
