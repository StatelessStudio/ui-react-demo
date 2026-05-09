'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import {
	Tree,
	TreeItem,
} from '@stateless-studio/ui-react/components/navigation';
import { components } from '../../app/component-list';

export function AppMenu() {
	const pathname = usePathname();

	const NavItem = ({ href, label }: { href: string; label: string }) => {
		const isActive = pathname === href;
		return (
			<Link
				href={href}
				className="block outline-none focus:outline-none"
			>
				<TreeItem
					label={label}
					isActive={isActive}
				/>
			</Link>
		);
	};

	const isExpanded = (basePath: string) =>
		(pathname || '').startsWith(basePath);

	return (
		<Tree>
			<NavItem
				key="/"
				href="/"
				label="Home"
			/>
			{components.map((category) => (
				<TreeItem
					key={category.name}
					label={category.name}
					defaultExpanded={isExpanded(`/${category.name.toLowerCase()}`)}
				>
					{category.components.map((comp) => (
						<NavItem
							key={comp.path}
							href={comp.path}
							label={comp.name}
						/>
					))}
				</TreeItem>
			))}
		</Tree>
	);
}
