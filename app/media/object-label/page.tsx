'use client';

import {
	PageHeading,
	Grid,
	Group,
} from '@stateless-studio/ui-react/components/layout';
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from '@stateless-studio/ui-react/components/cards';
import { ObjectLabel } from '@stateless-studio/ui-react/components/media';
import { Text } from '@stateless-studio/ui-react/components/typography';
import { BoxIcon, CheckIcon, SearchIcon } from '@stateless-studio/ui-react/icons';

export default function ObjectLabelPage() {
	return (
		<Grid>
			<div>
				<PageHeading
					title="ObjectLabel"
					subtitle="Display an object with a label below it. Useful for showing icons, avatars, or other visual elements with associated text."
				/>
			</div>

			<Card>
				<CardHeader>
					<CardTitle level={2}>Basic Usage</CardTitle>
				</CardHeader>
				<CardContent>
					<Group gap="md">
						<ObjectLabel
							object={
								<div className="h-10 w-10 rounded bg-muted flex items-center justify-center text-muted-foreground">
									ID
								</div>
							}
							label="User Profile"
						/>
						<ObjectLabel
							object={
								<div className="h-10 w-10 rounded bg-blue-500/20 flex items-center justify-center text-blue-500">
									FD
								</div>
							}
							label="Documents"
						/>
						<ObjectLabel
							object={
								<div className="h-10 w-10 rounded bg-green-500/20 flex items-center justify-center text-green-500">
									PDF
								</div>
							}
							label="Report.pdf"
						/>
					</Group>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle level={2}>Gap Variants</CardTitle>
				</CardHeader>
				<CardContent>
					<Group gap="md">
						<ObjectLabel
							object={
								<div className="h-16 w-16 rounded bg-purple-500/20 flex items-center justify-center text-purple-500">
									ID
								</div>
							}
							label="Small Gap"
							gap="sm"
						/>
						<ObjectLabel
							object={
								<div className="h-16 w-16 rounded bg-purple-500/20 flex items-center justify-center text-purple-500">
									ID
								</div>
							}
							label="Medium Gap"
							gap="md"
						/>
						<ObjectLabel
							object={
								<div className="h-16 w-16 rounded bg-purple-500/20 flex items-center justify-center text-purple-500">
									ID
								</div>
							}
							label="Large Gap"
							gap="lg"
						/>
					</Group>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle level={2}>With Images</CardTitle>
				</CardHeader>
				<CardContent>
					<Group gap="md">
						<ObjectLabel
							object={
								<img
									src="https://i.pravatar.cc/150?img=68"
									alt="User 1"
									className="h-16 w-16 rounded-full object-cover"
								/>
							}
							label={<Text size="sm">Bob Smith</Text>}
						/>
						<ObjectLabel
							object={
								<img
									src="https://i.pravatar.cc/150?img=47"
									alt="User 2"
									className="h-16 w-16 rounded-full object-cover"
								/>
							}
							label={<Text size="sm">Alice Johnson</Text>}
						/>
					</Group>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle level={2}>With Icons</CardTitle>
				</CardHeader>
				<CardContent>
					<Group gap="md">
						<ObjectLabel
							object={<CheckIcon className="w-10 h-10 text-primary" />}
							label={<Text size="sm">Example 1</Text>}
						/>
						<ObjectLabel
							object={<BoxIcon className="w-10 h-10 text-secondary" />}
							label={<Text size="sm">Example 2</Text>}
						/>
						<ObjectLabel
							object={<SearchIcon className="w-10 h-10 text-accent" />}
							label={<Text size="sm">Example 3</Text>}
						/>
					</Group>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle level={2}>With Custom Label Styling</CardTitle>
				</CardHeader>
				<CardContent>
					<Group gap="md">
						<ObjectLabel
							object={
								<div className="h-10 w-10 rounded bg-muted flex items-center justify-center text-muted-foreground">
									ID
								</div>
							}
							label={<Text size="sm" weight="bold">Bold Label</Text>}
						/>
						<ObjectLabel
							object={
								<div className="h-10 w-10 rounded bg-blue-500/20 flex items-center justify-center text-blue-500">
									ID
								</div>
							}
							label={<Text size="lg" weight="semibold">Large Label</Text>}
						/>
					</Group>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle level={2}>With Custom Content</CardTitle>
				</CardHeader>
				<CardContent>
					<Group gap="md">
						<ObjectLabel
							object={
								<div className="h-16 w-16 rounded-lg bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center text-white font-bold text-2xl">
									JS
								</div>
							}
							label={<Text size="sm" weight="bold">JavaScript</Text>}
						/>
						<ObjectLabel
							object={
								<div className="h-16 w-16 rounded-lg bg-green-500 flex items-center justify-center text-white font-bold text-2xl">
									RS
								</div>
							}
							label={<Text size="sm" weight="bold">Rust</Text>}
						/>
					</Group>
				</CardContent>
			</Card>
		</Grid>
	);
}
