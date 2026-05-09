'use client';

import { Button } from '@stateless-studio/ui-react/components/buttons';

export default function ButtonsPage() {
	function handleClick(name: string) {
		// eslint-disable-next-line no-console
		console.log(`Button clicked: ${name}`);
	}

	return (
		<div className="w-50">
			<div className="flex flex-col gap-4 p-4">
				<Button
					color="primary"
					onClick={() => handleClick('Primary')}
				>
					Primary Button
				</Button>
				<Button
					color="secondary"
					onClick={() => handleClick('Secondary')}
				>
					Secondary Button
				</Button>
				<Button
					color="accent"
					onClick={() => handleClick('Accent')}
				>
					Accent Button
				</Button>
				<Button
					color="muted"
					onClick={() => handleClick('Muted')}
				>
					Muted Button
				</Button>
				<Button
					color="success"
					onClick={() => handleClick('Success')}
				>
					Success Button
				</Button>
				<Button
					color="warning"
					onClick={() => handleClick('Warning')}
				>
					Warning Button
				</Button>
				<Button
					color="danger"
					onClick={() => handleClick('Danger')}
				>
					Danger Button
				</Button>
				<Button
					color="info"
					onClick={() => handleClick('Info')}
				>
					Info Button
				</Button>
				<Button
					color="gradient"
					onClick={() => handleClick('Gradient')}
				>
					Gradient Button
				</Button>
			</div>
		</div>
	);
}
