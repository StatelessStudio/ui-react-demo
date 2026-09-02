'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import {
	Tree,
	TreeItem,
} from '@stateless-studio/ui-react/components/navigation';
import { components } from '../../app/component-list';

function NavItem({
	href,
	label,
	pathname,
}: {
	href: string;
	label: string;
	pathname: string;
}) {
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
}

export function AppMenu() {
	const pathname = usePathname();

	const isExpanded = (basePath: string) =>
		(pathname || '').startsWith(basePath);

	return (
		<Tree>
			<NavItem
				key="/"
				href="/"
				label="Home"
				pathname={pathname}
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
							pathname={pathname}
						/>
					))}
				</TreeItem>
			))}
		</Tree>
	);
}
