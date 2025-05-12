'use client';
import { useDebouncedCallback } from 'use-debounce';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

export function SearchBar({ disabled = false }: { disabled?: boolean })  {
  const { replace} = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();


// Debounce the search input (300ms delay)
const handleSearch = useDebouncedCallback((term: string) => {
  const params = new URLSearchParams(searchParams);
  
  // Use a simple if/else instead of ternary expression
  if (term) {
    params.set('query', term);
  } else {
    params.delete('query');
  }

  replace(`${pathname}?${params.toString()}`);
}, 500);

  return (
    <div>
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
    <Input
      type="text"
      placeholder="Search"
      className="pl-9 w-full bg-muted/50"
      onChange={(e) => handleSearch(e.target.value)}
      defaultValue={searchParams.get('query')?.toString()}
      disabled={disabled}
    />
    </div>
  );
}