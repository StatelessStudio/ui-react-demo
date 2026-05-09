import { ReactNode } from 'react';
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
} from '@stateless-studio/ui-react/components/layout';

export function AppSidebar({ brand }: { brand: ReactNode }) {
	return (
		<Sidebar>
			<SidebarHeader>{brand}</SidebarHeader>
			<SidebarContent>Menu</SidebarContent>
			<SidebarFooter>
				<div className="flex items-center gap-2">
					<span className="w-6 h-6 bg-gray-300 rounded-full"></span>
					<span className="text-sm font-medium">Settings</span>
				</div>
			</SidebarFooter>
		</Sidebar>
	);
}
