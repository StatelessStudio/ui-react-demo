'use client';

import { Heading } from '@stateless-studio/ui-react/components/typography';
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from '@stateless-studio/ui-react/components/cards';
import {
	Textarea,
	FormGroup,
} from '@stateless-studio/ui-react/components/forms';
import { Grid } from '@stateless-studio/ui-react/components/layout';

export default function TextareaPage() {
	return (
		<Grid>
			<div>
				<Heading level={1}>Textarea</Heading>
				<p className="text-muted-foreground">A multi-line text input field.</p>
			</div>
			<Card>
				<CardHeader>
					<CardTitle level={2}>Basic Textarea</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="flex flex-col gap-8 max-w-sm">
						<FormGroup label="Message">
							<Textarea placeholder="Type your message here." />
						</FormGroup>
						<FormGroup label="Disabled">
							<Textarea
								disabled
								placeholder="This textarea is disabled."
							/>
						</FormGroup>
						<FormGroup
							label="Feedback"
							error="Feedback cannot be empty."
						>
							<Textarea
								placeholder="Tell us what you think."
								invalid
							/>
						</FormGroup>
					</div>
				</CardContent>
			</Card>
		</Grid>
	);
}
