'use client';

import { useState } from 'react';
import { Heading } from '@stateless-studio/ui-react/components/typography';
import { Button } from '@stateless-studio/ui-react/components/buttons';
import {
	Drawer,
	DrawerHeader,
	DrawerTitle,
	DrawerContent,
	DrawerFooter,
} from '@stateless-studio/ui-react/components/overlay';
import { Grid, GridItem } from '@stateless-studio/ui-react/components/layout';

export default function DrawerPage() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<Grid>
			<div>
				<Heading level={1}>Drawer</Heading>
				<p className="text-foreground">
					A panel that slides in from the edge of the screen.
				</p>
			</div>
			<GridItem>
				<div className="flex gap-4 p-6 bg-background rounded-lg shadow-sm border border-muted">
					<Button onClick={() => setIsOpen(true)}>Open Drawer</Button>
				</div>
			</GridItem>

			<Drawer
				isOpen={isOpen}
				onClose={() => setIsOpen(false)}
			>
				<DrawerHeader>
					<DrawerTitle>Drawer Title</DrawerTitle>
				</DrawerHeader>
				<DrawerContent>
					<p>
						This drawer opens from the right side of the screen, staying out of
						the way of the left sidebar.
					</p>
					<br />
					<p>
						You can put any content here, including forms, lists, or settings
						panels.
					</p>
				</DrawerContent>
				<DrawerFooter>
					<Button
						color="muted"
						onClick={() => setIsOpen(false)}
					>
						Cancel
					</Button>
					<Button onClick={() => setIsOpen(false)}>Save</Button>
				</DrawerFooter>
			</Drawer>
		</Grid>
	);
}
