'use client';

import {
	PageHeading,
	Grid,
	ScrollArea,
} from '@stateless-studio/ui-react/components/layout';
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from '@stateless-studio/ui-react/components/cards';

export default function ScrollAreaDemo() {
	return (
		<Grid>
			<div>
				<PageHeading
					title="Scroll Area Component"
					subtitle="A layout component for smoothly managing scrollable content areas."
				/>
			</div>

			<Card>
				<CardHeader>
					<CardTitle level={2}>Vertical Scrolling</CardTitle>
				</CardHeader>
				<CardContent>
					<ScrollArea className="h-48 border rounded-md p-4">
						<div className="space-y-4">
							{Array.from({ length: 15 }).map((_, i) => (
								<div
									key={i}
									className="p-3 bg-muted rounded-md border text-sm"
								>
									User comment or activity item #{i + 1}
								</div>
							))}
						</div>
					</ScrollArea>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle level={2}>Horizontal Scrolling</CardTitle>
				</CardHeader>
				<CardContent>
					<ScrollArea
						orientation="horizontal"
						className="w-full border rounded-md p-4 whitespace-nowrap"
					>
						<div className="flex gap-4">
							{Array.from({ length: 15 }).map((_, i) => (
								<div
									key={i}
									className="p-4 bg-muted rounded-md w-32 shrink-0 text-center border h-24 flex items-center justify-center"
								>
									Item {i + 1}
								</div>
							))}
						</div>
					</ScrollArea>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle level={2}>Hidden Scrollbar</CardTitle>
				</CardHeader>
				<CardContent>
					<ScrollArea
						hideScrollbar={true}
						className="h-48 border rounded-md p-4"
					>
						<div className="space-y-4">
							<p className="text-sm text-muted-foreground mb-4">
								Scrolling still works, but the native UI bar is completely
								hidden by custom logic.
							</p>
							{Array.from({ length: 15 }).map((_, i) => (
								<div
									key={i}
									className="p-3 bg-muted rounded-md border text-sm"
								>
									Item {i + 1}
								</div>
							))}
						</div>
					</ScrollArea>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle level={2}>Both Directions</CardTitle>
				</CardHeader>
				<CardContent>
					<ScrollArea
						orientation="both"
						className="w-full h-48 border rounded-md p-4 whitespace-nowrap"
					>
						<div className="flex flex-col gap-4 w-[600px]">
							{Array.from({ length: 15 }).map((_, r) => (
								<div
									key={r}
									className="flex gap-4"
								>
									{Array.from({ length: 5 }).map((_, c) => (
										<div
											key={`${r}-${c}`}
											className="p-2 bg-muted rounded-md w-32 shrink-0 text-center border"
										>
											Row {r + 1} Col {c + 1}
										</div>
									))}
								</div>
							))}
						</div>
					</ScrollArea>
				</CardContent>
			</Card>
		</Grid>
	);
}
