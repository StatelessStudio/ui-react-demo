'use client';

import { Heading } from '@stateless-studio/ui-react/components/typography';
import { Button } from '@stateless-studio/ui-react/components/buttons';
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from '@stateless-studio/ui-react/components/cards';
import {
	Toast,
	useToast,
} from '@stateless-studio/ui-react/components/feedback';
import { Grid } from '@stateless-studio/ui-react/components/layout';

export default function ToastPage() {
	const { toast } = useToast();

	return (
		<Grid>
			<div>
				<Heading level={1}>Toast</Heading>
				<p className="text-muted-foreground">
					Temporary notifications that slide in and out of the screen.
				</p>
			</div>
			<Card>
				<CardHeader>
					<CardTitle level={2}>Programmatic Toasts</CardTitle>
				</CardHeader>
				<CardContent className="flex flex-wrap gap-4">
					<Button
						color="primary"
						onClick={() =>
							toast({
								color: 'primary',
								title: 'Primary Update',
								description: 'This is a primary toast notification.',
							})
						}
					>
						Primary Toast
					</Button>
					<Button
						color="secondary"
						onClick={() =>
							toast({
								color: 'secondary',
								title: 'Secondary Update',
								description: 'This is a secondary toast notification.',
							})
						}
					>
						Secondary Toast
					</Button>
					<Button
						color="accent"
						onClick={() =>
							toast({
								color: 'accent',
								title: 'Accent Update',
								description: 'This is an accent toast notification.',
							})
						}
					>
						Accent Toast
					</Button>
					<Button
						color="muted"
						onClick={() =>
							toast({
								color: 'muted',
								title: 'Muted Update',
								description: 'This is a muted toast notification.',
							})
						}
					>
						Muted Toast
					</Button>
					<Button
						color="success"
						onClick={() =>
							toast({
								color: 'success',
								title: 'Profile Saved',
								description: 'Your profile has been updated successfully.',
							})
						}
					>
						Success Toast
					</Button>
					<Button
						color="danger"
						onClick={() =>
							toast({
								color: 'danger',
								title: 'Action Failed',
								description:
									'We could not save your changes. Please try again.',
							})
						}
					>
						Danger Toast
					</Button>
					<Button
						color="warning"
						onClick={() =>
							toast({
								color: 'warning',
								title: 'Action Required',
								description: 'You have unsaved changes in your document.',
							})
						}
					>
						Warning Toast
					</Button>
					<Button
						color="info"
						onClick={() =>
							toast({
								color: 'info',
								title: 'New Message',
								description: 'You received a new message from Jane Doe.',
							})
						}
					>
						Info Toast
					</Button>
					<Button
						color="gradient"
						onClick={() =>
							toast({
								color: 'gradient',
								title: 'New Message',
								description: 'You received a new message from Jane Doe.',
							})
						}
					>
						Gradient Toast
					</Button>
					<Button
						color="primary"
						fill="outline"
						onClick={() =>
							toast({
								color: 'primary',
								title: 'Update Available',
								description: 'A new version of the application is available.',
								action: (
									<Button
										size="sm"
										fill="outline"
										className="text-white"
									>
										Refresh
									</Button>
								),
							})
						}
					>
						Toast with Action
					</Button>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle level={2}>Inline Toasts</CardTitle>
				</CardHeader>
				<CardContent className="flex flex-col gap-4 bg-muted/10 p-4 rounded">
					<Toast
						color="primary"
						title="Primary Toast"
						description="Primary color notification."
						onClose={() => console.log('Toast closed')}
					/>
					<Toast
						color="secondary"
						title="Secondary Toast"
						description="Secondary color notification."
						onClose={() => console.log('Toast closed')}
					/>
					<Toast
						color="accent"
						title="Accent Toast"
						description="Accent color notification."
						onClose={() => console.log('Toast closed')}
					/>
					<Toast
						color="muted"
						title="Muted Toast"
						description="Muted color notification."
						onClose={() => console.log('Toast closed')}
					/>
					<Toast
						color="success"
						title="Success!"
						description="Your action has been completed successfully."
						onClose={() => console.log('Toast closed')}
					/>
					<Toast
						color="warning"
						title="Warning!"
						description="Please review your input before proceeding."
					/>
					<Toast
						color="danger"
						title="Danger!"
						description="There was a problem completing your action."
					/>
					<Toast
						color="info"
						title="Information"
						description="Here is some useful information for you."
					/>
					<Toast
						color="gradient"
						title="Gradient"
						description="Experience our fancy new gradient style."
					/>
				</CardContent>
			</Card>
		</Grid>
	);
}
