'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import {
	MenuItem,
	Tree,
	TreeItem,
} from '@stateless-studio/ui-react/components/navigation';
import { components } from '../../app/component-list';
import { ObjectLabel, Text } from '@stateless-studio/ui-react/components';
import { BoxIcon } from '@stateless-studio/ui-react';

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

const ClosedMenuItem = ({
	href,
	label,
	icon,
	pathname,
}: {
	href: string;
	label: string;
	icon: React.ReactNode;
	pathname: string;
}) => {
	const isActive = pathname === href || pathname.startsWith(href + '/');

	return (
		<Link href={href}>
			<MenuItem
				color="primary"
				active={isActive}
			>
				<ObjectLabel
					className="w-full"
					object={icon}
					label={
						<Text
							size="xs"
							color={isActive ? 'white' : undefined}
						>
							{label}
						</Text>
					}
				/>
			</MenuItem>
		</Link>
	);
};

export function AppMenu({ open }: { open: boolean }) {
	const pathname = usePathname();

	const isExpanded = (basePath: string) =>
		(pathname || '').startsWith(basePath);

	return (
		<Tree>
			{open ? (
				<NavItem
					key="/"
					href="/"
					label="Home"
					pathname={pathname}
				/>
			) : (
				<ClosedMenuItem
					key="/"
					href="/"
					label="Home"
					icon={<BoxIcon className="w-8 h-8" />}
					pathname={pathname}
				/>
			)}
			{components.map((category) =>
				open ? (
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
				) : (
					<ClosedMenuItem
						key={`/${category.name.toLowerCase()}`}
						href={`/${category.name.toLowerCase()}`}
						label={category.name}
						icon={<BoxIcon className="w-8 h-8" />}
						pathname={pathname}
					/>
				)
			)}
		</Tree>
	);
}
