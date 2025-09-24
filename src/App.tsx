import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HoverReceiver from "@/visual-edits/VisualEditsMessenger";
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'next-themes'
import { TooltipProvider } from '@/components/ui/tooltip'
import { Toaster } from '@/components/ui/sonner'

// Initialize React Query client
// const queryClient = new QueryClient()

const App = () => (
  <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
    {/* Removed QueryClientProvider wrapper as React Query is not used */}
    <TooltipProvider>
      <Toaster />
      <HoverReceiver />
      <BrowserRouter>
        {/* ... existing routes ... */}
      </BrowserRouter>
    </TooltipProvider>
  </ThemeProvider>
);

export default App