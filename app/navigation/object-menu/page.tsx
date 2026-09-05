'use client';

import { useState } from 'react';
import {
	Menu,
	MenuCategory,
	ObjectMenuItem,
} from '@stateless-studio/ui-react/components/navigation';
import { Heading } from '@stateless-studio/ui-react/components/typography';
import {
	Card,
	CardHeader,
	CardTitle,
	CardContent,
} from '@stateless-studio/ui-react/components/cards';
import { Grid } from '@stateless-studio/ui-react/components/layout';
import { BoxIcon } from '@stateless-studio/ui-react';

export default function ObjectMenuPage() {
	const [activePath, setActivePath] = useState<string>('/home');

	const menuItems: MenuCategory[] = [
		{
			name: 'Home',
			path: '/home',
			icon: '🏠',
		},
		{
			name: 'Users',
			path: '/users',
			icon: '👥',
		},
		{
			name: 'Settings',
			path: '/settings',
			icon: '⚙️',
		},
		{
			name: 'Reports',
			path: '/reports',
			icon: '📊',
		},
	];

	return (
		<Grid>
			<div>
				<Heading level={1}>Object Menu</Heading>
				<p className="text-muted-foreground">
					Menu items that display objects (icons, avatars) alongside labels.
				</p>
			</div>

			<Card>
				<CardHeader>
					<CardTitle level={2}>Interactive Example</CardTitle>
				</CardHeader>
				<CardContent>
					<Menu className="w-16">
						{menuItems.map((item) => (
							<ObjectMenuItem
								{...item}
								key={item.path}
								active={activePath === item.path}
								onClick={() => setActivePath(item.path)}
								color="primary"
							/>
						))}
					</Menu>
					<p className="text-sm text-muted-foreground">
						Click any item to update the active path: {activePath}
					</p>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle level={2}>Color Variants</CardTitle>
				</CardHeader>
				<CardContent>
					<Menu className="grid grid-cols-10">
						<ObjectMenuItem
							key="color-variant-primary"
							name="Primary"
							icon={<BoxIcon className="w-4 h-4" />}
							color="primary"
						/>
						<ObjectMenuItem
							key="color-variant-secondary"
							name="Secondary"
							icon={<BoxIcon className="w-4 h-4" />}
							color="secondary"
						/>
						<ObjectMenuItem
							key="color-variant-accent"
							name="Accent"
							icon={<BoxIcon className="w-4 h-4" />}
							color="accent"
						/>
						<ObjectMenuItem
							key="color-variant-muted"
							name="Muted"
							icon={<BoxIcon className="w-4 h-4" />}
							color="muted"
						/>
						<ObjectMenuItem
							key="color-variant-success"
							name="Success"
							icon={<BoxIcon className="w-4 h-4" />}
							color="success"
						/>
						<ObjectMenuItem
							key="color-variant-warning"
							name="Warning"
							icon={<BoxIcon className="w-4 h-4" />}
							color="warning"
						/>
						<ObjectMenuItem
							key="color-variant-danger"
							name="Danger"
							icon={<BoxIcon className="w-4 h-4" />}
							color="danger"
						/>
						<ObjectMenuItem
							key="color-variant-info"
							name="Info"
							icon={<BoxIcon className="w-4 h-4" />}
							color="info"
						/>
						<ObjectMenuItem
							key="color-variant-gradient"
							name="Gradient"
							icon={<BoxIcon className="w-4 h-4" />}
							color="gradient"
						/>
					</Menu>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle level={2}>Gap Variants</CardTitle>
				</CardHeader>
				<CardContent>
					<Menu className="w-16">
						<ObjectMenuItem
							key="gap-variant-small"
							name="sm"
							icon={<BoxIcon className="w-8 h-8" />}
							color="primary"
							gap="sm"
						/>
						<ObjectMenuItem
							key="gap-variant-medium"
							name="md"
							icon={<BoxIcon className="w-8 h-8" />}
							color="primary"
							gap="md"
						/>
						<ObjectMenuItem
							key="gap-variant-large"
							name="lg"
							icon={<BoxIcon className="w-8 h-8" />}
							color="primary"
							gap="lg"
						/>
					</Menu>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle level={2}>Text Size Variants</CardTitle>
				</CardHeader>
				<CardContent>
					<Menu className="w-32">
						<ObjectMenuItem
							key="text-size-xs"
							name="xs"
							icon={<BoxIcon className="w-4 h-4" />}
							color="primary"
							textSize="xs"
						/>
						<ObjectMenuItem
							key="text-size-sm"
							name="sm"
							icon={<BoxIcon className="w-6 h-6" />}
							color="primary"
							textSize="sm"
						/>
						<ObjectMenuItem
							key="text-size-base"
							name="base"
							icon={<BoxIcon className="w-8 h-8" />}
							color="primary"
							textSize="base"
						/>
						<ObjectMenuItem
							key="text-size-lg"
							name="lg"
							icon={<BoxIcon className="w-10 h-10" />}
							color="primary"
							textSize="lg"
						/>
						<ObjectMenuItem
							key="text-size-xl"
							name="xl"
							icon={<BoxIcon className="w-12 h-12" />}
							color="primary"
							textSize="xl"
						/>
						<ObjectMenuItem
							key="text-size-2xl"
							name="2xl"
							icon={<BoxIcon className="w-14 h-14" />}
							color="primary"
							textSize="2xl"
						/>
						<ObjectMenuItem
							key="text-size-3xl"
							name="3xl"
							icon={<BoxIcon className="w-16 h-16" />}
							color="primary"
							textSize="3xl"
						/>
						<ObjectMenuItem
							key="text-size-4xl"
							name="4xl"
							icon={<BoxIcon className="w-18 h-18" />}
							color="primary"
							textSize="4xl"
						/>
					</Menu>
				</CardContent>
			</Card>
		</Grid>
	);
}
