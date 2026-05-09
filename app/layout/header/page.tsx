'use client';

import { Heading } from '@stateless-studio/ui-react/components/typography';
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from '@stateless-studio/ui-react/components/cards';
import { Header } from '@stateless-studio/ui-react/components/layout';
import { Button } from '@stateless-studio/ui-react/components/buttons';
// TODO: import { BoxIcon } from '@stateless-studio/ui-react/icons';

export default function HeaderPage() {
	return (
		<div className="space-y-6">
			<Heading level={2}>Header Component Overview</Heading>

			<div className="space-y-4">
				<Card>
					<CardHeader>
						<CardTitle>Basic Usage</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="border border-muted rounded-md bg-page min-h-[200px] flex flex-col overflow-hidden">
							<Header>
								<div className="flex items-center gap-2 font-bold text-lg">
									{/* TODO: <BoxIcon className="w-5 h-5" /> */} App Title
								</div>
								<div className="ml-auto">
									<Button
										fill="outline"
										size="sm"
									>
										Log In
									</Button>
								</div>
							</Header>
							<div className="flex-1 p-4 text-sm text-muted-foreground">
								Page body content goes here...
							</div>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
