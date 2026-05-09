import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	CardFooter,
} from '@stateless-studio/ui-react/components/cards';
import { Button } from '@stateless-studio/ui-react/components/buttons';
import { Heading } from '@stateless-studio/ui-react/components/typography';

export default function CardsPage() {
	return (
		<div className="space-y-6">
			<div>
				<Heading level={1}>Cards</Heading>
				<p className="text-muted-foreground">
					A flexible container for grouping content together.
				</p>
			</div>

			<div className="grid grid-cols-3 gap-6">
				<Card>
					<CardHeader>
						<CardTitle level={2}>Create Project</CardTitle>
						<CardDescription>
							Deploy your new abstract project in one-click.
						</CardDescription>
					</CardHeader>
					<CardContent>
						<p className="text-sm">
							Settings, configuration, and options go here.
						</p>
					</CardContent>
					<CardFooter className="flex justify-end space-x-2">
						<Button color="muted">Cancel</Button>
						<Button>Deploy</Button>
					</CardFooter>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle level={2}>Account Details</CardTitle>
						<CardDescription>Manage your account settings.</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="space-y-4">
							<div className="space-y-2">
								<p className="text-sm font-medium leading-none">Name</p>
								<p className="text-sm text-muted-foreground">Jane Doe</p>
							</div>
							<div className="space-y-2">
								<p className="text-sm font-medium leading-none">Email</p>
								<p className="text-sm text-muted-foreground">
									jane@example.com
								</p>
							</div>
						</div>
					</CardContent>
					<CardFooter>
						<Button>Save Changes</Button>
					</CardFooter>
				</Card>
			</div>

			<div className="space-y-4">
				<Heading level={2}>Color Variants</Heading>
				<div className="grid grid-cols-3 gap-6">
					<Card color="primary">
						<CardHeader>
							<CardTitle level={2}>Primary</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="text-sm text-white">Card content goes here.</p>
						</CardContent>
					</Card>
					<Card color="secondary">
						<CardHeader>
							<CardTitle level={2}>Secondary</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="text-sm">Card content goes here.</p>
						</CardContent>
					</Card>
					<Card color="success">
						<CardHeader>
							<CardTitle level={2}>Success</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="text-sm">Card content goes here.</p>
						</CardContent>
					</Card>
					<Card color="warning">
						<CardHeader>
							<CardTitle level={2}>Warning</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="text-sm">Card content goes here.</p>
						</CardContent>
					</Card>
					<Card color="danger">
						<CardHeader>
							<CardTitle level={2}>Danger</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="text-sm">Card content goes here.</p>
						</CardContent>
					</Card>
					<Card color="gradient">
						<CardHeader>
							<CardTitle level={2}>Gradient</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="text-sm">Card content goes here.</p>
						</CardContent>
					</Card>
					<Card>
						<CardHeader>
							<CardTitle level={2}>None</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="text-sm">Card content goes here.</p>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
}
