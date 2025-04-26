import React from 'react';
import { View, Text, Button } from 'react-native';
import { usePagination } from '@shared/hooks/usePagination';
import { styles } from './styles';
import { LimitSelector } from './LimitSelector';

export interface PaginationControlsProps {
  page: number;
  limit: number;
  total: number;
  onPageChange: (newPage: number) => void;
  onLimitChange?: (newLimit: number) => void;
}

export const PaginationControls = ({
  page,
  limit,
  total,
  onPageChange,
  onLimitChange,
}: PaginationControlsProps) => {
  const { totalPages, canGoNext, canGoPrev, nextPage, prevPage } =
    usePagination({
      page,
      limit,
      total,
      onChange: onPageChange,
      onLimitChange,
    });

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Button title="Prev" onPress={prevPage} disabled={!canGoPrev} />
        <Text style={styles.text}>
          Page {page + 1} of {totalPages}
        </Text>
        <Button title="Next" onPress={nextPage} disabled={!canGoNext} />
      </View>

      {onLimitChange && (
        <View style={styles.row}>
          <LimitSelector value={limit} onChange={onLimitChange} />
        </View>
      )}
    </View>
  );
};
