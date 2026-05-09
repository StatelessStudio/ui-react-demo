'use client';

import { Heading } from '@stateless-studio/ui-react/components/typography';
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from '@stateless-studio/ui-react/components/cards';
import {
	Grid,
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
} from '@stateless-studio/ui-react/components/layout';

export default function SidebarPage() {
	return (
		<Grid>
			<div>
				<Heading level={1}>Sidebar</Heading>
				<p className="text-muted-foreground">
					A panel for application navigation that is fixed to the left or right
					of the screen.
				</p>
				<p>
					The Sidebar component provides structured application navigation. You
					are currently viewing the site using the Sidebar Layout!
				</p>
			</div>
			<Card>
				<CardHeader>
					<CardTitle level={2}>Sidebar Layout Demo</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="flex flex-col gap-4">
						<div
							className="border border-slate-200 rounded flex relative overflow-hidden"
							style={{ height: '400px' }}
						>
							<Sidebar>
								<SidebarHeader>
									<Heading level={3}>Sidebar Header</Heading>
								</SidebarHeader>
								<SidebarContent className="p-6">Test</SidebarContent>
								<SidebarFooter>
									<div className="text-sm text-slate-500 font-medium">
										Optional Footer
									</div>
								</SidebarFooter>
							</Sidebar>
							<div className="p-6 flex-1 bg-slate-50">
								<div className="h-8 w-1/3 bg-slate-200 rounded mb-4"></div>
								<div className="space-y-2">
									<div className="h-4 w-full bg-slate-200 rounded"></div>
									<div className="h-4 w-full bg-slate-200 rounded"></div>
									<div className="h-4 w-2/3 bg-slate-200 rounded"></div>
								</div>
							</div>
						</div>
					</div>
				</CardContent>
			</Card>
		</Grid>
	);
}
