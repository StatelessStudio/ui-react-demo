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
import { ToggleBadge } from '@stateless-studio/ui-react/components/toggles';
import { colorStyles } from '@stateless-studio/ui-react';

export default function ToggleBadgePage() {
	const [checked, setChecked] = useState(false);

	return (
		<div className="space-y-6">
			<Heading level={2}>Toggle Badge</Heading>

			<Grid>
				<Card>
					<CardHeader>
						<CardTitle>Basic Usage</CardTitle>
					</CardHeader>
					<CardContent className="flex flex-col items-start gap-4">
						<ToggleBadge color="primary">Enable Feature</ToggleBadge>
						<ToggleBadge color="success">Notifications</ToggleBadge>
						<ToggleBadge color="danger">Delete Account</ToggleBadge>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Controlled & Disabled</CardTitle>
					</CardHeader>
					<CardContent className="flex flex-col items-start gap-4">
						<ToggleBadge
							color="info"
							checked={checked}
							onCheckedChange={setChecked}
						>
							Controlled state: {checked ? 'On' : 'Off'}
						</ToggleBadge>

						<ToggleBadge
							color="warning"
							disabled
						>
							Disabled Off
						</ToggleBadge>

						<ToggleBadge
							color="warning"
							defaultChecked
							disabled
						>
							Disabled On
						</ToggleBadge>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Colors & Variants</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="flex flex-wrap gap-4">
							{(Object.keys(colorStyles) as (keyof typeof colorStyles)[]).map(
								(c) => (
									<ToggleBadge
										key={c}
										color={c}
										defaultChecked
										className="capitalize"
									>
										{c} Badge
									</ToggleBadge>
								)
							)}
						</div>
					</CardContent>
				</Card>
			</Grid>
		</div>
	);
}
