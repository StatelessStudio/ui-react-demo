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
import { Popover } from '@stateless-studio/ui-react/components/overlay';
import { Button } from '@stateless-studio/ui-react/components/buttons';

export default function PopoverPage() {
	return (
		<Grid>
			<div>
				<Heading level={1}>Popover</Heading>
				<p>
					A popover is a floating element paired with a reference element that
					can be toggled by a click.
				</p>
			</div>
			<GridItem colSpan={2}>
				<Card>
					<CardHeader>
						<CardTitle>Basic Usage</CardTitle>
						<CardDescription>
							Click the button to toggle the popover content.
						</CardDescription>
					</CardHeader>
					<CardContent className="flex items-center justify-center py-12">
						<Popover
							trigger={<Button>Click me</Button>}
							position="bottom"
						>
							<div className="p-2">
								<h4 className="font-semibold mb-1">Popover Content</h4>
								<p className="text-sm">
									This is some more detailed content inside a popover.
								</p>
							</div>
						</Popover>
					</CardContent>
				</Card>
			</GridItem>

			<GridItem colSpan={2}>
				<Card>
					<CardHeader>
						<CardTitle>Positions</CardTitle>
						<CardDescription>
							Popovers can appear in different positions relative to the trigger
							element.
						</CardDescription>
					</CardHeader>
					<CardContent className="flex flex-wrap gap-8 items-center justify-center py-16">
						<Popover
							position="top"
							trigger={<Button color="secondary">Top</Button>}
						>
							This appears on top of the trigger.
						</Popover>

						<Popover
							position="bottom"
							trigger={<Button color="secondary">Bottom</Button>}
						>
							This appears on the bottom.
						</Popover>

						<Popover
							position="left"
							trigger={<Button color="secondary">Left</Button>}
						>
							This appears on the left.
						</Popover>

						<Popover
							position="right"
							trigger={<Button color="secondary">Right</Button>}
						>
							This appears on the right.
						</Popover>
					</CardContent>
				</Card>
			</GridItem>
		</Grid>
	);
}
