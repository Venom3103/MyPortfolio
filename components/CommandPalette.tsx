/* 'use client'
import { useEffect } from 'react'
import * as Cmdk from 'cmdk'
import { motion, AnimatePresence } from 'framer-motion'

export default function CommandPalette({ open, setOpen }: { open: boolean, setOpen: (v: boolean) => void }) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault()
        setOpen(true)
      }
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [setOpen])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-start justify-center pt-24"
        >
          <div className="w-full max-w-2xl p-4 rounded-2xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 shadow-lg backdrop-blur-lg">
            <Cmdk.Command>
              <Cmdk.CommandInput
                placeholder="Menu"
                className="w-full px-4 py-2 rounded-lg bg-gray-700/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Cmdk.CommandList className="mt-2">
                <Cmdk.CommandItem
                  onSelect={() => { location.href = '#projects'; setOpen(false) }}
                  className="px-4 py-2 rounded-lg hover:bg-blue-500/20 cursor-pointer transition"
                >
                  Projects
                </Cmdk.CommandItem>
                <Cmdk.CommandItem
                  onSelect={() => { location.href = '#about'; setOpen(false) }}
                  className="px-4 py-2 rounded-lg hover:bg-blue-500/20 cursor-pointer transition"
                >
                  About
                </Cmdk.CommandItem>
                <Cmdk.CommandItem
                  onSelect={() => { location.href = '#contact'; setOpen(false) }}
                  className="px-4 py-2 rounded-lg hover:bg-blue-500/20 cursor-pointer transition"
                >
                  Contact
                </Cmdk.CommandItem>
              </Cmdk.CommandList>
            </Cmdk.Command>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
*/