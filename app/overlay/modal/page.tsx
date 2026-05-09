'use client';

import { useState } from 'react';
import { Heading } from '@stateless-studio/ui-react/components/typography';
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from '@stateless-studio/ui-react/components/cards';
import { Grid } from '@stateless-studio/ui-react/components/layout';
import { Button } from '@stateless-studio/ui-react/components/buttons';
import {
	Modal,
	ModalHeader,
	ModalTitle,
	ModalContent,
	ModalFooter,
} from '@stateless-studio/ui-react/components/overlay';

export default function ModalPage() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<Grid>
			<div>
				<Heading level={1}>Modal</Heading>
				<p className="text-muted-foreground">
					A dialog that focuses the user&apos;s attention exclusively on an
					information or task.
				</p>
			</div>
			<Card>
				<CardHeader>
					<CardTitle level={2}>Basic Usage</CardTitle>
				</CardHeader>
				<CardContent>
					<Button
						color="primary"
						onClick={() => setIsOpen(true)}
					>
						Open Modal
					</Button>

					<Modal
						isOpen={isOpen}
						onClose={() => setIsOpen(false)}
					>
						<ModalHeader>
							<ModalTitle level={3}>Action Required</ModalTitle>
						</ModalHeader>
						<ModalContent>
							<p>
								Are you sure you want to perform this action? This cannot be
								undone.
							</p>
						</ModalContent>
						<ModalFooter>
							<Button
								color="muted"
								onClick={() => setIsOpen(false)}
							>
								Cancel
							</Button>
							<Button
								color="primary"
								onClick={() => setIsOpen(false)}
							>
								Confirm
							</Button>
						</ModalFooter>
					</Modal>
				</CardContent>
			</Card>
		</Grid>
	);
}
