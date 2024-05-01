"use client";
import React, { useState, useRef, useEffect, useCallback } from "react";
import { useContentStore } from "../store/contentStore";
import Welcome from "./Welcome";
import Help from "./Help";
import { useCommands } from "../hooks/useCommands";
import { useRouter } from "next/navigation";
import { last } from "lodash";

interface ConsoleContainerProps {
  title: string;
}

const ConsoleContainer: React.FC<ConsoleContainerProps> = ({ title }) => {
  const router = useRouter();
  const { content, setContent } = useContentStore((state) => state);
  const [inputValue, setInputValue] = useState("");
  const [command, setCommand] = useState(title)
  const contentRef = useRef<HTMLElement>(null);
  const inputRef = useRef<HTMLElement>(null);
  const [page, setPage] = useState(0);

  const { data, isLoading, isError } = useCommands();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = contentRef.current.scrollHeight;
    }
  }, [content]);

  useEffect(() => {
    setPage(0);
  }, [title]);

  useEffect(() => {
    if (data) {
      console.log('effect', inputValue, title)
      addContent(title)
    }
  }, [page, title, data])

  const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    setInputValue(newValue);
  };

  const handleSubmit = (e: React.FocusEvent<HTMLFormElement>) => {
    e.preventDefault();
    //Check if the input value is a valid command
    // const scriptValue = data.scripts.find((sc: any) => sc === inputValue);

    //Check if the script belongs to a section
    const sectionValue = data.sections.find(
      (s: any) => s.command === inputValue
    );

    // setContent([...content, inputValue]);

    addContent(inputValue);

    if (sectionValue) {
      router.push(`/${inputValue}`);
    }
  };

  const addContent = (inputValue: string) => {
    //Check if the input value is a valid command
    const scriptValue = data.scripts.find((sc: any) => sc === inputValue);
    
    //Check if the script belongs to a section
    const sectionValue = data.sections.find(
      (s: any) => s.command === inputValue
    );
    
    setTimeout(() => {
      if (sectionValue || scriptValue) {
        if (scriptValue) {
          // execute script
          console.log("execute script");
          switch (scriptValue) {
            case "clear":
              setContent([])
              break;
            default:
              break;
          }
        } else {
          setContent([...content, inputValue, sectionValue.output[page]]);
        }
      } else {
        setContent([
          ...content,
          inputValue,
          `command not found: ${inputValue}`,
        ]);
      }
    }, 500);

    setInputValue('');
  };

  return (
    <div className="sm:container mx-auto my-10 bg-gray-900 text-white font-mono text-xs">
      <div className="flex justify-between items-center bg-gray-800 px-4 py-2">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="text-white">fmarin.dev - bash: {title}</div>
        <div className="flex items-center space-x-2">
          <div className="h-2 w-2 bg-gray-400 rounded-full"></div>
          <div className="h-2 w-2 bg-gray-400 rounded-full"></div>
          <div className="h-2 w-2 bg-gray-400 rounded-full"></div>
        </div>
      </div>

      <div
        className="p-4 h-[30rem] overflow-y-auto"
        ref={contentRef as React.MutableRefObject<HTMLDivElement>}
      >
        <Welcome />

        {content.map((c, ix) => (
          <div key={`content-${ix}`} dangerouslySetInnerHTML={{ __html: c }} />
        ))}
        <form onSubmit={handleSubmit}>
          <div className="flex items-center space-x-2">
            <span className="text-white">fm@bash</span>
            <span className="text-green-400">$</span>
            <input
              type="text"
              value={inputValue}
              className="bg-transparent border-none focus:outline-none w-full"
              onChange={handleOnChange}
              ref={inputRef as React.MutableRefObject<HTMLInputElement>}
            />
          </div>
        </form>
        <a href="/profile.pdf" rel="noopener noreferrer" target="_blank" className="text-blue-500 hover:text-blue-700">
          pd tales
        </a>
      </div>
    </div>
  );
};

export default ConsoleContainer;
