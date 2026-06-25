'use client';

import { useEffect } from 'react';
import { Center } from '@stateless-studio/ui-react/components/layout';
import { Heading } from '@stateless-studio/ui-react/components/typography';
import { Button } from '@stateless-studio/ui-react/components/buttons';

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error('Unhandled App Route Error:', error);
	}, [error]);

	return (
		<Center className="h-[80vh]">
			<div className="flex flex-col items-center justify-center gap-4 p-8 text-center">
				<Heading
					level={2}
					className="text-3xl font-bold tracking-tight"
				>
					Oops!
				</Heading>
				<p className="max-w-md text-foreground/70">Something went wrong.</p>
				<Button
					onClick={() => reset()}
					className="mt-4"
				>
					Try again
				</Button>
			</div>
		</Center>
	);
}
