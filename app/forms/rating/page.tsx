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
import { Rating } from '@stateless-studio/ui-react/components/forms';
import { BoxIcon, CheckIcon } from '@stateless-studio/ui-react/icons';

export default function RatingPage() {
	const [controlledValue, setControlledValue] = useState(3);

	return (
		<Grid>
			<div>
				<Heading level={1}>Rating</Heading>
				<p className="text-muted-foreground">
					Interactive elements that allow users to provide feedback or rate
					content.
				</p>
			</div>

			<Grid>
				<Card>
					<CardHeader>
						<CardTitle>Basic Usage</CardTitle>
					</CardHeader>
					<CardContent className="space-y-4">
						<div>
							<div className="text-sm font-medium mb-2">Default Unselected</div>
							<Rating defaultValue={0} />
						</div>
						<div>
							<div className="text-sm font-medium mb-2">Pre-selected</div>
							<Rating defaultValue={3} />
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Controlled</CardTitle>
					</CardHeader>
					<CardContent className="space-y-4">
						<Rating
							value={controlledValue}
							onChange={setControlledValue}
						/>
						<div className="text-sm text-muted-foreground">
							Current value: {controlledValue}
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Custom Colors</CardTitle>
					</CardHeader>
					<CardContent className="space-y-4 flex flex-col items-start">
						<Rating
							defaultValue={3}
							color="primary"
						/>
						<Rating
							defaultValue={4}
							color="danger"
						/>
						<Rating
							defaultValue={5}
							color="success"
						/>
						<Rating
							defaultValue={2}
							color="warning"
						/>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Custom Maximum (10)</CardTitle>
					</CardHeader>
					<CardContent>
						<Rating
							defaultValue={7}
							max={10}
							color="warning"
						/>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Custom Icons</CardTitle>
					</CardHeader>
					<CardContent className="space-y-4">
						<div>
							<div className="text-sm font-medium mb-2">Box Icon</div>
							<Rating
								defaultValue={3}
								icon={<BoxIcon className="w-6 h-6 fill-current" />}
								emptyIcon={
									<BoxIcon className="w-6 h-6 text-muted-foreground" />
								}
								color="secondary"
							/>
						</div>
						<div>
							<div className="text-sm font-medium mb-2">
								Tick Icon (Custom renderIcon)
							</div>
							<Rating
								defaultValue={3}
								renderIcon={(index, isFilled, isHovered) => (
									<CheckIcon
										className={`w-6 h-6 ${isFilled ? 'text-success' : 'text-gray-200'}`}
									/>
								)}
							/>
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>States</CardTitle>
					</CardHeader>
					<CardContent className="space-y-4 flex flex-col items-start">
						<div>
							<div className="text-sm font-medium mb-2">Read-Only</div>
							<Rating
								defaultValue={4}
								readOnly
							/>
						</div>
						<div>
							<div className="text-sm font-medium mb-2">Disabled</div>
							<Rating
								defaultValue={3}
								disabled
							/>
						</div>
					</CardContent>
				</Card>
			</Grid>
		</Grid>
	);
}
