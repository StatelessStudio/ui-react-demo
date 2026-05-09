'use client';

import { Heading } from '@stateless-studio/ui-react/components/typography';
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from '@stateless-studio/ui-react/components/cards';
import {
	Toolbar,
	ToolbarGroup,
	ToolbarSeparator,
	ToolbarSelect,
	ToolbarButton,
} from '@stateless-studio/ui-react/components/toolbars';
import {
	Button,
	ToggleGroup,
	ToggleGroupItem,
} from '@stateless-studio/ui-react/components/buttons';
import { ToggleBadge } from '@stateless-studio/ui-react/components/toggles';
import {
	BoxIcon,
	CheckIcon,
	ChevronDownIcon,
	ChevronRightIcon,
	ChevronUpIcon,
	CloseIcon,
	SpinnerIcon,
	StarIcon,
} from '@stateless-studio/ui-react/icons';

export default function ToolbarPage() {
	return (
		<div className="flex flex-col gap-6 p-6">
			<Heading level={2}>Toolbar</Heading>

			<div className="grid gap-6">
				<Card>
					<CardHeader>
						<CardTitle>Basic Usage</CardTitle>
					</CardHeader>
					<CardContent>
						<Toolbar aria-label="Text Formatting">
							<ToolbarGroup>
								<ToolbarSelect
									aria-label="Text Style"
									defaultValue="Paragraph"
								>
									<option value="Paragraph">Paragraph</option>
									<option value="Heading 1">Heading 1</option>
									<option value="Heading 2">Heading 2</option>
									<option value="Heading 3">Heading 3</option>
								</ToolbarSelect>
							</ToolbarGroup>

							<ToolbarSeparator />

							<ToolbarGroup>
								<ToolbarButton
									icon={<BoxIcon />}
									label="Box"
								/>
								<ToolbarButton
									icon={<StarIcon />}
									label="Star"
								/>
								<ToolbarButton
									icon={<CheckIcon />}
									label="Check"
								/>
								<ToolbarButton
									icon={<ChevronDownIcon />}
									label="Chevron Down"
								/>
								<ToolbarButton
									icon={<ChevronRightIcon />}
									label="Chevron Right"
								/>
								<ToolbarButton
									icon={<ChevronUpIcon />}
									label="Chevron Up"
								/>
								<ToolbarButton
									icon={<CloseIcon />}
									label="Close"
								/>
								<ToolbarButton
									icon={<SpinnerIcon />}
									label="Spinner"
								/>
							</ToolbarGroup>

							<ToolbarSeparator />

							<ToggleGroup
								type="multiple"
								aria-label="Text Formatting"
							>
								<ToggleGroupItem
									value="bold"
									aria-label="Toggle Bold"
								>
									B
								</ToggleGroupItem>
								<ToggleGroupItem
									value="italic"
									aria-label="Toggle Italic"
								>
									I
								</ToggleGroupItem>
								<ToggleGroupItem
									value="underline"
									aria-label="Toggle Underline"
								>
									U
								</ToggleGroupItem>
							</ToggleGroup>

							<ToolbarSeparator />

							<ToolbarGroup>
								<Button
									size="sm"
									color="primary"
								>
									Action
								</Button>
							</ToolbarGroup>

							<ToolbarSeparator />

							<ToolbarGroup>
								<ToggleBadge color="gradient">Auto Save</ToggleBadge>
							</ToolbarGroup>
						</Toolbar>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Vertical Orientation</CardTitle>
					</CardHeader>
					<CardContent>
						<Toolbar
							aria-label="Vertical Formatting"
							orientation="vertical"
						>
							<ToolbarGroup orientation="vertical">
								<ToolbarButton
									icon={<BoxIcon />}
									label="Box"
								/>
								<ToolbarButton
									icon={<StarIcon />}
									label="Star"
								/>
							</ToolbarGroup>

							<ToolbarSeparator orientation="horizontal" />

							<ToggleGroup
								type="multiple"
								aria-label="Vertical Formatting"
								orientation="vertical"
							>
								<ToggleGroupItem
									value="bold"
									aria-label="Toggle Bold"
								>
									B
								</ToggleGroupItem>
								<ToggleGroupItem
									value="italic"
									aria-label="Toggle Italic"
								>
									I
								</ToggleGroupItem>
							</ToggleGroup>
						</Toolbar>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
