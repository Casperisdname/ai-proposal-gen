import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { Sparkles, LayoutDashboard, History } from 'lucide-react'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SmartProposal | Professional Contracts in Seconds',
  description:
    'Generate high-quality business proposals and contracts using AI.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body
        className={`${inter.className} antialiased bg-[#F8FAFC] text-slate-900 min-h-screen flex flex-col`}
      >
        {/* Main Navigation */}
        <nav className='sticky top-0 z-50 border-b bg-white/80 backdrop-blur-md py-4 px-6 sm:px-8'>
          <div className='max-w-7xl mx-auto flex justify-between items-center'>
            {/* Logo */}
            <Link
              href='/'
              className='group flex items-center gap-2 font-bold text-xl tracking-tight text-blue-600 transition-all'
            >
              <div className='bg-blue-600 p-1.5 rounded-lg group-hover:rotate-12 transition-transform shadow-lg shadow-blue-100'>
                <Sparkles className='w-5 h-5 text-white' />
              </div>
              <span>
                Smart<span className='text-slate-900'>Proposal</span>
              </span>
            </Link>

            {/* Nav Links */}
            <div className='flex items-center gap-2 sm:gap-6 text-sm font-semibold text-slate-500'>
              <Link
                href='/'
                className='flex items-center gap-2 px-3 py-2 rounded-lg hover:text-blue-600 hover:bg-blue-50 transition-all active:scale-95'
              >
                <LayoutDashboard className='w-4 h-4' />
                <span className='hidden sm:inline'>Dashboard</span>
              </Link>

              <Link
                href='/history'
                className='flex items-center gap-2 px-3 py-2 rounded-lg hover:text-blue-600 hover:bg-blue-50 transition-all active:scale-95'
              >
                <History className='w-4 h-4' />
                <span className='hidden sm:inline'>History</span>
              </Link>
            </div>
          </div>
        </nav>

        {/* Page Content */}
        <main className='flex-1'>{children}</main>

        {/* Footer */}
        <footer className='py-12 border-t border-slate-200 bg-white'>
          <div className='max-w-7xl mx-auto px-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-400 text-xs font-medium'>
            <p>
              © {new Date().getFullYear()} SmartProposal Architect. Built for
              efficiency.
            </p>
            <div className='flex gap-6'>
              <a href='#' className='hover:text-slate-600 transition-colors'>
                Privacy Policy
              </a>
              <a href='#' className='hover:text-slate-600 transition-colors'>
                Terms
              </a>
              <a href='#' className='hover:text-slate-600 transition-colors'>
                Support
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
