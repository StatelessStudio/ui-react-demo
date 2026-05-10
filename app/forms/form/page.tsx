'use client';

import { useState } from 'react';
import { Heading } from '@stateless-studio/ui-react/components/typography';
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from '@stateless-studio/ui-react/components/cards';
import {
	Form,
	FormGroup,
	Input,
	Label,
} from '@stateless-studio/ui-react/components/forms';
import { Grid } from '@stateless-studio/ui-react/components/layout';
import { Toggle } from '@stateless-studio/ui-react/components/toggles';

export default function FormPage() {
	const [shouldError, setShouldError] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState(false);

	return (
		<Grid>
			<div>
				<Heading level={1}>Form</Heading>
				<p className="text-muted-foreground">
					A form component to handle user inputs and submissions.
				</p>
			</div>
			<Card>
				<CardHeader>
					<CardTitle level={2}>Basic Form</CardTitle>
				</CardHeader>
				<CardContent>
					<Form
						error={error}
						isLoading={isLoading}
						onSubmit={async () => {
							setIsLoading(true);
							setError(null);
							console.log('Submitting form...');
							await new Promise<void>((a) => setTimeout(a, 500));

							if (shouldError) {
								setError('Simulation: An error occurred during submission.');
							}
							else {
								console.log('Form submitted!');
							}

							setIsLoading(false);
						}}
					>
						<FormGroup
							label="Email address"
							required
						>
							<Input
								type="email"
								placeholder="Enter email"
							/>
						</FormGroup>

						<FormGroup label="Password">
							<Input
								type="password"
								placeholder="Password"
							/>
						</FormGroup>

						<div className="flex items-center gap-3 mb-2">
							<Toggle
								id="throw-error"
								color="danger"
								checked={shouldError}
								onChange={(e) => setShouldError(e.target.checked)}
							/>
							<Label htmlFor="throw-error">Simulate error</Label>
						</div>
					</Form>
				</CardContent>
			</Card>
		</Grid>
	);
}
