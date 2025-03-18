"use client";

import { useState } from "react";
import { BackHeader } from "../components/BackHeader";
import { PageFooter } from "../components/PageFooter";

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  };

  return (
    <button
      onClick={copyToClipboard}
      className="px-3 py-1 text-sm rounded-md bg-blue-500 hover:bg-blue-600 
               text-white transition-colors duration-200 flex items-center gap-2"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
        />
      </svg>
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}

function Transcript({ text }: { text?: string }) {
  if (!text) {
    return (
      <div className="text-neutral-600 dark:text-neutral-300">
        Enter a YouTube URL to get its transcript. The URL should be in one of
        these formats:
        <ul className="list-disc ml-6 mt-2">
          <li>https://www.youtube.com/watch?v=VIDEO_ID</li>
          <li>https://youtu.be/VIDEO_ID</li>
          <li>https://www.youtube.com/embed/VIDEO_ID</li>
        </ul>
      </div>
    );
  }

  return (
    <div className="mt-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-blue-900 dark:text-blue-400">
          Transcript
        </h2>
        <CopyButton text={text} />
      </div>
      <div
        className="p-4 rounded bg-neutral-50 dark:bg-neutral-800 
                   border border-neutral-200 dark:border-neutral-700
                   whitespace-pre-wrap cursor-text"
      >
        {text}
      </div>
    </div>
  );
}

export default function YouTubePage() {
  const [url, setUrl] = useState("");
  const [transcript, setTranscript] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchTranscription = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch("/api/youtube", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });

      if (!response.ok) {
        const error = await response.text();
        throw new Error(error || "Failed to get transcript");
      }

      const data = await response.json();
      setTranscript(data.transcript);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="container min-h-screen overflow-x-hidden">
      <div className="my-8 mx-4 sm:mx-8 lg:mx-auto max-w-3xl">
        <BackHeader />
        <h1 className="mb-4 text-3xl text-blue-800 dark:text-blue-400">
          Transcribe Video
        </h1>

        <div className="max-w-2xl">
          <div className="flex gap-4 mb-6">
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Enter YouTube URL"
              className="flex-1 p-2 border rounded bg-white dark:bg-neutral-800 
                       border-neutral-300 dark:border-neutral-600 text-neutral-900 dark:text-neutral-100"
            />
            <button
              onClick={fetchTranscription}
              disabled={loading || !url}
              className="px-4 py-2 rounded font-semibold bg-blue-500 hover:bg-blue-600 
                       text-white disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Transcribing..." : "Transcribe"}
            </button>
          </div>

          {error && (
            <div className="text-red-500 dark:text-red-400 mb-4">{error}</div>
          )}

          <Transcript text={transcript} />
        </div>
        <PageFooter />
      </div>
    </main>
  );
}
