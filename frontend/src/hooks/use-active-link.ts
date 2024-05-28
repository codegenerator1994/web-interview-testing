import { usePathname } from 'next/navigation';

// ----------------------------------------------------------------------

type ReturnType = boolean;

export function useActiveLink(path: string): ReturnType {
  const pathname = usePathname();

  return path === pathname;
}
