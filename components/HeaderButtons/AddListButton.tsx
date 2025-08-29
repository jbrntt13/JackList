import NewListForm from '@/modules/lists/NewListForm';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import React, { useCallback, useRef } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
export default function AddListButton() {
  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);
  const onSubmit = useCallback(() => {
    bottomSheetModalRef.current?.dismiss();
  }, []);

  // renders
  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
      />
    ),
    []
  );
  return (
    <>
      <TouchableOpacity onPress={handlePresentModalPress}>
        <MaterialIcons name="playlist-add" size={24} color="black" />
      </TouchableOpacity>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        onChange={handleSheetChanges}
        snapPoints={['50%', '72%']}
        backdropComponent={renderBackdrop}
        enableDynamicSizing={false}
      >
        <BottomSheetView style={styles.contentContainer}>
          <NewListForm onSubmit={onSubmit} />
        </BottomSheetView>
      </BottomSheetModal>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
