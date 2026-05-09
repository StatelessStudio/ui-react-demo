'use client';

import { Heading } from '@stateless-studio/ui-react/components/typography';
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from '@stateless-studio/ui-react/components/cards';
import { Label } from '@stateless-studio/ui-react/components/forms';
import { Toggle } from '@stateless-studio/ui-react/components/toggles';
import { Grid } from '@stateless-studio/ui-react/components/layout';
import { Tooltip } from '@stateless-studio/ui-react/components/overlay';
import { useState } from 'react';
import { colorStyles } from '@stateless-studio/ui-react';

export default function SlideTogglePage() {
	const [toggled, setToggled] = useState(false);

	return (
		<Grid>
			<div>
				<Heading level={1}>Toggle</Heading>
				<p className="text-muted-foreground">
					A control that allows the user to toggle between on and off states.
				</p>
			</div>
			<Card>
				<CardHeader>
					<CardTitle level={2}>Basic Toggle</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="flex flex-col gap-4">
						<div className="flex items-center gap-3">
							<Toggle
								id="airplane-mode"
								checked={toggled}
								onChange={(e) => setToggled(e.target.checked)}
							/>
							<Label htmlFor="airplane-mode">
								Airplane Mode (Currently {toggled ? 'On' : 'Off'})
							</Label>
						</div>
						<div className="flex items-center gap-3">
							<Toggle
								id="disabled-toggle"
								disabled
							/>
							<Label
								htmlFor="disabled-toggle"
								className="opacity-50"
							>
								Disabled
							</Label>
						</div>
					</div>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle level={2}>Color Variants</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="flex flex-wrap gap-6">
						{(Object.keys(colorStyles) as (keyof typeof colorStyles)[]).map(
							(c) => (
								<div
									key={c}
									className="flex flex-col items-center justify-center gap-2"
								>
									<Toggle
										id={`toggle-${c}`}
										defaultChecked
										color={c}
									/>
									<Label
										htmlFor={`toggle-${c}`}
										className="capitalize"
									>
										{c}
									</Label>
								</div>
							)
						)}

						<Tooltip content="Provides high contrast visibility on dark or colored backgrounds">
							<div className="flex flex-col items-center justify-center gap-2 p-3 bg-zinc-900 rounded-md">
								<Toggle
									id="toggle-inverse"
									defaultChecked
									inverse
								/>
								<Label
									htmlFor="toggle-inverse"
									className="capitalize text-zinc-100"
								>
									inverse
								</Label>
							</div>
						</Tooltip>
					</div>
				</CardContent>
			</Card>
		</Grid>
	);
}
