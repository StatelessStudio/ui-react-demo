export const components = [
	{
		name: 'Buttons',
		components: [
			{
				name: 'Button',
				path: '/buttons/button',
				summary: 'A basic button component',
			},
			{
				name: 'Button Group',
				path: '/buttons/button-group',
				summary: 'A group of buttons',
			},
			{
				name: 'Toggle Group',
				path: '/buttons/toggle-group',
				summary: 'A group of toggle buttons',
			},
		],
	},
	{
		name: 'Cards',
		components: [
			{
				name: 'Card',
				path: '/cards/card',
				summary: 'A card component for displaying content in a card layout',
			},
		],
	},
	{
		name: 'Collapsibles',
		components: [
			{
				name: 'Collapsible',
				path: '/collapsibles/collapsible',
				summary: 'An interactive component which expands/collapses content',
			},
			{
				name: 'Accordion',
				path: '/collapsibles/accordion',
				summary: 'A vertically stacked set of interactive headings',
			},
		],
	},
	{
		name: 'Data-Tables',
		components: [
			{
				name: 'Data Table',
				path: '/data-tables/data-table',
				summary: 'A component for displaying tabular data',
			},
			{
				name: 'Data Table Selection',
				path: '/data-tables/data-table-selection',
				summary: 'Data table with row selection using useTableSelection hook',
			},
		],
	},
	{
		name: 'Feedback',
		components: [
			{
				name: 'Alert',
				path: '/feedback/alert',
				summary: 'An alert component for displaying messages',
			},
			{
				name: 'Badge',
				path: '/feedback/badge',
				summary: 'A badge component for displaying status or counts',
			},
			{
				name: 'Empty State',
				path: '/feedback/empty-state',
				summary:
					'An empty state component for displaying when there is no data',
			},
			{
				name: 'Toast',
				path: '/feedback/toast',
				summary: 'A toast component for displaying brief messages',
			},
		],
	},
	{
		name: 'Forms',
		components: [
			{
				name: 'Checkbox',
				path: '/forms/checkbox',
				summary: 'A checkbox component for selecting options',
			},
			{
				name: 'ComboBox',
				path: '/forms/combobox',
				summary: 'A combo box component for selecting options from a dropdown',
			},
			{
				name: 'Form Group',
				path: '/forms/form-group',
				summary: 'A form group component for grouping related form elements',
			},
			{
				name: 'Input',
				path: '/forms/input',
				summary: 'An input component for entering text',
			},
			{
				name: 'Radio',
				path: '/forms/radio',
				summary: 'A radio button component for selecting one option from a set',
			},
			{
				name: 'Rating',
				path: '/forms/rating',
				summary: 'A rating component for sequential evaluation or input scales',
			},
			{
				name: 'Search',
				path: '/forms/search',
				summary: 'A search input component with built-in icon and clear button',
			},
			{
				name: 'Segmented Input',
				path: '/forms/segmented-input',
				summary:
					'A segmented input component for character-by-character entry like OTP',
			},
			{
				name: 'Select',
				path: '/forms/select',
				summary: 'A select component for choosing an option from a dropdown',
			},
			{
				name: 'Textarea',
				path: '/forms/textarea',
				summary: 'A textarea component for entering multi-line text',
			},
		],
	},
	{
		name: 'Layout',
		components: [
			{
				name: 'Center',
				path: '/layout/center',
				summary:
					'A layout component that centers its content horizontally and vertically',
			},
			{
				name: 'Container',
				path: '/layout/container',
				summary:
					'A layout component that centers its content and constrains its maximum width',
			},
			{
				name: 'Divider',
				path: '/layout/divider',
				summary: 'A divider component for separating content',
			},
			{
				name: 'Flex',
				path: '/layout/flex',
				summary:
					'A primitive flexbox component for building building blocks and dynamic layouts',
			},
			{
				name: 'Grid',
				path: '/layout/grid',
				summary: 'A grid component for creating responsive layouts',
			},
			{
				name: 'Group',
				path: '/layout/group',
				summary: 'A horizontal layout component for inline wrapping elements',
			},
			{
				name: 'Header',
				path: '/layout/header',
				summary:
					'A top-level structural component for navigation menus and titles',
			},
			{
				name: 'Page Heading',
				path: '/layout/page-heading',
				summary:
					'A layout component providing structured page titles, subtitles, and actions side-by-side',
			},

			{
				name: 'Scroll Area',
				path: '/layout/scroll-area',
				summary:
					'A layout component that robustly manages customized scrolling behavior',
			},
			{
				name: 'Sidebar',
				path: '/layout/sidebar',
				summary: 'A sidebar component for navigation or additional content',
			},
			{
				name: 'Stack',
				path: '/layout/stack',
				summary: 'A vertical layout component for distributing items uniformly',
			},
		],
	},
	{
		name: 'Media',
		components: [
			{
				name: 'Avatar',
				path: '/media/avatar',
				summary: 'An avatar component for displaying user profile pictures',
			},
		],
	},
	{
		name: 'Navigation',
		components: [
			{
				name: 'Breadcrumbs',
				path: '/navigation/breadcrumbs',
				summary: 'A breadcrumbs component for displaying navigation hierarchy',
			},
			{
				name: 'Menu',
				path: '/navigation/menu',
				summary: 'A menu component for displaying a list of navigation links',
			},
			{
				name: 'Pagination',
				path: '/navigation/pagination',
				summary:
					'A pagination component for navigating through pages of content',
			},
			{
				name: 'Tabs',
				path: '/navigation/tabs',
				summary: 'A tabs component for alternating between views',
			},
			{
				name: 'Tree',
				path: '/navigation/tree',
				summary: 'A tree component for displaying hierarchical data',
			},
		],
	},
	{
		name: 'Overlay',
		components: [
			{
				name: 'ContextMenu',
				path: '/overlay/context-menu',
				summary:
					'A context menu component for displaying actions on right-click',
			},
			{
				name: 'Drawer',
				path: '/overlay/drawer',
				summary: 'A drawer component for displaying content in a sliding panel',
			},
			{
				name: 'Modal',
				path: '/overlay/modal',
				summary: 'A modal component for displaying content in a dialog',
			},
			{
				name: 'Popover',
				path: '/overlay/popover',
				summary:
					'A popover component for displaying content in a floating container',
			},
			{
				name: 'Tooltip',
				path: '/overlay/tooltip',
				summary:
					'A tooltip component for displaying brief informative messages',
			},
		],
	},
	{
		name: 'Progress',
		path: '/layout/progress',
		summary: 'A layout component for displaying progress steps and status',
		components: [
			{
				name: 'Ping',
				path: '/progress/ping',
				summary: 'A ping indicator for notifications or status updates',
			},
			{
				name: 'Progress-Bar',
				path: '/progress/progress-bar',
				summary:
					'A progress bar component for displaying task completion status',
			},
			{
				name: 'Skeleton',
				path: '/progress/skeleton',
				summary: 'A placeholder component to show while content is loading',
			},
			{
				name: 'Spinner',
				path: '/progress/spinner',
				summary: 'A spinner component for indicating loading state',
			},
		],
	},
	{
		name: 'Tables',
		components: [
			{
				name: 'Table',
				path: '/tables/table',
				summary: 'A table component for displaying tabular data',
			},
		],
	},
	{
		name: 'Toggles',
		components: [
			{
				name: 'Toggle',
				path: '/toggles/toggle',
				summary: 'A toggle component for switching between two states',
			},
			{
				name: 'Toggle Badge',
				path: '/toggles/toggle-badge',
				summary:
					'A toggle badge component combining a badge and a slide toggle',
			},
		],
	},
	{
		name: 'Toolbars',
		components: [
			{
				name: 'Toolbar',
				path: '/toolbars/toolbar',
				summary: 'A toolbar component for grouping controls',
			},
		],
	},
	{
		name: 'Typography',
		components: [
			{
				name: 'Heading',
				path: '/typography/heading',
				summary: 'A heading component for displaying titles and headings',
			},
			{
				name: 'Text',
				path: '/typography/text',
				summary: 'A typography component for consistent text styling and sizes',
			},
		],
	},
];
