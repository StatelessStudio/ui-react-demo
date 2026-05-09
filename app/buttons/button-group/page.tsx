'use client';

import { Heading } from '@stateless-studio/ui-react/components/typography';
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from '@stateless-studio/ui-react/components/cards';
import {
	Button,
	ButtonGroup,
} from '@stateless-studio/ui-react/components/buttons';
import { Grid } from '@stateless-studio/ui-react/components/layout';

export default function ButtonGroupPage() {
	return (
		<div>
			<Heading level={2}>Button Group Overview</Heading>

			<Grid>
				<Card>
					<CardHeader>
						<CardTitle>Basic Usage</CardTitle>
					</CardHeader>
					<CardContent>
						<ButtonGroup>
							<Button color="primary">Left</Button>
							<Button color="primary">Middle</Button>
							<Button color="primary">Right</Button>
						</ButtonGroup>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Outline Variants</CardTitle>
					</CardHeader>
					<CardContent>
						<ButtonGroup>
							<Button
								color="primary"
								fill="outline"
							>
								One
							</Button>
							<Button
								color="primary"
								fill="outline"
							>
								Two
							</Button>
							<Button
								color="primary"
								fill="outline"
							>
								Three
							</Button>
						</ButtonGroup>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Ghost Variants</CardTitle>
					</CardHeader>
					<CardContent>
						<ButtonGroup>
							<Button
								color="primary"
								fill="ghost"
							>
								Left
							</Button>
							<Button
								color="primary"
								fill="ghost"
							>
								Middle
							</Button>
							<Button
								color="primary"
								fill="ghost"
							>
								Right
							</Button>
						</ButtonGroup>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Vertical Orientation</CardTitle>
					</CardHeader>
					<CardContent>
						<ButtonGroup orientation="vertical">
							<Button
								color="primary"
								fill="outline"
							>
								Top
							</Button>
							<Button
								color="primary"
								fill="outline"
							>
								Middle
							</Button>
							<Button
								color="primary"
								fill="outline"
							>
								Bottom
							</Button>
						</ButtonGroup>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Sizes</CardTitle>
					</CardHeader>
					<CardContent className="flex flex-col gap-4 items-start">
						<ButtonGroup>
							<Button size="sm">Small</Button>
							<Button size="sm">Small</Button>
							<Button size="sm">Small</Button>
						</ButtonGroup>
						<ButtonGroup>
							<Button size="md">Medium</Button>
							<Button size="md">Medium</Button>
							<Button size="md">Medium</Button>
						</ButtonGroup>
						<ButtonGroup>
							<Button size="lg">Large</Button>
							<Button size="lg">Large</Button>
							<Button size="lg">Large</Button>
						</ButtonGroup>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Colors</CardTitle>
					</CardHeader>
					<CardContent className="flex flex-col gap-4 items-start">
						<ButtonGroup>
							<Button color="primary">Left</Button>
							<Button color="primary">Middle</Button>
							<Button color="primary">Right</Button>
						</ButtonGroup>
						<ButtonGroup>
							<Button color="secondary">Left</Button>
							<Button color="secondary">Middle</Button>
							<Button color="secondary">Right</Button>
						</ButtonGroup>
						<ButtonGroup>
							<Button color="accent">Left</Button>
							<Button color="accent">Middle</Button>
							<Button color="accent">Right</Button>
						</ButtonGroup>
						<ButtonGroup>
							<Button color="muted">Left</Button>
							<Button color="muted">Middle</Button>
							<Button color="muted">Right</Button>
						</ButtonGroup>
						<ButtonGroup>
							<Button color="success">Left</Button>
							<Button color="success">Middle</Button>
							<Button color="success">Right</Button>
						</ButtonGroup>
						<ButtonGroup>
							<Button color="warning">Left</Button>
							<Button color="warning">Middle</Button>
							<Button color="warning">Right</Button>
						</ButtonGroup>
						<ButtonGroup>
							<Button color="danger">Left</Button>
							<Button color="danger">Middle</Button>
							<Button color="danger">Right</Button>
						</ButtonGroup>
						<ButtonGroup>
							<Button color="info">Left</Button>
							<Button color="info">Middle</Button>
							<Button color="info">Right</Button>
						</ButtonGroup>
						<ButtonGroup>
							<Button color="gradient">Left</Button>
							<Button color="gradient">Middle</Button>
							<Button color="gradient">Right</Button>
						</ButtonGroup>
					</CardContent>
				</Card>
			</Grid>
		</div>
	);
}
