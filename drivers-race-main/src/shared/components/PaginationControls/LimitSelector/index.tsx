import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { styles } from './styles';

type LimitSelectorProps = {
  value: number;
  onChange: (newLimit: number) => void;
};

const options = [10, 15, 20];

export const LimitSelector = ({ value, onChange }: LimitSelectorProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Show per page:</Text>
      <View style={styles.buttons}>
        {options.map(opt => (
          <Pressable
            key={opt}
            style={[styles.button, value === opt && styles.activeButton]}
            onPress={() => onChange(opt)}>
            <Text
              style={[styles.buttonText, value === opt && styles.activeText]}>
              {opt}
            </Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
};
