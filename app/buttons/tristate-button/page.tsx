'use client';

import {
	Button,
	TriStateButton,
} from '@stateless-studio/ui-react/components/buttons';
import { Heading } from '@stateless-studio/ui-react/components/typography';
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from '@stateless-studio/ui-react/components/cards';
import { Grid } from '@stateless-studio/ui-react/components/layout';
import { useState } from 'react';
import { Badge, Group, ToggleBadge } from '@stateless-studio/ui-react';

export default function TriStateButtonsPage() {
	const [state, setState] = useState<null | 'loading' | 'success' | 'error'>(
		null
	);

	const [simulateError, setSimulateError] = useState(false);

	function resetState() {
		setState(null);
	}

	function handleClick() {
		setState('loading');
		setTimeout(() => setState(simulateError ? 'error' : 'success'), 500);
	}

	return (
		<Grid>
			<div>
				<Heading level={1}>TriState Buttons</Heading>
				<p className="text-muted-foreground">
					Stateful button to indicate loading, success, and error states with
					built-in styles and icons.
				</p>
			</div>

			<Card>
				<CardHeader>
					<CardTitle level={2}>TriState Button</CardTitle>
				</CardHeader>
				<CardContent>
					<Heading level={3}>Options</Heading>
					<Group gap="md">
						<ToggleBadge
							color="accent"
							onCheckedChange={(checked) => setSimulateError(checked)}
						>
							Simulate Error
						</ToggleBadge>
						<Badge color="accent">Current State: {state || 'idle'}</Badge>
						<Button
							onClick={resetState}
							size="sm"
						>
							Reset State
						</Button>
					</Group>
					<Heading level={3}>Button Example</Heading>
					<Group className="mt-4">
						<TriStateButton
							state={state}
							size="md"
							onClick={() => handleClick()}
						>
							Test
						</TriStateButton>
					</Group>
				</CardContent>
			</Card>
		</Grid>
	);
}
