'use client';

import { useState } from 'react';
import { Heading } from '@stateless-studio/ui-react/components/typography';
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from '@stateless-studio/ui-react/components/cards';
import {
	ToggleGroup,
	ToggleGroupItem,
} from '@stateless-studio/ui-react/components/buttons';
import { Grid } from '@stateless-studio/ui-react/components/layout';
import { colorStyles } from '@stateless-studio/ui-react';

export default function ToggleGroupPage() {
	const [alignment, setAlignment] = useState<string | undefined>('left');
	const [styles, setStyles] = useState<string[]>(['bold']);

	return (
		<div className="space-y-8">
			<Heading level={2}>Toggle Group Overview</Heading>

			<Grid>
				<Card>
					<CardHeader>
						<CardTitle>Single Selection</CardTitle>
					</CardHeader>
					<CardContent className="flex flex-col gap-4 items-start">
						<ToggleGroup
							type="single"
							value={alignment}
							onValueChange={(val) => setAlignment(val as string)}
						>
							<ToggleGroupItem value="left">Left</ToggleGroupItem>
							<ToggleGroupItem value="center">Center</ToggleGroupItem>
							<ToggleGroupItem value="right">Right</ToggleGroupItem>
						</ToggleGroup>
						<div className="text-sm text-muted-foreground mt-2">
							Selected value: <strong>{alignment || 'None'}</strong>
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Pill Appearance</CardTitle>
					</CardHeader>
					<CardContent className="flex flex-col gap-4 items-start">
						<Heading level={3}>Horizontal Pills</Heading>
						<ToggleGroup
							type="single"
							value={alignment}
							onValueChange={(val) => setAlignment(val as string)}
							appearance="pill"
						>
							<ToggleGroupItem value="left">Left</ToggleGroupItem>
							<ToggleGroupItem value="center">Center</ToggleGroupItem>
							<ToggleGroupItem value="right">Right</ToggleGroupItem>
						</ToggleGroup>
						<div className="text-sm text-muted-foreground mt-2">
							Selected value: <strong>{alignment || 'None'}</strong>
						</div>

						<Heading level={3}>Vertical Pills</Heading>
						<ToggleGroup
							type="single"
							orientation="vertical"
							value={alignment}
							onValueChange={(val) => setAlignment(val as string)}
							appearance="pill"
						>
							<ToggleGroupItem value="left">Left</ToggleGroupItem>
							<ToggleGroupItem value="center">Center</ToggleGroupItem>
							<ToggleGroupItem value="right">Right</ToggleGroupItem>
						</ToggleGroup>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Multiple Selection</CardTitle>
					</CardHeader>
					<CardContent className="flex flex-col gap-4 items-start">
						<ToggleGroup
							type="multiple"
							value={styles}
							onValueChange={(val) => setStyles(val as string[])}
							color="secondary"
						>
							<ToggleGroupItem value="bold">Bold</ToggleGroupItem>
							<ToggleGroupItem value="italic">Italic</ToggleGroupItem>
							<ToggleGroupItem value="underline">Underline</ToggleGroupItem>
						</ToggleGroup>
						<div className="text-sm text-muted-foreground mt-2">
							Selected values:{' '}
							<strong>{styles.length ? styles.join(', ') : 'None'}</strong>
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Orientation & Sizes</CardTitle>
					</CardHeader>
					<CardContent className="flex flex-col gap-6 items-start">
						<ToggleGroup
							type="single"
							defaultValue="sm"
							size="sm"
						>
							<ToggleGroupItem value="sm">Small</ToggleGroupItem>
							<ToggleGroupItem value="md">Small</ToggleGroupItem>
							<ToggleGroupItem value="lg">Small</ToggleGroupItem>
						</ToggleGroup>

						<ToggleGroup
							type="single"
							defaultValue="v1"
							orientation="vertical"
							color="accent"
						>
							<ToggleGroupItem value="v1">Vertical 1</ToggleGroupItem>
							<ToggleGroupItem value="v2">Vertical 2</ToggleGroupItem>
							<ToggleGroupItem value="v3">Vertical 3</ToggleGroupItem>
						</ToggleGroup>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Colors</CardTitle>
					</CardHeader>
					<CardContent className="flex flex-col gap-4 items-start">
						{(Object.keys(colorStyles) as (keyof typeof colorStyles)[]).map(
							(color) => (
								<ToggleGroup
									key={color}
									type="single"
									defaultValue="a"
									color={color}
								>
									<ToggleGroupItem value="a">Option A</ToggleGroupItem>
									<ToggleGroupItem value="b">Option B</ToggleGroupItem>
									<ToggleGroupItem value="c">Option C</ToggleGroupItem>
								</ToggleGroup>
							)
						)}
					</CardContent>
				</Card>
			</Grid>
		</div>
	);
}
