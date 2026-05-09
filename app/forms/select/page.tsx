'use client';

import { Heading } from '@stateless-studio/ui-react/components/typography';
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from '@stateless-studio/ui-react/components/cards';
import { Select, FormGroup } from '@stateless-studio/ui-react/components/forms';
import { Grid } from '@stateless-studio/ui-react/components/layout';

export default function SelectPage() {
	return (
		<Grid>
			<div>
				<Heading level={1}>Select</Heading>
				<p className="text-muted-foreground">
					Displays a list of options for the user to pick from.
				</p>
			</div>
			<Card>
				<CardHeader>
					<CardTitle level={2}>Basic Select</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="flex flex-col gap-4 max-w-sm">
						<Select defaultValue="">
							<option
								value=""
								disabled
							>
								Select a fruit
							</option>
							<option value="apple">Apple</option>
							<option value="banana">Banana</option>
							<option value="orange">Orange</option>
						</Select>
					</div>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle level={2}>
						Select Validation & States (Form Group)
					</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="flex flex-col gap-4 max-w-sm">
						<FormGroup
							label="Country"
							htmlFor="country"
						>
							<Select
								id="country"
								defaultValue=""
							>
								<option
									value=""
									disabled
									hidden
								>
									Select a country...
								</option>
								<option value="us">United States</option>
								<option value="ca">Canada</option>
								<option value="uk">United Kingdom</option>
								<option value="au">Australia</option>
							</Select>
						</FormGroup>

						<FormGroup
							label="Role"
							htmlFor="role"
							error="Please select a valid role"
						>
							<Select
								id="role"
								defaultValue=""
								invalid
							>
								<option
									value=""
									disabled
									hidden
								>
									Select a role...
								</option>
								<option value="admin">Admin</option>
								<option value="user">User</option>
							</Select>
						</FormGroup>

						<FormGroup
							label="Status"
							htmlFor="status"
						>
							<Select
								id="status"
								disabled
								defaultValue="active"
							>
								<option value="active">Active</option>
								<option value="inactive">Inactive</option>
							</Select>
						</FormGroup>
					</div>
				</CardContent>
			</Card>
		</Grid>
	);
}
