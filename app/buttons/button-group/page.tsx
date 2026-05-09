'use client';

import {
	Button,
	ButtonGroup,
} from '@stateless-studio/ui-react/components/buttons';

export default function ButtonGroupPage() {
	return (
		<div className="w-50 m-4">
			<div className="flex flex-col gap-4">
				<div>
					<ButtonGroup>
						<Button color="primary">Left</Button>
						<Button color="primary">Middle</Button>
						<Button color="primary">Right</Button>
					</ButtonGroup>
				</div>
				<div>
					<ButtonGroup>
						<Button
							color="primary"
							fill="outline"
						>
							One
						</Button>
						<Button
							color="primary"
							fill="outline"
						>
							Two
						</Button>
						<Button
							color="primary"
							fill="outline"
						>
							Three
						</Button>
					</ButtonGroup>
				</div>
				<div>
					<ButtonGroup>
						<Button
							color="primary"
							fill="ghost"
						>
							Left
						</Button>
						<Button
							color="primary"
							fill="ghost"
						>
							Middle
						</Button>
						<Button
							color="primary"
							fill="ghost"
						>
							Right
						</Button>
					</ButtonGroup>
				</div>
				<div>
					<ButtonGroup orientation="vertical">
						<Button
							color="primary"
							fill="outline"
						>
							Top
						</Button>
						<Button
							color="primary"
							fill="outline"
						>
							Middle
						</Button>
						<Button
							color="primary"
							fill="outline"
						>
							Bottom
						</Button>
					</ButtonGroup>
				</div>
				<div>
					<ButtonGroup>
						<Button size="sm">Small</Button>
						<Button size="sm">Small</Button>
						<Button size="sm">Small</Button>
					</ButtonGroup>
				</div>
				<div>
					<ButtonGroup>
						<Button size="md">Medium</Button>
						<Button size="md">Medium</Button>
						<Button size="md">Medium</Button>
					</ButtonGroup>
				</div>
				<div>
					<ButtonGroup>
						<Button size="lg">Large</Button>
						<Button size="lg">Large</Button>
						<Button size="lg">Large</Button>
					</ButtonGroup>
				</div>
				<div>
					<ButtonGroup>
						<Button color="primary">Left</Button>
						<Button color="primary">Middle</Button>
						<Button color="primary">Right</Button>
					</ButtonGroup>
				</div>
				<div>
					<ButtonGroup>
						<Button color="secondary">Left</Button>
						<Button color="secondary">Middle</Button>
						<Button color="secondary">Right</Button>
					</ButtonGroup>
				</div>
				<div>
					<ButtonGroup>
						<Button color="accent">Left</Button>
						<Button color="accent">Middle</Button>
						<Button color="accent">Right</Button>
					</ButtonGroup>
				</div>
				<div>
					<ButtonGroup>
						<Button color="muted">Left</Button>
						<Button color="muted">Middle</Button>
						<Button color="muted">Right</Button>
					</ButtonGroup>
				</div>
				<div>
					<ButtonGroup>
						<Button color="success">Left</Button>
						<Button color="success">Middle</Button>
						<Button color="success">Right</Button>
					</ButtonGroup>
				</div>
				<div>
					<ButtonGroup>
						<Button color="warning">Left</Button>
						<Button color="warning">Middle</Button>
						<Button color="warning">Right</Button>
					</ButtonGroup>
				</div>
				<div>
					<ButtonGroup>
						<Button color="danger">Left</Button>
						<Button color="danger">Middle</Button>
						<Button color="danger">Right</Button>
					</ButtonGroup>
				</div>
				<div>
					<ButtonGroup>
						<Button color="info">Left</Button>
						<Button color="info">Middle</Button>
						<Button color="info">Right</Button>
					</ButtonGroup>
				</div>
				<div>
					<ButtonGroup>
						<Button color="gradient">Left</Button>
						<Button color="gradient">Middle</Button>
						<Button color="gradient">Right</Button>
					</ButtonGroup>
				</div>
			</div>
		</div>
	);
}
