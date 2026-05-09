'use client';

import React, { useState } from 'react';
import {
	Card,
	CardHeader,
	CardContent,
	CardTitle,
} from '@stateless-studio/ui-react/components/cards';
import { Heading } from '@stateless-studio/ui-react/components/typography';
import { SegmentedInput } from '@stateless-studio/ui-react/components/forms';
import { Grid } from '@stateless-studio/ui-react';

export default function SegmentedInputPage() {
	const [value1, setValue1] = useState('');
	const [value2, setValue2] = useState('');
	const [value3, setValue3] = useState('');

	return (
		<Grid>
			<Heading level={1}>Segmented Input</Heading>
			<p className="text-muted-foreground">
				A segmented input component commonly used for OTPs, phone numbers, or
				pattern entries.
			</p>

			<Grid>
				<Card>
					<CardHeader>
						<CardTitle>Basic Usage (OTP with AutoComplete)</CardTitle>
					</CardHeader>
					<CardContent className="space-y-4">
						<SegmentedInput
							length={6}
							value={value1}
							onChange={setValue1}
							autoComplete="one-time-code"
							type="number"
						/>
						<div className="text-sm">Value: {value1}</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Password Type</CardTitle>
					</CardHeader>
					<CardContent className="space-y-4">
						<SegmentedInput
							length={4}
							type="password"
							onChange={setValue2}
						/>
						<div className="text-sm">Value: {value2}</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Disabled State</CardTitle>
					</CardHeader>
					<CardContent>
						<SegmentedInput
							length={5}
							disabled
						/>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Grouped Pattern (ABC-12-34)</CardTitle>
					</CardHeader>
					<CardContent className="space-y-4">
						<SegmentedInput
							groups={[3, 2, 2]}
							onChange={setValue3}
							separator={<span className="text-muted-foreground px-1">-</span>}
							validateChar={(char, i) => {
								// First 3 chars must be letters, rest numbers
								if (i < 3) {
									return /^[A-Za-z]$/.test(char);
								}
								return /^\d$/.test(char);
							}}
						/>
						<div className="text-sm">Value: {value3}</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Separated Visual Variant</CardTitle>
					</CardHeader>
					<CardContent>
						<SegmentedInput
							length={6}
							layout="separated"
						/>
					</CardContent>
				</Card>
			</Grid>
		</Grid>
	);
}
