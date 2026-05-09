'use client';

import React, { useRef } from 'react';
import {
	ContextMenu,
	ContextMenuItem,
} from '@stateless-studio/ui-react/components/overlay';
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from '@stateless-studio/ui-react/components/cards';
import { Heading } from '@stateless-studio/ui-react/components/typography';
import { Divider, Grid } from '@stateless-studio/ui-react/components/layout';

export default function ContextMenuPage() {
	const triggerRef = useRef<HTMLDivElement>(null);

	return (
		<div className="space-y-8">
			<Heading level={2}>Context Menu</Heading>
			<Grid>
				<Card>
					<CardHeader>
						<CardTitle>Basic Example</CardTitle>
					</CardHeader>
					<CardContent>
						<div
							ref={triggerRef}
							className="flex h-[150px] w-full items-center justify-center rounded-md border border-dashed text-sm"
						>
							Right click here
						</div>
						<ContextMenu triggerRef={triggerRef}>
							<ContextMenuItem>Back</ContextMenuItem>
							<ContextMenuItem disabled>Forward</ContextMenuItem>
							<ContextMenuItem>Reload</ContextMenuItem>
							<Divider />
							<ContextMenuItem>Save As...</ContextMenuItem>
							<ContextMenuItem>Print...</ContextMenuItem>
						</ContextMenu>
					</CardContent>
				</Card>
			</Grid>
		</div>
	);
}
