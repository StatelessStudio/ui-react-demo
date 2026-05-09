'use client';

import { useState } from 'react';
import { Heading } from '@stateless-studio/ui-react/components/typography';
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from '@stateless-studio/ui-react/components/cards';
import { ComboBox } from '@stateless-studio/ui-react/components/forms';
import { Grid } from '@stateless-studio/ui-react/components/layout';

interface Option {
	value: string | number;
	label: string;
}

export default function ComboBoxPage() {
	const [singleValue, setSingleValue] = useState<Option | null>(null);
	const [multiValue, setMultiValue] = useState<Option[]>([]);

	const DUMMY_OPTIONS: Option[] = [
		{ value: 'apple', label: 'Apple' },
		{ value: 'banana', label: 'Banana' },
		{ value: 'cherry', label: 'Cherry' },
		{ value: 'date', label: 'Date' },
		{ value: 'elderberry', label: 'Elderberry' },
		{ value: 'fig', label: 'Fig' },
		{ value: 'grape', label: 'Grape' },
		{ value: 'honeydew', label: 'Honeydew' },
	];

	const loadOptions = async (inputValue: string): Promise<Option[]> => {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve(
					DUMMY_OPTIONS.filter((o) =>
						o.label.toLowerCase().includes(inputValue.toLowerCase())
					)
				);
			}, 500); // Simulate network delay
		});
	};

	return (
		<Grid>
			<div>
				<Heading level={1}>ComboBox</Heading>
				<p className="text-muted-foreground">
					An autocomplete async input that provides a list of selectable
					options.
				</p>
			</div>
			<Card>
				<CardHeader>
					<CardTitle level={2}>Single Select Async ComboBox</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="flex flex-col gap-4 max-w-sm">
						<ComboBox
							loadOptions={loadOptions}
							value={singleValue}
							onChange={(val) => setSingleValue(val)}
							placeholder="Search for a fruit..."
						/>
						<p className="text-sm text-slate-500">
							Selected: {singleValue ? singleValue.label : 'None'}
						</p>
					</div>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle level={2}>Multiple Select Async ComboBox</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="flex flex-col gap-4 max-w-sm">
						<ComboBox
							loadOptions={loadOptions}
							value={multiValue}
							onChange={(val) => setMultiValue(val)}
							isMulti
							placeholder="Search and select multiple fruits..."
						/>
						<p className="text-sm text-slate-500">
							Selected count: {multiValue.length}
						</p>
					</div>
				</CardContent>
			</Card>
		</Grid>
	);
}
