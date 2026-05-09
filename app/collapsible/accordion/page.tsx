'use client';

import { useState } from 'react';
import { Heading } from '@stateless-studio/ui-react/components/typography';
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from '@stateless-studio/ui-react/components/cards';
import { Grid } from '@stateless-studio/ui-react/components/layout';
import { Accordion } from '@stateless-studio/ui-react/components/collapsible';

export default function AccordionPage() {
	const [controlledValue, setControlledValue] = useState<string>('item-2');

	const items = [
		{
			id: 'item-1',
			title: 'Is it accessible?',
			content:
				'Yes. It adheres to the WAI-ARIA design pattern natively using our Collapsible component.',
		},
		{
			id: 'item-2',
			title: 'Is it styled?',
			content:
				'Yes. It comes with default Tailwind CSS styles that match the other components in Stateless Studio.',
		},
		{
			id: 'item-3',
			title: 'Is it animated?',
			content: 'Yes. Sections slide up and down elegantly by default.',
		},
		{
			id: 'item-4',
			title: 'Can it be disabled?',
			content:
				'Yes, this particular item is disabled so you should not see this.',
			disabled: true,
		},
	];

	return (
		<div className="space-y-6">
			<Heading level={2}>Accordion</Heading>

			<Grid>
				<Card>
					<CardHeader>
						<CardTitle>Single Selection</CardTitle>
					</CardHeader>
					<CardContent>
						<Accordion
							type="single"
							items={items}
							defaultValue="item-1"
						/>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Multiple Selection</CardTitle>
					</CardHeader>
					<CardContent>
						<Accordion
							type="multiple"
							items={items}
							defaultValue={['item-1', 'item-3']}
						/>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Controlled (Single)</CardTitle>
					</CardHeader>
					<CardContent className="space-y-4">
						<Accordion
							type="single"
							items={items}
							value={controlledValue}
							onValueChange={setControlledValue}
						/>
						<p className="text-sm text-muted-foreground">
							Currently selected: {controlledValue || 'none'}
						</p>
					</CardContent>
				</Card>
			</Grid>
		</div>
	);
}
