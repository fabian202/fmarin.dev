"use client"
import React from 'react'
import { useContentStore } from '../store/contentStore'

interface ConsoleContainerProps {
}

const ConsoleContainer: React.FC<ConsoleContainerProps> = () => {
  const { content, setContent } = useContentStore((state) => state)

  console.log('content', content)

  const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    setContent(newValue)
  }

  const handleSubmit = (e: React.FocusEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <div className="sm:container mx-auto my-10 bg-gray-900 text-white font-mono">
      <div className="flex justify-between items-center bg-gray-800 px-4 py-2">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="text-white">{'title'}</div>
        <div className="flex items-center space-x-2">
          <div className="h-2 w-2 bg-gray-400 rounded-full"></div>
          <div className="h-2 w-2 bg-gray-400 rounded-full"></div>
          <div className="h-2 w-2 bg-gray-400 rounded-full"></div>
        </div>
      </div>

      <div className="p-4">
        <p>Welcom to the Terminal</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor
          lorem vel velit bibendum, sed mattis risus varius. Nullam consectetur
          lorem sed nulla commodo, sed aliquet odio condimentum.
        </p>
        <p>
          Nulla facilisi. Suspendisse potenti. Vivamus laoreet interdum est, ac
          efficitur libero placerat sed. Integer pharetra, sapien vel tempus
          euismod, elit ipsum interdum mi, in consectetur libero nunc vitae
          nunc.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="flex items-center space-x-2">
            <span className="text-green-400">$</span>
            <input
              type="text"
              className="bg-transparent border-b border-white focus:outline-none focus:border-green-400"
              onChange={handleOnChange}
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default ConsoleContainer
