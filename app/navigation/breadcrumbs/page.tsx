'use client';

import Link from 'next/link';
import {
	Breadcrumbs,
	BreadcrumbList,
	BreadcrumbItem,
	BreadcrumbSeparator,
	BreadcrumbPage,
} from '@stateless-studio/ui-react/components/navigation';
import { Heading } from '@stateless-studio/ui-react/components/typography';
import {
	Card,
	CardHeader,
	CardTitle,
	CardContent,
} from '@stateless-studio/ui-react/components/cards';
import { Grid } from '@stateless-studio/ui-react/components/layout';

export default function BreadcrumbPageDemo() {
	return (
		<Grid>
			<div>
				<Heading level={1}>Breadcrumb</Heading>
				<p className="text-muted-foreground">
					Indicates the current page&apos;s location within a navigational
					hierarchy.
				</p>
			</div>
			<Card>
				<CardHeader>
					<CardTitle level={2}>Basic Breadcrumbs</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="flex flex-col gap-6">
						<Breadcrumbs>
							<BreadcrumbList>
								<BreadcrumbItem>
									<Link
										href="#"
										className="transition-colors hover:text-foreground cursor-pointer"
									>
										Home
									</Link>
								</BreadcrumbItem>
								<BreadcrumbSeparator />
								<BreadcrumbItem>
									<Link
										href="#"
										className="transition-colors hover:text-foreground cursor-pointer"
									>
										Library
									</Link>
								</BreadcrumbItem>
								<BreadcrumbSeparator />
								<BreadcrumbItem>
									<BreadcrumbPage>Components</BreadcrumbPage>
								</BreadcrumbItem>
							</BreadcrumbList>
						</Breadcrumbs>

						<Breadcrumbs>
							<BreadcrumbList>
								<BreadcrumbItem>
									<Link
										href="#"
										className="transition-colors hover:text-foreground cursor-pointer"
									>
										App
									</Link>
								</BreadcrumbItem>
								<BreadcrumbSeparator>
									<span className="text-muted/30 mx-2">&gt;</span>
								</BreadcrumbSeparator>
								<BreadcrumbItem>
									<Link
										href="#"
										className="transition-colors hover:text-foreground cursor-pointer"
									>
										Dashboard
									</Link>
								</BreadcrumbItem>
								<BreadcrumbSeparator>
									<span className="text-muted/30 mx-2">&gt;</span>
								</BreadcrumbSeparator>
								<BreadcrumbItem>
									<BreadcrumbPage>Settings</BreadcrumbPage>
								</BreadcrumbItem>
							</BreadcrumbList>
						</Breadcrumbs>
					</div>
				</CardContent>
			</Card>
		</Grid>
	);
}
