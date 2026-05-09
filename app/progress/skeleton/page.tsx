'use client';

import { Heading } from '@stateless-studio/ui-react/components/typography';
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from '@stateless-studio/ui-react/components/cards';
import { Skeleton } from '@stateless-studio/ui-react/components/progress';
import { Grid } from '@stateless-studio/ui-react/components/layout';

export default function SkeletonPage() {
	return (
		<Grid>
			<Heading level={2}>Skeleton Overview</Heading>

			<Grid>
				<Card>
					<CardHeader>
						<CardTitle>Basic Usage</CardTitle>
					</CardHeader>
					<CardContent className="flex flex-col gap-4">
						<div className="flex items-center space-x-4">
							<Skeleton
								variant="circular"
								className="h-12 w-12"
							/>
							<div className="space-y-2 w-full">
								<Skeleton
									variant="text"
									className="w-[250px]"
								/>
								<Skeleton
									variant="text"
									className="w-[200px]"
								/>
							</div>
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Card Skeleton</CardTitle>
					</CardHeader>
					<CardContent className="flex flex-col gap-3">
						<Skeleton
							variant="rectangular"
							className="h-[125px] w-full rounded-xl"
						/>
						<div className="space-y-2 mt-4">
							<Skeleton
								variant="text"
								className="w-[90%]"
							/>
							<Skeleton
								variant="text"
								className="w-[85%]"
							/>
							<Skeleton
								variant="text"
								className="w-[60%]"
							/>
						</div>
					</CardContent>
				</Card>
			</Grid>
		</Grid>
	);
}
