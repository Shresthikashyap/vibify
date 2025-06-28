import { ResizablePanel, ResizablePanelGroup, ResizableHandle } from '@/components/ui/resizable';
import { Outlet } from 'react-router-dom';
import LeftSidebar from './components/LeftSidebar';
const MainLayout = () => {
  return (
    // flex flex-col - Establishes a vertical flexbox container for the main layout structure
    <div className='h-screen bg-black text-white flex flex-col'>
        {/* flex-1 - Makes the panel group expand to fill all available space in its parent container */}
        <ResizablePanelGroup direction='horizontal' className='flex-1 flex h-full overflow-hidden p-2'>
            <ResizablePanel defaultSize={20} minSize={10} maxSize={30}>
                <LeftSidebar/>
            </ResizablePanel>

            <ResizableHandle className='w-2 bg-black rounded-lg transition-colors'/>

            <ResizablePanel defaultSize={60}>
                <Outlet/>
            </ResizablePanel>

            <ResizableHandle className='w-2 bg-black rounded-lg transition-colors'/>

            <ResizablePanel defaultSize={20} minSize={0} maxSize={25} collapsedSize={0}>
                right sidebar
            </ResizablePanel>

        </ResizablePanelGroup>

    </div>
  )
}

export default MainLayout