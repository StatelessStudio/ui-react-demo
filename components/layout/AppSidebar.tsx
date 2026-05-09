import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
} from '@stateless-studio/ui-react/components/layout';
import { AppMenu } from '../navigation/AppMenu';
import { ReactNode } from 'react';

export function AppSidebar({ brand }: { brand: ReactNode }) {
	return (
		<Sidebar>
			<SidebarHeader>{brand} </SidebarHeader>
			<SidebarContent>
				<AppMenu />
			</SidebarContent>
			<SidebarFooter>
				<div className="flex items-center gap-2">
					<span className="w-6 h-6 bg-gray-300 rounded-full"></span>
					<span className="text-sm font-medium">Settings</span>
				</div>
			</SidebarFooter>
		</Sidebar>
	);
}
