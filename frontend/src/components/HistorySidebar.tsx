'use client'

import { useEffect, useState } from 'react'
import { Proposal } from '@/app/page'
import {
  Clock,
  Trash2,
  ChevronRight,
  Eraser,
  FileText,
  Calendar,
} from 'lucide-react'

interface HistorySidebarProps {
  history: Proposal[]
  onSelect: (item: Proposal) => void
  onClear: () => void
  onDeleteOne: (id: string) => void
}

export default function HistorySidebar({
  history,
  onSelect,
  onClear,
  onDeleteOne,
}: HistorySidebarProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <aside className='bg-white shadow-sm border border-slate-200 rounded-2xl flex flex-col h-[calc(100vh-140px)] sticky top-24 transition-all overflow-hidden'>
      {/* Header */}
      <div className='p-5 border-b border-slate-100 flex justify-between items-center bg-white z-10'>
        <h2 className='font-bold text-slate-900 flex items-center gap-2 text-sm'>
          <Clock className='w-4 h-4 text-blue-600' />
          <span>Recent Activity</span>
        </h2>

        {history.length > 0 && (
          <button
            onClick={(e) => {
              e.preventDefault()
              onClear()
            }}
            className='group flex items-center gap-1.5 text-[10px] text-slate-400 hover:text-red-600 font-black uppercase tracking-widest transition-all focus:outline-none'
          >
            <Eraser className='w-3 h-3 transition-transform group-hover:-rotate-12' />
            Clear All
          </button>
        )}
      </div>

      {/* History List */}
      <div className='flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar scroll-smooth'>
        {history.length === 0 ? (
          <div className='flex flex-col items-center justify-center py-16 text-center animate-in fade-in zoom-in-95 duration-500'>
            <div className='bg-slate-50 p-4 rounded-3xl mb-4 border border-slate-100'>
              <FileText className='w-8 h-8 text-slate-300' />
            </div>
            <p className='text-xs text-slate-500 font-bold uppercase tracking-tighter'>
              Vault is Empty
            </p>
            <p className='text-[11px] text-slate-400 px-8 mt-2 leading-relaxed'>
              Your generated proposals will be safely stored here for later use.
            </p>
          </div>
        ) : (
          history.map((item) => (
            <div
              key={item.id}
              className='group relative flex items-center gap-2 animate-in slide-in-from-right-2 duration-300'
            >
              <button
                onClick={() => onSelect(item)}
                className='flex-1 text-left p-4 rounded-xl border border-slate-100 bg-white hover:border-blue-200 hover:bg-blue-50/20 hover:shadow-sm transition-all relative overflow-hidden active:scale-[0.98]'
              >
                <div className='flex flex-col pr-8'>
                  <div className='flex items-center gap-1.5 mb-1'>
                    <Calendar className='w-3 h-3 text-slate-300' />
                    <span className='text-[9px] font-black text-slate-400 uppercase tracking-tighter'>
                      {item.timestamp}
                    </span>
                  </div>
                  <p className='text-xs text-slate-700 font-bold truncate leading-tight'>
                    {item.input}
                  </p>
                </div>

                <ChevronRight className='absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all' />
              </button>

              {/* Individual Delete Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  onDeleteOne(item.id)
                }}
                className='opacity-0 group-hover:opacity-100 p-2.5 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all absolute -right-1 bg-white border border-slate-100 shadow-sm md:static md:bg-transparent md:border-none md:shadow-none z-20'
                title='Remove entry'
              >
                <Trash2 className='w-4 h-4' />
              </button>
            </div>
          ))
        )}
      </div>

      {/* Footer Meta */}
      <div className='p-4 bg-slate-50/50 border-t border-slate-100'>
        <div className='flex justify-between items-center px-1'>
          <span className='text-[9px] text-slate-400 font-black uppercase tracking-widest'>
            Storage Sync
          </span>
          <span className='text-[9px] bg-white px-2 py-0.5 rounded-full border border-slate-200 text-slate-500 font-bold shadow-sm'>
            {history.length} Item{history.length !== 1 && 's'}
          </span>
        </div>
      </div>
    </aside>
  )
}
