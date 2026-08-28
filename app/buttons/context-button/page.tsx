'use client';

import { ContextButton } from '@stateless-studio/ui-react/components/buttons';
import { Heading } from '@stateless-studio/ui-react/components/typography';
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from '@stateless-studio/ui-react/components/cards';
import {
	MenuDotsIcon,
	ChevronDownIcon,
	SearchIcon,
} from '@stateless-studio/ui-react/icons';
import { Grid, GridItem } from '@stateless-studio/ui-react/components/layout';

export default function ContextButtonPage() {
	function handleClick(name: string) {
		// eslint-disable-next-line no-console
		console.log(`Context button clicked: ${name}`);
	}

	return (
		<Grid>
			<div>
				<Heading level={1}>Context Button</Heading>
				<p className="text-muted-foreground">
					Compact button component for card actions and contextual controls,
					typically positioned at the top-right of cards.
				</p>
			</div>

			<Card>
				<CardHeader>
					<CardTitle level={2}>Basic Usage</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="flex gap-4">
						<ContextButton onClick={() => handleClick('Menu')}>
							<MenuDotsIcon />
						</ContextButton>
						<ContextButton onClick={() => handleClick('Menu')}>
							<MenuDotsIcon orientation="horizontal" />
						</ContextButton>
						<ContextButton onClick={() => handleClick('Chevron')}>
							<ChevronDownIcon />
						</ContextButton>
						<ContextButton onClick={() => handleClick('Search')}>
							<SearchIcon />
						</ContextButton>
					</div>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle level={2}>Icon Sizes</CardTitle>
				</CardHeader>
				<CardContent>
					<Grid cols={3}>
						<GridItem>
							<div className="flex flex-col items-center gap-2">
								<ContextButton
									size="sm"
									onClick={() => handleClick('Small')}
								>
									<MenuDotsIcon />
								</ContextButton>
								<span className="text-xs text-muted-foreground">Small</span>
							</div>
						</GridItem>
						<GridItem>
							<div className="flex flex-col items-center gap-2">
								<ContextButton
									size="md"
									onClick={() => handleClick('Medium')}
								>
									<MenuDotsIcon />
								</ContextButton>
								<span className="text-xs text-muted-foreground">Medium</span>
							</div>
						</GridItem>
						<GridItem>
							<div className="flex flex-col items-center gap-2">
								<ContextButton
									size="lg"
									onClick={() => handleClick('Large')}
								>
									<MenuDotsIcon />
								</ContextButton>
								<span className="text-xs text-muted-foreground">Large</span>
							</div>
						</GridItem>
					</Grid>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle level={2}>With Colors</CardTitle>
				</CardHeader>
				<CardContent>
					<Grid cols={5}>
						<GridItem>
							<div className="flex flex-col items-center gap-2">
								<ContextButton
									color="primary"
									onClick={() => handleClick('Primary')}
								>
									<MenuDotsIcon />
								</ContextButton>
								<span className="text-xs text-muted-foreground">Primary</span>
							</div>
						</GridItem>
						<GridItem>
							<div className="flex flex-col items-center gap-2">
								<ContextButton
									color="secondary"
									onClick={() => handleClick('Secondary')}
								>
									<MenuDotsIcon />
								</ContextButton>
								<span className="text-xs text-muted-foreground">Secondary</span>
							</div>
						</GridItem>
						<GridItem>
							<div className="flex flex-col items-center gap-2">
								<ContextButton
									color="accent"
									onClick={() => handleClick('Accent')}
								>
									<MenuDotsIcon />
								</ContextButton>
								<span className="text-xs text-muted-foreground">Accent</span>
							</div>
						</GridItem>
						<GridItem>
							<div className="flex flex-col items-center gap-2">
								<ContextButton
									color="success"
									onClick={() => handleClick('Success')}
								>
									<MenuDotsIcon />
								</ContextButton>
								<span className="text-xs text-muted-foreground">Success</span>
							</div>
						</GridItem>
						<GridItem>
							<div className="flex flex-col items-center gap-2">
								<ContextButton
									color="danger"
									onClick={() => handleClick('Danger')}
								>
									<MenuDotsIcon />
								</ContextButton>
								<span className="text-xs text-muted-foreground">Danger</span>
							</div>
						</GridItem>
					</Grid>
				</CardContent>
			</Card>
		</Grid>
	);
}
