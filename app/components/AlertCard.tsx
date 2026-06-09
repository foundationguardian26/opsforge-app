import React from 'react';

export default function AlertCard({
  alert,
  isResolving,
  resolveError,
  resolveAlert,
}: any) {
  return (
    <div className="bg-zinc-900 border border-red-800 p-5 rounded-lg shadow-lg flex flex-col gap-3">
      <div className="flex justify-between items-start gap-4">
        <p className="text-white font-medium">{alert.issue_description}</p>
        <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded uppercase shrink-0">
          Open
        </span>
      </div>
      
      <p className="text-zinc-500 text-xs">
        Reported: {new Date(alert.created_at).toLocaleString()}
      </p>
      
      {resolveError && (
        <p className="text-red-400 text-xs font-bold">
          Failed to resolve alert. Please try again.
        </p>
      )}
      
      <button
        onClick={resolveAlert}
        disabled={isResolving}
        className="mt-2 w-full bg-[#D4AF37] hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded transition disabled:opacity-50 text-sm"
      >
        {isResolving ? 'Resolving...' : 'Acknowledge & Resolve'}
      </button>
    </div>
  );
}