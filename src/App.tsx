import HoverReceiver from "@/visual-edits/VisualEditsMessenger";
import { ThemeProvider } from 'next-themes'
import { TooltipProvider } from '@/components/ui/tooltip'
import { Toaster } from '@/components/ui/sonner'

const App = () => (
  <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
    <TooltipProvider>
      <Toaster />
      <HoverReceiver />
      <main className="min-h-screen flex items-center justify-center bg-background text-foreground p-6">
        <div className="max-w-xl text-center space-y-4">
          <h1 className="text-2xl font-semibold">App is running</h1>
          <p className="text-sm opacity-80">This is the product app shell. The marketing landing lives in the separate <code>landing/</code> project. Start it with:</p>
          <pre className="text-left bg-muted/30 p-3 rounded-md text-xs overflow-auto"><code>cd landing
npm install
npm run dev</code></pre>
        </div>
      </main>
    </TooltipProvider>
  </ThemeProvider>
);

export default App