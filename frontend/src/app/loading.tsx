import { Loader2, Sparkles } from 'lucide-react'

export default function Loading() {
  return (
    <div className='flex flex-col items-center justify-center min-h-[70vh] animate-in fade-in duration-500'>
      <div className='relative flex items-center justify-center mb-6'>
        {/* Outer spinning ring */}
        <Loader2 className='w-16 h-16 text-blue-100 animate-spin' />

        {/* Inner static icon */}
        <div className='absolute bg-blue-600 p-2.5 rounded-xl shadow-lg shadow-blue-200'>
          <Sparkles className='w-5 h-5 text-white animate-pulse' />
        </div>
      </div>

      <div className='text-center space-y-2'>
        <h2 className='text-lg font-bold text-slate-900 tracking-tight'>
          Preparing your workspace...
        </h2>
        <p className='text-sm text-slate-400 font-medium'>
          Aligning pixels and AI parameters
        </p>
      </div>

      {/* Progress bar simulation using Tailwind's build-in animate-pulse or a custom keyframe */}
      <div className='mt-8 w-48 h-1 bg-slate-100 rounded-full overflow-hidden relative'>
        <div className='h-full bg-blue-600 w-1/3 rounded-full animate-[shimmer_1.5s_infinite_ease-in-out]' />
      </div>
    </div>
  )
}
