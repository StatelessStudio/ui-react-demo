'use client';

import { useState } from 'react';
import {
	Menu,
	MenuItem,
} from '@stateless-studio/ui-react/components/navigation';
import { Heading } from '@stateless-studio/ui-react/components/typography';
import {
	Card,
	CardHeader,
	CardTitle,
	CardContent,
} from '@stateless-studio/ui-react/components/cards';
import { Grid } from '@stateless-studio/ui-react/components/layout';

export default function NavigationPage() {
	const [activeItem, setActiveItem] = useState<string>('Home');

	function handleMenuClick(name: string) {
		setActiveItem(name);
		console.log(`Menu clicked: ${name}`);
	}

	return (
		<Grid>
			<div>
				<Heading level={1}>Menu</Heading>
				<p className="text-muted-foreground">
					Displays a list of choices on temporary surfaces.
				</p>
			</div>
			<Card>
				<CardHeader>
					<CardTitle level={2}>Basic Menu</CardTitle>
				</CardHeader>
				<CardContent>
					<Menu>
						<MenuItem
							active={activeItem === 'Home'}
							onClick={() => handleMenuClick('Home')}
						>
							Home
						</MenuItem>
						<MenuItem
							active={activeItem === 'Profile'}
							onClick={() => handleMenuClick('Profile')}
						>
							Profile
						</MenuItem>
						<MenuItem
							active={activeItem === 'Settings'}
							onClick={() => handleMenuClick('Settings')}
						>
							Settings
						</MenuItem>
					</Menu>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle level={2}>Menu Item Variants</CardTitle>
				</CardHeader>
				<CardContent>
					<Menu>
						<MenuItem
							color="primary"
							active={activeItem === 'Primary'}
							onClick={() => handleMenuClick('Primary')}
						>
							Primary Item
						</MenuItem>
						<MenuItem
							color="secondary"
							active={activeItem === 'Secondary'}
							onClick={() => handleMenuClick('Secondary')}
						>
							Secondary Item
						</MenuItem>
						<MenuItem
							color="accent"
							active={activeItem === 'Accent'}
							onClick={() => handleMenuClick('Accent')}
						>
							Accent Item
						</MenuItem>
						<MenuItem
							color="muted"
							active={activeItem === 'Muted'}
							onClick={() => handleMenuClick('Muted')}
						>
							Muted Item
						</MenuItem>
						<MenuItem
							color="success"
							active={activeItem === 'Success'}
							onClick={() => handleMenuClick('Success')}
						>
							Success Item
						</MenuItem>
						<MenuItem
							color="warning"
							active={activeItem === 'Warning'}
							onClick={() => handleMenuClick('Warning')}
						>
							Warning Item
						</MenuItem>
						<MenuItem
							color="danger"
							active={activeItem === 'Danger'}
							onClick={() => handleMenuClick('Danger')}
						>
							Danger Item
						</MenuItem>
						<MenuItem
							color="info"
							active={activeItem === 'Info'}
							onClick={() => handleMenuClick('Info')}
						>
							Info Item
						</MenuItem>
						<MenuItem
							color="gradient"
							active={activeItem === 'Gradient'}
							onClick={() => handleMenuClick('Gradient')}
						>
							Gradient Item
						</MenuItem>
						<MenuItem
							disabled
							active={activeItem === 'Disabled'}
							onClick={() => handleMenuClick('Disabled')}
						>
							Disabled Item
						</MenuItem>
					</Menu>
				</CardContent>
			</Card>
		</Grid>
	);
}
