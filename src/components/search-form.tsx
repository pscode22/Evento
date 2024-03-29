'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SearchForm() {
  const [searchText, seatSearchText] = useState<string>('');

  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchText) return;
    router.push(`/events/${searchText}`);
  };
  return (
    <form onSubmit={handleSubmit} className="w-full lg:w-[36.25rem]">
      <input
        className="h-16 w-full rounded-lg bg-white/[7%] px-6 outline-none ring-accent/50 transition focus:bg-white/10 focus:ring-2"
        type="text"
        placeholder="Search events in any city..."
        value={searchText}
        onChange={e => seatSearchText(e.target.value)}
        spellCheck={false}
      />
    </form>
  );
}
