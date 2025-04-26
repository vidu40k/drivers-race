import { useCallback, useMemo } from 'react';

interface UsePaginationProps {
  page: number;
  limit: number;
  total: number;
  onChange: (newPage: number) => void;
  onLimitChange?: (newLimit: number) => void;
}

export const usePagination = ({
  page,
  limit,
  total,
  onChange,
  onLimitChange,
}: UsePaginationProps) => {
  const totalPages = useMemo(() => Math.ceil(total / limit), [total, limit]);

  const canGoNext = page + 1 < totalPages;
  const canGoPrev = page > 0;

  const nextPage = useCallback(() => {
    if (canGoNext) {
      onChange(page + 1);
    }
  }, [page, canGoNext, onChange]);

  const prevPage = useCallback(() => {
    if (canGoPrev) {
      onChange(page - 1);
    }
  }, [page, canGoPrev, onChange]);

  const changeLimit = useCallback(
    (newLimit: number) => {
      onLimitChange?.(newLimit);
    },
    [onLimitChange],
  );

  return {
    totalPages,
    canGoNext,
    canGoPrev,
    nextPage,
    prevPage,
    changeLimit,
  };
};
