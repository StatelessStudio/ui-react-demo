'use client';

import Link from 'next/link';
import { Heading } from '@stateless-studio/ui-react/components/typography';
import {
	Card,
	CardHeader,
	CardTitle,
	CardContent,
	CardFooter,
} from '@stateless-studio/ui-react/components/cards';
import { Grid } from '@stateless-studio/ui-react/components/layout';
import { components } from './component-list';
import { Button } from '@stateless-studio/ui-react';

export default function Home() {
	return (
		<Grid>
			<div>
				<Heading level={1}>Stateless Studio UI Components</Heading>
				<p className="text-muted-foreground mt-2">
					Explore the available components in the library.
				</p>
			</div>
			{components.map((category) => (
				<section key={category.name}>
					<Heading
						key={category.name}
						level={2}
						className="mt-6"
					>
						{category.name}
					</Heading>

					<Grid cols={{ lg: 3 }}>
						{category.components.map((comp) => (
							<Link
								key={comp.path}
								href={comp.path}
							>
								<Card>
									<CardHeader>
										<CardTitle
											level={2}
											className="group-hover:text-blue-600"
										>
											{comp.name}
										</CardTitle>
									</CardHeader>
									<CardContent>{comp.summary}</CardContent>
									<CardFooter className="flex justify-center">
										<Button>View Component</Button>
									</CardFooter>
								</Card>
							</Link>
						))}
					</Grid>
					<br />
				</section>
			))}
		</Grid>
	);
}
