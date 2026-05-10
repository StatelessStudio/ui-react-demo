'use client';

import { useState } from 'react';
import { Heading } from '@stateless-studio/ui-react/components/typography';
import {
	ToggleGroup,
	ToggleGroupItem,
} from '@stateless-studio/ui-react/components/buttons';
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from '@stateless-studio/ui-react/components/cards';
import { TriState } from '@stateless-studio/ui-react/components/progress';
import { Flex, Grid } from '@stateless-studio/ui-react/components/layout';

export default function TriStatePage() {
	const [state, setState] = useState<'loading' | 'success' | 'error'>(
		'loading'
	);

	return (
		<Grid>
			<div>
				<Heading level={1}>TriState</Heading>
				<p className="text-muted-foreground">
					An animated icon set to indicate loading, success, or error states.
				</p>
			</div>
			<Card>
				<CardHeader>
					<CardTitle level={2}>Sample</CardTitle>
				</CardHeader>
				<CardContent>
					<Flex
						gap="sm"
						className="mt-4"
					>
						<ToggleGroup
							type="single"
							value={state}
							onValueChange={(val) => {
								if (val) {
									setState(val as 'loading' | 'success' | 'error');
								}
							}}
						>
							<ToggleGroupItem value="loading">Loading</ToggleGroupItem>
							<ToggleGroupItem value="success">Success</ToggleGroupItem>
							<ToggleGroupItem value="error">Error</ToggleGroupItem>
						</ToggleGroup>
					</Flex>
					<div className="flex flex-wrap gap-8 items-center p-4 rounded">
						<TriState state={state} />
						<TriState
							state={state}
							size="md"
						/>
						<TriState
							state={state}
							size="lg"
						/>
					</div>
				</CardContent>
			</Card>
		</Grid>
	);
}
