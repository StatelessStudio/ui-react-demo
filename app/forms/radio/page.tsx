'use client';

import { Heading } from '@stateless-studio/ui-react/components/typography';
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from '@stateless-studio/ui-react/components/cards';
import { Radio, Label } from '@stateless-studio/ui-react/components/forms';
import { Grid } from '@stateless-studio/ui-react/components/layout';

export default function RadioPage() {
	return (
		<Grid>
			<div>
				<Heading level={1}>Radio</Heading>
				<p className="text-muted-foreground">
					A control that allows the user to select one option from a set.
				</p>
			</div>
			<Card>
				<CardHeader>
					<CardTitle level={2}>Radio Group</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="flex flex-col gap-4">
						<div className="flex items-center gap-2">
							<Radio
								name="fruit"
								value="apple"
								id="apple"
							/>
							<Label htmlFor="apple">Apple</Label>
						</div>
						<div className="flex items-center gap-2">
							<Radio
								name="fruit"
								value="banana"
								id="banana"
								defaultChecked
							/>
							<Label htmlFor="banana">Banana</Label>
						</div>
						<div className="flex items-center gap-2">
							<Radio
								name="fruit"
								value="orange"
								id="orange"
							/>
							<Label htmlFor="orange">Orange</Label>
						</div>
						<div className="flex items-center gap-2">
							<Radio
								name="fruit"
								value="disabled"
								id="disabled"
								disabled
							/>
							<Label
								htmlFor="disabled"
								className="opacity-50"
							>
								Disabled
							</Label>
						</div>
						<div className="flex items-center gap-2 flex-col items-start w-fit">
							<div className="flex flex-row items-center gap-2">
								<Radio
									name="fruit"
									value="invalid"
									id="invalid-radio"
									invalid
								/>
								<Label
									htmlFor="invalid-radio"
									className="text-destructive"
								>
									Invalid Option
								</Label>
							</div>
							<div className="text-sm text-destructive pl-6">
								Please select a valid fruit.
							</div>
						</div>
					</div>
				</CardContent>
			</Card>
		</Grid>
	);
}
