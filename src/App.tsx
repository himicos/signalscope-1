import HoverReceiver from "@/visual-edits/VisualEditsMessenger";
import { ThemeProvider } from 'next-themes'
import { TooltipProvider } from '@/components/ui/tooltip'
import { Toaster } from '@/components/ui/sonner'
import { LandingApp } from '../landing/src/LandingApp'
import '../landing/src/styles.css'

const App = () => (
  <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
    <TooltipProvider>
      <Toaster />
      <HoverReceiver />
      <LandingApp />
    </TooltipProvider>
  </ThemeProvider>
);

export default App