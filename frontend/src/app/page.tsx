'use client'

import { useState, useEffect, useRef } from 'react'
import HistorySidebar from '@/components/HistorySidebar'
import {
  Sparkles,
  Copy,
  Check,
  AlertCircle,
  Loader2,
  Wand2,
  RotateCcw,
} from 'lucide-react'

export interface Proposal {
  id: string
  timestamp: string
  input: string
  output: string
}

export default function Home() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [copied, setCopied] = useState(false)
  const [history, setHistory] = useState<Proposal[]>([])

  const outputRef = useRef<HTMLDivElement>(null)

  // Initial Load
  useEffect(() => {
    const saved = localStorage.getItem('proposal_history')
    if (saved) {
      try {
        setHistory(JSON.parse(saved))
      } catch (e) {
        console.error('Failed to parse history data')
      }
    }
  }, [])

  // Sync to localStorage whenever history changes
  useEffect(() => {
    if (history.length > 0 || localStorage.getItem('proposal_history')) {
      localStorage.setItem('proposal_history', JSON.stringify(history))
    }
  }, [history])

  const handleGenerate = async () => {
    if (!input.trim()) return

    setIsLoading(true)
    setCopied(false)

    try {
      const res = await fetch('http://localhost:8000/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ description: input }),
      })

      if (!res.ok) throw new Error('API request failed')

      const data = await res.json()
      setOutput(data.output)

      const newProposal: Proposal = {
        id: Date.now().toString(),
        timestamp: new Date().toLocaleDateString('en-GB', {
          day: '2-digit',
          month: 'short',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        }),
        input: input,
        output: data.output,
      }

      setHistory((prev) => [newProposal, ...prev])

      setTimeout(() => {
        outputRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }, 100)
    } catch (error) {
      console.error('Generation Error:', error)
      alert(
        'Could not connect to the AI engine. Ensure your backend is running.',
      )
    } finally {
      setIsLoading(false)
    }
  }

  const handleCopy = () => {
    if (!output) return
    navigator.clipboard.writeText(output)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const deleteOne = (id: string) => {
    setHistory((prev) => prev.filter((item) => item.id !== id))
  }

  const clearAll = () => {
    if (window.confirm('Delete all saved proposals? This cannot be undone.')) {
      setHistory([])
      localStorage.removeItem('proposal_history')
    }
  }

  const resetWorkspace = () => {
    setInput('')
    setOutput('')
  }

  const selectFromHistory = (item: Proposal) => {
    setOutput(item.output)
    setInput(item.input)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <main className='min-h-screen bg-[#F8FAFC] py-6 sm:py-12 px-4 sm:px-6'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8'>
        {/* Main Workspace */}
        <div className='lg:col-span-3 space-y-6'>
          <section className='bg-white shadow-sm border border-slate-200 rounded-3xl p-6 sm:p-10 transition-all'>
            <div className='flex items-center justify-between mb-8'>
              <div className='flex items-center gap-4'>
                <div className='bg-blue-600 p-3 rounded-2xl shadow-xl shadow-blue-100'>
                  <Wand2 className='w-6 h-6 text-white' />
                </div>
                <div>
                  <h1 className='text-2xl font-black text-slate-900 tracking-tight'>
                    Proposal Architect
                  </h1>
                  <p className='text-sm text-slate-500 font-medium'>
                    Generate winning professional drafts in seconds.
                  </p>
                </div>
              </div>

              {(input || output) && (
                <button
                  onClick={resetWorkspace}
                  className='text-slate-400 hover:text-blue-600 transition-all flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest'
                >
                  <RotateCcw className='w-3.5 h-3.5' />
                  Reset
                </button>
              )}
            </div>

            <div className='group relative'>
              <textarea
                className='w-full h-72 p-6 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-50 focus:border-blue-400 outline-none transition-all resize-none text-slate-700 bg-slate-50/30 placeholder:text-slate-400 leading-relaxed font-medium'
                placeholder='Paste the job description, project brief, or client requirements...'
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <div className='absolute bottom-4 right-4 text-[10px] font-black text-slate-400 uppercase tracking-widest bg-white px-3 py-1.5 rounded-lg border border-slate-100 shadow-sm'>
                {input.length} Characters
              </div>
            </div>

            <button
              onClick={handleGenerate}
              disabled={isLoading || !input.trim()}
              className={`mt-6 w-full flex items-center justify-center gap-3 py-5 rounded-2xl font-black uppercase tracking-widest text-white transition-all transform active:scale-[0.98] shadow-2xl ${
                isLoading || !input.trim()
                  ? 'bg-slate-200 cursor-not-allowed shadow-none text-slate-400'
                  : 'bg-blue-600 hover:bg-blue-700 shadow-blue-200 hover:-translate-y-0.5'
              }`}
            >
              {isLoading ? (
                <>
                  <Loader2 className='w-5 h-5 animate-spin' />
                  <span>AI is Crafting...</span>
                </>
              ) : (
                <>
                  <Sparkles className='w-5 h-5 text-blue-200' />
                  <span>Generate Proposal Draft</span>
                </>
              )}
            </button>
          </section>

          {/* Result Viewport */}
          <div ref={outputRef} className='scroll-mt-24'>
            {output ? (
              <section className='bg-white shadow-xl shadow-slate-200/50 border border-slate-200 rounded-3xl overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-700'>
                <div className='px-8 py-5 bg-slate-50/50 border-b border-slate-100 flex justify-between items-center'>
                  <div className='flex items-center gap-3'>
                    <div className='w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-200' />
                    <span className='text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]'>
                      AI Generation Complete
                    </span>
                  </div>
                  <button
                    onClick={handleCopy}
                    className='flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-xl transition-all border border-transparent hover:border-blue-100'
                  >
                    {copied ? (
                      <>
                        <Check className='w-4 h-4' />
                        <span>Copied to Clipboard</span>
                      </>
                    ) : (
                      <>
                        <Copy className='w-4 h-4' />
                        <span>Copy Draft</span>
                      </>
                    )}
                  </button>
                </div>
                <div className='p-8 sm:p-12'>
                  <pre className='whitespace-pre-wrap text-slate-800 font-sans leading-[1.9] text-[16px] selection:bg-blue-100'>
                    {output}
                  </pre>
                </div>
              </section>
            ) : (
              !isLoading && (
                <div className='flex flex-col items-center justify-center py-28 border-2 border-dashed border-slate-200 rounded-3xl bg-white/50'>
                  <div className='bg-slate-100 p-5 rounded-full mb-5'>
                    <AlertCircle className='w-10 h-10 text-slate-300' />
                  </div>
                  <h3 className='text-slate-900 font-bold'>Workspace Empty</h3>
                  <p className='text-sm text-slate-400 max-w-xs text-center mt-2 font-medium'>
                    Input your project details and watch the AI transform them
                    into a professional proposal.
                  </p>
                </div>
              )
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div className='lg:col-span-1'>
          <HistorySidebar
            history={history}
            onSelect={selectFromHistory}
            onClear={clearAll}
            onDeleteOne={deleteOne}
          />
        </div>
      </div>
    </main>
  )
}
