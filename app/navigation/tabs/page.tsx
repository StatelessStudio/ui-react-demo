'use client';

import { Heading } from '@stateless-studio/ui-react/components/typography';

import { Grid } from '@stateless-studio/ui-react/components/layout';
import {
	Tabs,
	TabList,
	Tab,
	TabPanel,
} from '@stateless-studio/ui-react/components/navigation';
import { StarIcon } from '@stateless-studio/ui-react/icons';

export default function TabsPage() {
	return (
		<Grid>
			<div className="space-y-8">
				<Heading level={1}>Tabs</Heading>
			</div>

			<div>
				<Heading level={2}>Horizontal Example</Heading>
				<Tabs
					defaultValue="account"
					color="primary"
					className="mt-4"
				>
					<TabList>
						<Tab
							value="account"
							icon={StarIcon}
						>
							Account
						</Tab>
						<Tab value="password">Password</Tab>
						<Tab value="settings">Settings</Tab>
					</TabList>

					<TabPanel value="account">
						<p className="text-sm text-slate-500">
							Make changes to your account here.
						</p>
					</TabPanel>

					<TabPanel value="password">
						<p className="text-sm text-slate-500">Change your password here.</p>
					</TabPanel>

					<TabPanel value="settings">
						<p className="text-sm text-slate-500">Manage your settings here.</p>
					</TabPanel>
				</Tabs>
			</div>

			<div>
				<Heading level={2}>Vertical Example (Project phases)</Heading>
				<Tabs
					defaultValue="plan"
					orientation="vertical"
					color="secondary"
					className="w-full max-w-lg mt-4"
				>
					<TabList className="w-1/3">
						<Tab value="plan">1. Plan</Tab>
						<Tab value="design">2. Design</Tab>
						<Tab value="implement">3. Implement</Tab>
						<Tab value="validate">4. Validate</Tab>
						<Tab value="close">5. Close</Tab>
					</TabList>

					<TabPanel value="plan">
						<Heading level={3}>Planning Phase</Heading>
						<p className="text-sm text-slate-500 mt-2">
							Gather requirements, define scope, and allocate resources.
						</p>
					</TabPanel>

					<TabPanel value="design">
						<Heading level={3}>Design Phase</Heading>
						<p className="text-sm text-slate-500 mt-2">
							Create mockups, wireframes, and draft the architectural system.
						</p>
					</TabPanel>

					<TabPanel value="implement">
						<Heading level={3}>Implementation</Heading>
						<p className="text-sm text-slate-500 mt-2">
							Write the code and integrate with third-party services.
						</p>
					</TabPanel>

					<TabPanel value="validate">
						<Heading level={3}>Testing & Validation</Heading>
						<p className="text-sm text-slate-500 mt-2">
							QA testing, user acceptance testing, and final checks.
						</p>
					</TabPanel>

					<TabPanel value="close">
						<Heading level={3}>Project Close</Heading>
						<p className="text-sm text-slate-500 mt-2">
							Deliver final assets, sign-offs, and conduct retrospective.
						</p>
					</TabPanel>
				</Tabs>
			</div>
		</Grid>
	);
}
