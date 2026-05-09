'use client';

import { Heading } from '@stateless-studio/ui-react/components/typography';
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from '@stateless-studio/ui-react/components/cards';
import { Grid, GridItem } from '@stateless-studio/ui-react/components/layout';
import { Divider } from '@stateless-studio/ui-react/components/layout';

export default function DividerPage() {
	return (
		<Grid>
			<div>
				<Heading level={1}>Divider</Heading>
				<p className="text-muted-foreground">
					A divider that separates content horizontally or vertically.
				</p>
				<Divider />
			</div>
			<GridItem>
				<Card>
					<CardHeader>
						<CardTitle>Horizontal Divider</CardTitle>
					</CardHeader>
					<CardContent>
						<p className="text-slate-600">Content before the divider.</p>
						<Divider />
						<p className="text-slate-600">Content after the divider.</p>
					</CardContent>
				</Card>
			</GridItem>

			<GridItem>
				<Card>
					<CardHeader>
						<CardTitle>Vertical Divider</CardTitle>
					</CardHeader>
					<CardContent className="flex items-center">
						<span className="text-slate-600">Item 1</span>
						<Divider orientation="vertical" />
						<span className="text-slate-600">Item 2</span>
						<Divider orientation="vertical" />
						<span className="text-slate-600">Item 3</span>
					</CardContent>
				</Card>
			</GridItem>
		</Grid>
	);
}
