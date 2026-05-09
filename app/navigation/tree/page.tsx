'use client';

import {
	Tree,
	TreeItem,
} from '@stateless-studio/ui-react/components/navigation';
import { Heading } from '@stateless-studio/ui-react/components/typography';
import {
	Card,
	CardHeader,
	CardTitle,
	CardContent,
} from '@stateless-studio/ui-react/components/cards';
import { Grid } from '@stateless-studio/ui-react/components/layout';

export default function TreePageDemo() {
	return (
		<Grid>
			<div>
				<Heading level={1}>Tree</Heading>
				<p className="text-muted-foreground">
					A hierarchical list that allows nodes to be expanded or collapsed.
				</p>
			</div>
			<Card>
				<CardHeader>
					<CardTitle level={2}>Tree Navigation</CardTitle>
				</CardHeader>
				<CardContent>
					<Tree>
						<TreeItem label="Dashboard" />
						<TreeItem
							label="Users"
							defaultExpanded
						>
							<TreeItem
								label="Admins"
								isActive={true}
							/>
							<TreeItem label="Customers">
								<TreeItem label="Active" />
								<TreeItem label="Inactive" />
							</TreeItem>
							<TreeItem label="Banned" />
						</TreeItem>
						<TreeItem label="Settings">
							<TreeItem label="Profile" />
							<TreeItem label="Billing" />
						</TreeItem>
					</Tree>
				</CardContent>
			</Card>
		</Grid>
	);
}
