import {Button} from 'react-native';

import Dialog, {DialogContent} from 'react-native-popup-dialog';

const popUp = ({text, error}) => {
  return (
    <View style={styles.container}>
      <Button
        title="Show Dialog"
        onPress={() => {
          this.setState({visible: true});
        }}
      />
      <Dialog
        visible={this.state.visible}
        onTouchOutside={() => {
          this.setState({visible: false});
        }}>
        <DialogContent>{text}</DialogContent>
      </Dialog>
    </View>
  );
};

export default popUp;
