'use client';

import Image from 'next/image';
import {
	PageHeading,
	Grid,
} from '@stateless-studio/ui-react/components/layout';
import { Avatar } from '@stateless-studio/ui-react/components/media';
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from '@stateless-studio/ui-react/components/cards';

export default function AvatarDemo() {
	return (
		<Grid>
			<div>
				<PageHeading
					title="Avatar Component"
					subtitle="Use avatars to represent users, teams, or entities."
				/>
			</div>

			<Card>
				<CardHeader>
					<CardTitle level={2}>Sizes</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="flex items-center gap-4">
						<Avatar
							size="sm"
							initials="SM"
						/>
						<Avatar
							size="md"
							initials="MD"
						/>
						<Avatar
							size="lg"
							initials="LG"
						/>
						<Avatar
							size="xl"
							initials="XL"
						/>
						<Avatar
							size="2xl"
							initials="2X"
						/>
					</div>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle level={2}>With Images</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="flex items-center gap-4">
						<Avatar
							size="md"
							src="https://i.pravatar.cc/150?img=68"
							alt="User 1"
							initials="JR"
						/>
						<Avatar
							size="lg"
							src="https://i.pravatar.cc/150?img=47"
							alt="User 2"
							initials="MJ"
							imageComponent={Image}
							imageProps={{ width: 150, height: 150 }}
						/>
						<Avatar
							size="xl"
							src="https://i.pravatar.cc/150?img=32"
							alt="User 3"
							initials="SK"
							imageComponent={Image}
							imageProps={{ width: 150, height: 150 }}
						/>
					</div>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle level={2}>Image Fallback (Error)</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="flex items-center gap-4">
						<p className="text-sm text-muted-foreground mr-4">
							When an image fails to load, it will seamlessly fall back to
							initials.
						</p>
						<Avatar
							size="lg"
							src="https://invalid-image-url.com/broken.jpg"
							alt="Invalid User"
							initials="FB"
						/>
					</div>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle level={2}>Shapes</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="flex items-center gap-4">
						<Avatar
							size="lg"
							shape="circle"
							initials="CR"
						/>
						<Avatar
							size="lg"
							shape="square"
							initials="SQ"
						/>
					</div>
				</CardContent>
			</Card>
		</Grid>
	);
}
