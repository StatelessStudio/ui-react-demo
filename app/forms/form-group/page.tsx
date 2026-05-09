'use client';

import { Heading } from '@stateless-studio/ui-react/components/typography';
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from '@stateless-studio/ui-react/components/cards';
import { FormGroup, Input } from '@stateless-studio/ui-react/components/forms';
import { Grid } from '@stateless-studio/ui-react/components/layout';

export default function FormGroupPage() {
	return (
		<Grid>
			<div>
				<Heading level={1}>Form Group</Heading>
				<p className="text-muted-foreground">
					A wrapper for form controls to provide labels and validation messages.
				</p>
			</div>
			<Card>
				<CardHeader>
					<CardTitle level={2}>Basic Form Group</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="flex flex-col gap-6 max-w-md">
						<FormGroup
							label="Email address"
							required
						>
							<Input
								type="email"
								placeholder="Enter email"
							/>
						</FormGroup>

						<FormGroup
							label="Password"
							error="Password must be at least 8 characters."
						>
							<Input
								type="password"
								placeholder="Password"
							/>
						</FormGroup>
					</div>
				</CardContent>
			</Card>
		</Grid>
	);
}
