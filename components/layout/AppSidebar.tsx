'use client';

import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
} from '@stateless-studio/ui-react/components/layout';
import { AppMenu } from '../navigation/AppMenu';
import { ReactNode, useState } from 'react';
import { ContextButton } from '@stateless-studio/ui-react/components/buttons';
import {
	ChevronRightIcon,
	ChevronLeftIcon,
} from '@stateless-studio/ui-react/icons';

export function AppSidebar({ brand }: { brand: ReactNode }) {
	const [expanded, setExpanded] = useState(true);

	return (
		<Sidebar expanded={expanded}>
			<SidebarHeader
				actionMenu={
					<ContextButton
						size="sm"
						onClick={() => setExpanded((prev) => !prev)}
						aria-label={expanded ? 'Collapse sidebar' : 'Expand sidebar'}
					>
						{expanded ? <ChevronLeftIcon /> : <ChevronRightIcon />}
					</ContextButton>
				}
			>
				<div className="flex items-center gap-2">
					<span className="w-6 h-6 rounded-full shrink-none bg-primary"></span>
					{expanded ? brand : null}
				</div>
			</SidebarHeader>
			<SidebarContent>
				<AppMenu open={expanded} />
			</SidebarContent>
			<SidebarFooter>
				<div className="flex items-center gap-2">
					<span className="w-6 h-6 bg-gray-300 rounded-full"></span>
					{expanded ? (
						<span className="text-sm font-medium">Settings</span>
					) : null}
				</div>
			</SidebarFooter>
		</Sidebar>
	);
}
