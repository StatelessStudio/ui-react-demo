'use client';

import {
	Heading,
	Subtitle,
} from '@stateless-studio/ui-react/components/typography';
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from '@stateless-studio/ui-react/components/cards';
import { Grid } from '@stateless-studio/ui-react/components/layout';

export default function TypographyPage() {
	return (
		<Grid>
			<div>
				<Heading level={1}>Typography</Heading>
				<Subtitle>Subtitle Text</Subtitle>
				<p className="text-muted-foreground">
					Text styles and hierarchies for readable content.
				</p>
			</div>
			<Card>
				<CardHeader>
					<CardTitle level={2}>Heading Levels</CardTitle>
				</CardHeader>
				<CardContent className="space-y-6">
					<div>
						<Heading level={1}>Heading Level 1</Heading>
						<p className="mt-2 text-foreground/80 leading-relaxed">
							The H1 heading is the most important heading on a page. It should
							accurately describe the primary topic of the page. For optimal
							accessibility and SEO, there should generally be only one H1 per
							document.
						</p>
					</div>
					<div>
						<Heading level={2}>Heading Level 2</Heading>
						<p className="mt-2 text-foreground/80 leading-relaxed">
							H2 headings represent major section divisions within the page.
							They help break up the content into logical, easily scannable
							chunks, allowing users to quickly navigate down the document.
						</p>
					</div>
					<div>
						<Heading level={3}>Heading Level 3</Heading>
						<p className="mt-2 text-foreground/80 leading-relaxed">
							Use H3 headings for subsections that fall under an H2. This
							establishes a clear semantic hierarchy and makes complex, heavily
							nested information easier to digest for screen readers and sighted
							users alike.
						</p>
					</div>
					<div>
						<Heading level={4}>Heading Level 4</Heading>
						<p className="mt-2 text-foreground/80 leading-relaxed">
							H4 headings are useful for grouping smaller pieces of related
							information within an H3 subsection. Common uses include specific
							feature lists, individual card titles, or minor distinct groups.
						</p>
					</div>
					<div>
						<Heading level={5}>Heading Level 5</Heading>
						<p className="mt-2 text-foreground/80 leading-relaxed">
							H5 headings are typically used for deeply nested categorizations,
							labeling detailed secondary data, or minor structural elements
							within complex UI components like side panels or rich dashboards.
						</p>
					</div>
					<div>
						<Heading level={6}>Heading Level 6</Heading>
						<p className="mt-2 text-foreground/80 leading-relaxed">
							The H6 heading is the lowest level of heading. It is rarely used
							in standard content layouts but can be helpful for granular
							semantic structuring in highly complex, technical documents.
						</p>
					</div>
				</CardContent>
			</Card>
		</Grid>
	);
}
