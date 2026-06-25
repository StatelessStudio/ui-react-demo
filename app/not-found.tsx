import Link from 'next/link';
import { Center } from '@stateless-studio/ui-react/components/layout';
import { Heading } from '@stateless-studio/ui-react/components/typography';
import { Button } from '@stateless-studio/ui-react/components/buttons';

export default function NotFound() {
	return (
		<Center className="h-[80vh]">
			<div className="flex flex-col items-center justify-center gap-4 p-8 text-center">
				<Heading level={2}>Page Not Found</Heading>
				<p className="max-w-md text-foreground/70">
					We couldn&apos;t find the page you were looking for. It might have
					been moved, deleted, or never existed.
				</p>
				<Link
					href="/"
					passHref
				>
					<Button className="mt-4">Return to Home</Button>
				</Link>
			</div>
		</Center>
	);
}
