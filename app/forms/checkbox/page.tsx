'use client';

import { Heading } from '@stateless-studio/ui-react/components/typography';
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from '@stateless-studio/ui-react/components/cards';
import { Checkbox, Label } from '@stateless-studio/ui-react/components/forms';
import { Grid } from '@stateless-studio/ui-react/components/layout';

export default function CheckboxPage() {
	return (
		<Grid>
			<div>
				<Heading level={1}>Checkbox</Heading>
				<p className="text-muted-foreground">
					A control that allows the user to toggle between checked and not
					checked.
				</p>
			</div>
			<Card>
				<CardHeader>
					<CardTitle level={2}>Basic Checkbox</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="flex flex-col gap-4">
						<div className="flex items-center gap-2">
							<Checkbox id="terms" />
							<Label htmlFor="terms">Accept terms and conditions</Label>
						</div>
						<div className="flex items-center gap-2">
							<Checkbox
								id="newsletter"
								defaultChecked
							/>
							<Label htmlFor="newsletter">Subscribe to newsletter</Label>
						</div>
						<div className="flex items-center gap-2">
							<Checkbox
								id="disabled-check"
								disabled
							/>
							<Label
								htmlFor="disabled-check"
								className="opacity-50"
							>
								I am disabled
							</Label>
						</div>
						<div className="flex items-center gap-2 flex-col items-start w-fit">
							<div className="flex flex-row items-center gap-2">
								<Checkbox
									id="danger-check"
									invalid
								/>
								<Label
									htmlFor="danger-check"
									className="text-destructive"
								>
									Accept Privacy Policy
								</Label>
							</div>
							<div className="text-sm text-destructive pl-6">
								You must accept the privacy policy.
							</div>
						</div>
					</div>
				</CardContent>
			</Card>
		</Grid>
	);
}
