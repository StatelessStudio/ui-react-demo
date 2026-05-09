import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { cn } from '@stateless-studio/ui-react/style-engine';
import { AppSidebar } from '@/components/layout/AppSidebar';
import { SidebarLayout } from '@stateless-studio/ui-react/layouts';
import { ToastProvider } from '@stateless-studio/ui-react/components/feedback';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Stateless Studio UI',
	description: 'Demo App for @stateless-studio/ui-react',
};

export function Brand() {
	return (
		<div className="flex items-center gap-2 px-2">
			<span className="w-6 h-6 rounded-full shrink-none bg-primary"></span>
			<span className="text-sm font-medium">{metadata.title as string}</span>
		</div>
	);
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={cn(
				geistSans.variable,
				geistMono.variable,
				'h-full antialiased'
			)}
		>
			<body className="bg-page text-foreground">
				<ToastProvider position="bottom-right">
					<SidebarLayout
						sidebar={<AppSidebar brand={<Brand />} />}
						mobileHeader={<Brand />}
					>
						{children}
					</SidebarLayout>
				</ToastProvider>
			</body>
		</html>
	);
}
