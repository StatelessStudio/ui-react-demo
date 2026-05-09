'use client';

import React from 'react';
import { Text } from '@stateless-studio/ui-react/components/typography';

export default function TextDemo() {
	return (
		<div className="space-y-12">
			<div>
				<h1 className="text-3xl font-bold mb-4">Text Component</h1>
				<p className="text-muted-foreground mb-8">
					The Text component provides consistent styling for paragraphs and
					inline text with a variety of sizes, weights, and colors.
				</p>

				<section className="space-y-6">
					<h2 className="text-2xl font-semibold border-b pb-2">Sizes</h2>
					<div className="space-y-4">
						<Text size="xs">
							Extra Small (xs) - The quick brown fox jumps over the lazy dog.
						</Text>
						<Text size="sm">
							Small (sm) - The quick brown fox jumps over the lazy dog.
						</Text>
						<Text size="base">
							Base (base) - The quick brown fox jumps over the lazy dog.
						</Text>
						<Text size="lg">
							Large (lg) - The quick brown fox jumps over the lazy dog.
						</Text>
						<Text size="xl">
							Extra Large (xl) - The quick brown fox jumps over the lazy dog.
						</Text>
						<Text size="2xl">2XL - The quick brown fox.</Text>
						<Text size="3xl">3XL - The quick brown fox.</Text>
						<Text size="4xl">4XL - The quick brown fox.</Text>
					</div>
				</section>

				<section className="space-y-6 mt-12">
					<h2 className="text-2xl font-semibold border-b pb-2">Colors</h2>
					<div className="space-y-4">
						<Text color="primary">Primary Text Color</Text>
						<Text color="secondary">Secondary Text Color</Text>
						<Text color="accent">Accent Text Color</Text>
						<Text color="muted">Muted Text Color</Text>
						<p>
							<Text
								color="gradient"
								as="span"
							>
								Gradient Text Color
							</Text>
						</p>
						<Text color="success">Success Text Color</Text>
						<Text color="warning">Warning Text Color</Text>
						<Text color="danger">Danger Text Color</Text>
						<Text color="info">Info Text Color</Text>
					</div>
				</section>

				<section className="space-y-6 mt-12">
					<h2 className="text-2xl font-semibold border-b pb-2">Weights</h2>
					<div className="space-y-4">
						<Text weight="light">Light Weight Font</Text>
						<Text weight="normal">Normal Weight Font</Text>
						<Text weight="medium">Medium Weight Font</Text>
						<Text weight="semibold">Semibold Weight Font</Text>
						<Text weight="bold">Bold Weight Font</Text>
						<Text weight="extrabold">Extrabold Weight Font</Text>
					</div>
				</section>

				<section className="space-y-6 mt-12">
					<h2 className="text-2xl font-semibold border-b pb-2">Alignment</h2>
					<div className="space-y-4 border p-4 rounded-md w-full max-w-md">
						<Text align="left">Left Aligned Text</Text>
						<Text align="center">Center Aligned Text</Text>
						<Text align="right">Right Aligned Text</Text>
					</div>
				</section>

				<section className="space-y-6 mt-12">
					<h2 className="text-2xl font-semibold border-b pb-2">Polymorphism</h2>
					<div className="space-y-4">
						<Text as="p">
							This is rendered as a standard paragraph (&lt;p&gt; tag).
						</Text>
						<Text
							as="span"
							className="block"
						>
							This is rendered as a &lt;span&gt; tag.
						</Text>
						<Text as="div">This is rendered as a &lt;div&gt; tag.</Text>
						<Text
							as="strong"
							weight="bold"
						>
							This is rendered as a &lt;strong&gt; tag.
						</Text>
					</div>
				</section>
			</div>
		</div>
	);
}
