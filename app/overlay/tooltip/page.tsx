'use client';

import { Heading } from '@stateless-studio/ui-react/components/typography';
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	CardDescription,
} from '@stateless-studio/ui-react/components/cards';
import { Grid, GridItem } from '@stateless-studio/ui-react/components/layout';
import { Tooltip } from '@stateless-studio/ui-react/components/overlay';
import { Button } from '@stateless-studio/ui-react/components/buttons';

export default function TooltipPage() {
	return (
		<Grid>
			<div>
				<Heading level={1}>Tooltip</Heading>
				<p className="text-muted-foreground">
					A pop-up that displays information related to an element when the
					element receives keyboard focus or the mouse hovers over it.
				</p>
			</div>
			<GridItem colSpan={2}>
				<Card>
					<CardHeader>
						<CardTitle>Basic Usage</CardTitle>
						<CardDescription>
							Hover over the button to see the tooltip.
						</CardDescription>
					</CardHeader>
					<CardContent className="flex items-center justify-center py-12">
						<Tooltip content="This is a simple tooltip message">
							<Button>Hover me</Button>
						</Tooltip>
					</CardContent>
				</Card>
			</GridItem>

			<GridItem colSpan={2}>
				<Card>
					<CardHeader>
						<CardTitle>Positions</CardTitle>
						<CardDescription>
							Tooltips can be positioned around the trigger element.
						</CardDescription>
					</CardHeader>
					<CardContent className="flex flex-wrap gap-8 items-center justify-center py-16">
						<Tooltip
							content="Top tooltip"
							position="top"
						>
							<Button color="secondary">Top</Button>
						</Tooltip>
						<Tooltip
							content="Bottom tooltip"
							position="bottom"
						>
							<Button color="secondary">Bottom</Button>
						</Tooltip>
						<Tooltip
							content="Left tooltip"
							position="left"
						>
							<Button color="secondary">Left</Button>
						</Tooltip>
						<Tooltip
							content="Right tooltip"
							position="right"
						>
							<Button color="secondary">Right</Button>
						</Tooltip>
					</CardContent>
				</Card>
			</GridItem>
		</Grid>
	);
}
