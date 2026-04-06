'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Proposal } from '../page'
import {
  Trash2,
  ChevronLeft,
  Clock,
  FileText,
  Search,
  ArrowRight,
  Calendar,
  AlertCircle,
} from 'lucide-react'

export default function HistoryPage() {
  const [history, setHistory] = useState<Proposal[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [isLoaded, setIsLoaded] = useState(false)

  // Load from localStorage only on mount
  useEffect(() => {
    const saved = localStorage.getItem('proposal_history')
    if (saved) {
      try {
        setHistory(JSON.parse(saved))
      } catch (e) {
        console.error('Failed to parse history')
      }
    }
    setIsLoaded(true)
  }, [])

  const deleteOne = (id: string) => {
    if (window.confirm('Remove this proposal from your history?')) {
      const updated = history.filter((item) => item.id !== id)
      setHistory(updated)
      localStorage.setItem('proposal_history', JSON.stringify(updated))
    }
  }

  const filteredHistory = history.filter(
    (item) =>
      item.input.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.output.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  if (!isLoaded) return null // Prevents hydration flicker

  return (
    <div className='min-h-screen bg-[#F8FAFC] pb-20'>
      {/* Page Header */}
      <header className='bg-white border-b border-slate-200 py-10 px-6'>
        <div className='max-w-5xl mx-auto'>
          <Link
            href='/'
            className='inline-flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-blue-600 transition-colors mb-6'
          >
            <ChevronLeft className='w-4 h-4' />
            Back to Dashboard
          </Link>

          <div className='flex flex-col md:flex-row md:items-center justify-between gap-6'>
            <div>
              <h1 className='text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3'>
                <Clock className='w-8 h-8 text-blue-600' />
                Proposal Archive
              </h1>
              <p className='text-slate-500 font-medium mt-1'>
                Review and manage your previously generated contracts.
              </p>
            </div>

            {/* Search Bar */}
            <div className='relative'>
              <Search className='absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400' />
              <input
                type='text'
                placeholder='Search proposals...'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className='pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-50 focus:border-blue-400 outline-none transition-all w-full md:w-64 text-sm font-medium'
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className='max-w-5xl mx-auto px-6 mt-10'>
        {filteredHistory.length === 0 ? (
          <div className='bg-white border-2 border-dashed border-slate-200 rounded-3xl py-20 flex flex-col items-center justify-center text-center'>
            <div className='bg-slate-50 p-6 rounded-full mb-4'>
              <FileText className='w-12 h-12 text-slate-200' />
            </div>
            <h3 className='text-lg font-bold text-slate-900'>
              No proposals found
            </h3>
            <p className='text-slate-400 text-sm max-w-xs mt-2'>
              {searchTerm
                ? 'No results match your search.'
                : "You haven't generated any proposals yet."}
            </p>
          </div>
        ) : (
          <div className='grid grid-cols-1 gap-4'>
            {filteredHistory.map((item) => (
              <div
                key={item.id}
                className='group bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/5 transition-all animate-in fade-in slide-in-from-bottom-2'
              >
                <div className='flex items-start justify-between'>
                  <div className='flex-1 pr-8'>
                    <div className='flex items-center gap-3 mb-3'>
                      <div className='flex items-center gap-1.5 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100'>
                        <Calendar className='w-3 h-3 text-blue-600' />
                        <span className='text-[10px] font-black text-blue-600 uppercase tracking-widest'>
                          {item.timestamp}
                        </span>
                      </div>
                    </div>

                    <h4 className='text-slate-900 font-bold text-lg line-clamp-1 mb-2'>
                      {item.input}
                    </h4>
                    <p className='text-slate-500 text-sm line-clamp-2 leading-relaxed font-medium mb-4'>
                      {item.output}
                    </p>

                    <div className='flex items-center gap-4'>
                      <Link
                        href={`/?id=${item.id}`} // This would require logic on Home to load specific IDs
                        className='text-xs font-bold text-blue-600 flex items-center gap-1 hover:underline'
                      >
                        Open in Workspace <ArrowRight className='w-3 h-3' />
                      </Link>
                    </div>
                  </div>

                  <button
                    onClick={() => deleteOne(item.id)}
                    className='p-2.5 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all border border-transparent hover:border-red-100'
                  >
                    <Trash2 className='w-5 h-5' />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Storage Alert */}
      <div className='max-w-5xl mx-auto px-6 mt-12'>
        <div className='bg-blue-50/50 border border-blue-100 rounded-2xl p-4 flex items-center gap-3'>
          <AlertCircle className='w-5 h-5 text-blue-500' />
          <p className='text-[11px] text-blue-700 font-bold uppercase tracking-wider'>
            Data is stored locally in your browser and is cleared if you wipe
            your site data.
          </p>
        </div>
      </div>
    </div>
  )
}
