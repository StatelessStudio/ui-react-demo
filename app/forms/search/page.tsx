'use client';

import { useState, ChangeEvent } from 'react';
import { Heading } from '@stateless-studio/ui-react/components/typography';
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from '@stateless-studio/ui-react/components/cards';
import { Search, FormGroup } from '@stateless-studio/ui-react/components/forms';
import { useDebounce } from '@stateless-studio/ui-react/hooks';

export default function SearchPage() {
	const [searchValue, setSearchValue] = useState('');
	const [results, setResults] = useState<string>('');

	// Example debounced search function
	const handleDebouncedSearch = useDebounce((value: string) => {
		if (value) {
			console.log('Searching for:', value, Date.now());
			setResults(`Searching for: "${value}"...`);
			// In a real app, you'd call an API here
			// const results = await fetch(`/api/search?q=${value}`);
		}
		else {
			console.log('Cleared search', Date.now());
			setResults('');
		}
	}, 500);

	const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value);
		handleDebouncedSearch(e.target.value);
	};

	return (
		<div className="space-y-8">
			<div>
				<Heading level={1}>Search</Heading>
				<p className="text-muted-foreground">
					A specialized input component for search queries with a built-in
					search icon.
				</p>
			</div>

			<Card>
				<CardHeader>
					<CardTitle level={2}>Basic Search</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="flex flex-col gap-4 max-w-sm">
						<Search placeholder="Search..." />
						<Search
							disabled
							placeholder="Disabled search"
						/>
					</div>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle level={2}>Sizes</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="space-y-4">
						<FormGroup
							label="Small"
							htmlFor="size-sm"
						>
							<Search
								id="size-sm"
								size="sm"
								placeholder="Small search"
							/>
						</FormGroup>
						<FormGroup
							label="Medium"
							htmlFor="size-md"
						>
							<Search
								id="size-md"
								size="md"
								placeholder="Medium search"
							/>
						</FormGroup>
						<FormGroup
							label="Large"
							htmlFor="size-lg"
						>
							<Search
								id="size-lg"
								size="lg"
								placeholder="Large search"
							/>
						</FormGroup>
					</div>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle level={2}>States</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="space-y-4">
						<FormGroup
							label="Default"
							htmlFor="state-default"
						>
							<Search
								id="state-default"
								placeholder="Default state"
							/>
						</FormGroup>
						<FormGroup
							label="Error"
							htmlFor="state-error"
							error="Please enter a valid search query"
						>
							<Search
								id="state-error"
								invalid
								placeholder="Invalid search"
							/>
						</FormGroup>
					</div>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle level={2}>Debounced Search</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="space-y-4 max-w-sm">
						<FormGroup
							label="Search with debounce (500ms)"
							htmlFor="debounce-search"
						>
							<Search
								id="debounce-search"
								placeholder="Type to search..."
								value={searchValue}
								onChange={handleSearchChange}
							/>
						</FormGroup>
						{results ? (
							<div className="text-sm text-muted-foreground">{results}</div>
						) : searchValue === '' ? (
							<div className="text-sm text-muted-foreground italic">
								Ready to search...
							</div>
						) : null}
						<p className="text-xs text-muted-foreground">
							The search callback is debounced with a 500ms delay to reduce API
							calls.
						</p>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
