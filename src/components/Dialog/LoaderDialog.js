import React from 'react';
import {View} from 'react-native';
import {ActivityIndicator, Dialog, Portal, Text} from 'react-native-paper';

const LoaderDialog = ({state}) => {
  return (
    <View>
      <View>
        <Portal>
          <Dialog visible={state} style={{paddingVertical: 50}}>
            <Dialog.Content>
              <ActivityIndicator animating={true} size="large" />
              <Text style={{textAlign: 'center', marginTop: 20}}>
                Please Wait...
              </Text>
            </Dialog.Content>
          </Dialog>
        </Portal>
      </View>
    </View>
  );
};

export default LoaderDialog;
