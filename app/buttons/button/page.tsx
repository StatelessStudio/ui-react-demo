'use client';

import { Button } from '@stateless-studio/ui-react/components/buttons';
import { Heading } from '@stateless-studio/ui-react/components/typography';
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from '@stateless-studio/ui-react/components/cards';
import { Grid, GridItem } from '@stateless-studio/ui-react/components/layout';

export default function ButtonsPage() {
	function handleClick(name: string) {
		// eslint-disable-next-line no-console
		console.log(`Button clicked: ${name}`);
	}

	return (
		<Grid>
			<div>
				<Heading level={1}>Buttons</Heading>
				<p className="text-muted-foreground">
					Interactive elements that trigger actions and events.
				</p>
			</div>

			<Card>
				<CardHeader>
					<CardTitle level={2}>Colors</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="flex flex-wrap gap-4">
						<Button
							color="primary"
							onClick={() => handleClick('Primary')}
						>
							Primary Button
						</Button>
						<Button
							color="secondary"
							onClick={() => handleClick('Secondary')}
						>
							Secondary Button
						</Button>
						<Button
							color="accent"
							onClick={() => handleClick('Accent')}
						>
							Accent Button
						</Button>
						<Button
							color="muted"
							onClick={() => handleClick('Muted')}
						>
							Muted Button
						</Button>
						<Button
							color="success"
							onClick={() => handleClick('Success')}
						>
							Success Button
						</Button>
						<Button
							color="warning"
							onClick={() => handleClick('Warning')}
						>
							Warning Button
						</Button>
						<Button
							color="danger"
							onClick={() => handleClick('Danger')}
						>
							Danger Button
						</Button>
						<Button
							color="info"
							onClick={() => handleClick('Info')}
						>
							Info Button
						</Button>
						<Button
							color="gradient"
							onClick={() => handleClick('Gradient')}
						>
							Gradient Button
						</Button>
					</div>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle level={2}>Sizes</CardTitle>
				</CardHeader>
				<CardContent>
					<Grid>
						<GridItem>
							<Button
								color="primary"
								size="sm"
								onClick={() => handleClick('Small')}
							>
								Small Button
							</Button>
						</GridItem>
						<GridItem>
							<Button
								color="primary"
								size="md"
								onClick={() => handleClick('Medium')}
							>
								Medium Button
							</Button>
						</GridItem>
						<GridItem>
							<Button
								color="primary"
								size="lg"
								onClick={() => handleClick('Large')}
							>
								Large Button
							</Button>
						</GridItem>
					</Grid>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle level={2}>Fill</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="flex flex-wrap gap-4">
						<Button
							color="primary"
							fill="solid"
							onClick={() => handleClick('Solid')}
						>
							Solid Button
						</Button>
						<Button
							color="primary"
							fill="outline"
							onClick={() => handleClick('Outline')}
						>
							Outline Button
						</Button>
						<Button
							color="primary"
							fill="ghost"
							onClick={() => handleClick('Ghost')}
						>
							Ghost Button
						</Button>
					</div>
				</CardContent>
			</Card>
		</Grid>
	);
}
