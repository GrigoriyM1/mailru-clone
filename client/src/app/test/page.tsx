import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function TabsDemo() {
	return (
		<Tabs defaultValue='account' className='w-[400px]'>
			<TabsList className='grid w-full grid-cols-2'>
				<TabsTrigger value='account'>Account</TabsTrigger>
				<TabsTrigger value='password'>Password</TabsTrigger>
			</TabsList>
			<TabsContent value='account'>
				<h1>account</h1>
			</TabsContent>
			<TabsContent value='password'>
				<h1>password</h1>
			</TabsContent>
		</Tabs>
	);
}
