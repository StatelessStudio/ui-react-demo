'use client';

import { Heading } from '@stateless-studio/ui-react/components/typography';
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from '@stateless-studio/ui-react/components/cards';
import { Input, FormGroup } from '@stateless-studio/ui-react/components/forms';
import { Grid } from '@stateless-studio/ui-react/components/layout';

export default function InputPage() {
	return (
		<Grid>
			<div>
				<Heading level={1}>Input</Heading>
				<p className="text-muted-foreground">
					A basic widget for getting the user input is a text field.
				</p>
			</div>

			<Card>
				<CardHeader>
					<CardTitle level={2}>Basic Input</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="flex flex-col gap-4 max-w-sm">
						<Input
							type="email"
							placeholder="Email"
						/>
						<Input
							type="password"
							placeholder="Password"
						/>
						<Input
							disabled
							type="email"
							placeholder="Disabled"
						/>
					</div>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle level={2}>Input Types</CardTitle>
				</CardHeader>
				<CardContent>
					<Grid
						cols={{ sm: 2 }}
						gap={4}
					>
						<FormGroup
							label="Text"
							htmlFor="type-text"
						>
							<Input
								id="type-text"
								type="text"
								placeholder="Basic text"
							/>
						</FormGroup>
						<FormGroup
							label="Number"
							htmlFor="type-number"
						>
							<Input
								id="type-number"
								type="number"
								placeholder="42"
							/>
						</FormGroup>
						<FormGroup
							label="Email"
							htmlFor="type-email"
						>
							<Input
								id="type-email"
								type="email"
								placeholder="user@example.com"
							/>
						</FormGroup>
						<FormGroup
							label="Password"
							htmlFor="type-password"
						>
							<Input
								id="type-password"
								type="password"
								defaultValue="secretpassword"
							/>
						</FormGroup>
						<FormGroup
							label="Search"
							htmlFor="type-search"
						>
							<Input
								id="type-search"
								type="search"
								placeholder="Search..."
							/>
						</FormGroup>
						<FormGroup
							label="Telephone"
							htmlFor="type-tel"
						>
							<Input
								id="type-tel"
								type="tel"
								placeholder="(555) 555-5555"
							/>
						</FormGroup>
						<FormGroup
							label="Date"
							htmlFor="type-date"
						>
							<Input
								id="type-date"
								type="date"
							/>
						</FormGroup>
						<FormGroup
							label="Time"
							htmlFor="type-time"
						>
							<Input
								id="type-time"
								type="time"
							/>
						</FormGroup>
						<FormGroup
							label="Month"
							htmlFor="type-month"
						>
							<Input
								id="type-month"
								type="month"
							/>
						</FormGroup>
						<FormGroup
							label="Week"
							htmlFor="type-week"
						>
							<Input
								id="type-week"
								type="week"
							/>
						</FormGroup>
						<FormGroup
							label="File"
							htmlFor="type-file"
						>
							<Input
								id="type-file"
								type="file"
							/>
						</FormGroup>
						<FormGroup
							label="URL"
							htmlFor="type-url"
						>
							<Input
								id="type-url"
								type="url"
								placeholder="https://example.com"
							/>
						</FormGroup>
						<FormGroup
							label="Color"
							htmlFor="type-color"
						>
							<Input
								id="type-color"
								type="color"
								className="h-10 cursor-pointer p-1"
							/>
						</FormGroup>
						<FormGroup
							label="Range"
							htmlFor="type-range"
						>
							<Input
								id="type-range"
								type="range"
								className="p-0 border-0 shadow-none focus:ring-0"
							/>
						</FormGroup>
						<FormGroup
							label="Hidden"
							htmlFor="type-hidden"
						>
							<span className="text-sm text-muted-foreground mt-2 inline-block">
								(Hidden field present in DOM)
							</span>
							<Input
								id="type-hidden"
								type="hidden"
								value="hidden-val"
							/>
						</FormGroup>
					</Grid>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle level={2}>Input with Validation (Form Group)</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="flex flex-col gap-4 max-w-sm">
						<FormGroup
							label="Email"
							error="Invalid email address"
						>
							<Input
								defaultValue="test@"
								aria-invalid="true"
							/>
						</FormGroup>
					</div>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle level={2}>Input Sizes</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="flex flex-col gap-4 max-w-sm">
						<FormGroup
							label="Small"
							htmlFor="size-sm"
						>
							<Input
								id="size-sm"
								placeholder="Small input"
								size="sm"
							/>
						</FormGroup>
						<FormGroup
							label="Medium (default)"
							htmlFor="size-md"
						>
							<Input
								id="size-md"
								placeholder="Medium input"
							/>
						</FormGroup>
						<FormGroup
							label="Large"
							htmlFor="size-lg"
						>
							<Input
								id="size-lg"
								placeholder="Large input"
								size="lg"
							/>
						</FormGroup>
					</div>
				</CardContent>
			</Card>
		</Grid>
	);
}
