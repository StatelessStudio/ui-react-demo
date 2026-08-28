'use client';

import { Button } from '@stateless-studio/ui-react/components/buttons';
import { StatCard } from '@stateless-studio/ui-react/components/cards';
import {
	Heading,
	Text,
} from '@stateless-studio/ui-react/components/typography';
import { Grid } from '@stateless-studio/ui-react/components/layout';
import {
	BoxIcon,
	StarIcon,
	CheckIcon,
	CircleXIcon,
	CircleCheckIcon,
} from '@stateless-studio/ui-react/icons';

export default function StatCardDemo() {
	return (
		<div className="space-y-8">
			<div>
				<Heading level={1}>Stat Card</Heading>
				<Text className="text-gray-600 dark:text-gray-400">
					A component used to display statistics, metrics, or key data points
					concisely.
				</Text>
			</div>

			<section>
				<Heading
					level={2}
					className="mb-4"
				>
					Basic Stat Cards
				</Heading>
				<Grid
					cols={3}
					gap={4}
				>
					<StatCard
						label="Total Revenue"
						value="$45,231.89"
					/>
					<StatCard
						label="Active Users"
						value="2,350"
					/>
					<StatCard
						label="New Signups"
						value="+345"
					/>
				</Grid>
			</section>

			<section>
				<Heading
					level={2}
					className="mb-4"
				>
					With Icons
				</Heading>
				<Grid
					cols={3}
					gap={4}
				>
					<StatCard
						label="Total Orders"
						value="845"
						icon={BoxIcon}
						iconColor="text-blue-600 dark:text-blue-400"
					/>
					<StatCard
						label="Total Orders"
						value="845"
						icon={BoxIcon}
						iconBgColor="bg-blue-100 dark:bg-blue-900/30"
						iconColor="text-blue-600 dark:text-blue-400"
					/>
					<StatCard
						label="Customer Rating"
						value="4.8/5"
						icon={StarIcon}
						iconBgColor="bg-yellow-100 dark:bg-yellow-900/30"
						iconColor="text-yellow-600 dark:text-yellow-400"
					/>
					<StatCard
						label="Tasks Completed"
						value="120"
						icon={CheckIcon}
						iconBgColor="bg-green-100 dark:bg-green-900"
						iconColor="text-green-600 dark:text-green-400"
					/>
				</Grid>
			</section>

			<section>
				<Heading
					level={2}
					className="mb-4"
				>
					Loading State
				</Heading>
				<Grid
					cols={3}
					gap={4}
				>
					<StatCard
						label="Current MRR"
						isLoading={true}
						icon={BoxIcon}
						iconBgColor="bg-purple-100 dark:bg-purple-900/30"
						iconColor="text-purple-600 dark:text-purple-400"
					/>
					<StatCard
						label="Active Projects"
						isLoading={true}
					/>
				</Grid>
			</section>

			<section>
				<Heading
					level={2}
					className="mb-4"
				>
					Colors
				</Heading>

				<Grid
					cols={3}
					gap={4}
				>
					<StatCard
						label="Total Orders"
						value="845"
						icon={BoxIcon}
						color="primary"
					/>
					<StatCard
						label="Customer Rating"
						value="4.8/5"
						icon={StarIcon}
						color="secondary"
					/>
					<StatCard
						label="Tasks Completed"
						value="120"
						icon={CheckIcon}
						color="success"
					/>
					<StatCard
						label="Tasks Due Soon"
						value="8"
						icon={CircleCheckIcon}
						color="warning"
					/>
					<StatCard
						label="Tasks Over-Due"
						value="4"
						icon={CircleXIcon}
						color="danger"
					/>
					<StatCard
						label="Task Income"
						value="$48,000"
						icon={CheckIcon}
						color="gradient"
					/>
				</Grid>
			</section>

			<section>
				<Heading
					level={2}
					className="mb-4"
				>
					With Footer
				</Heading>

				<Grid
					cols={3}
					gap={4}
				>
					<StatCard
						label="Total Orders"
						value="845"
						icon={BoxIcon}
						color="muted"
						footer={
							<Button color="gradient" className="w-full">
								View Orders
							</Button>
						}
					/>
					<StatCard
						label="Customer Rating"
						value="4.8/5"
						icon={StarIcon}
						color="secondary"
						footer={
							<Text className="text-sm text-foreground/60">
								+0.2 points
							</Text>
						}
					/>
					<StatCard
						label="Tasks Completed"
						value="120"
						icon={CheckIcon}
						color="success"
						footer={
							<Text className="text-sm text-foreground/60">
								Last updated: 2 hours ago
							</Text>
						}
					/>
				</Grid>
			</section>
		</div>
	);
}
