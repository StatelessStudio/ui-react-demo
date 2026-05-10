'use client';

import { TriStateButton } from '@stateless-studio/ui-react/components/buttons';
import { Heading } from '@stateless-studio/ui-react/components/typography';
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from '@stateless-studio/ui-react/components/cards';
import { Grid } from '@stateless-studio/ui-react/components/layout';
import { useState } from 'react';
import { ToggleBadge } from '@stateless-studio/ui-react';

export default function TriStateButtonsPage() {
	const [state, setState] = useState<null | 'loading' | 'success' | 'error'>(
		null
	);

	const [simulateError, setSimulateError] = useState(false);

	function handleClick() {
		setState('loading');
		setTimeout(() => setState(simulateError ? 'error' : 'success'), 500);
	}

	return (
		<Grid>
			<div>
				<Heading level={1}>TriState Buttons</Heading>
				<p className="text-muted-foreground">
					Interactive elements that trigger actions and events.
				</p>
			</div>

			<Card>
				<CardHeader>
					<CardTitle level={2}>Colors</CardTitle>
				</CardHeader>
				<CardContent>
					<div>
						<ToggleBadge
							color="danger"
							onCheckedChange={(checked) => setSimulateError(checked)}
						>
							Simulate Error
						</ToggleBadge>
						<br />
						<br />
						<TriStateButton
							state={state}
							size="md"
							onClick={() => handleClick()}
						>
							Test
						</TriStateButton>
					</div>
				</CardContent>
			</Card>
		</Grid>
	);
}
