import React, { Component } from 'react';
import { AppRegistry, Text, View, ImagePickerIOS, Image } from 'react-native';

export default class ImagePicker extends Component {
  constructor() {
    super();
    this.state = { image: null };
  }

  componentDidMount() {
    this.pickImage();
  }

  pickImage() {
    // openSelectDialog(config, successCallback, errorCallback);
    ImagePickerIOS.openSelectDialog(
      {},
      imageUri => {
        this.setState({ image: imageUri });
      },
      error => console.error(error)
    );
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.state.image ? (
          <Image style={{ flex: 1 }} source={{ uri: this.state.image }} />
        ) : null}
      </View>
    );
  }
}
AppRegistry.registerComponent('CameraRollPicker', () => CameraRollPicker);

//   constructor(props) {
//     super(props);
//     this.state = {
//       images: [],
//       isCameraLoaded: false,
//     };
//   }

//   componentWillMount() {
//     CameraRoll.getPhotos({ first: 5 }).then(
//       data => {
//         const assets = data.edges;
//         const images = assets.map(asset => asset.node.image);
//         this.setState({
//           isCameraLoaded: true,
//           images: images,
//         });
//       },
//       error => {
//         console.warn(error);
//       }
//     );
//   }

//   storeImages(data) {
//     const assets = data.edges;
//     const images = assets.map(asset => asset.node.image);
//     this.setState({
//       images: images,
//     });
//   }

//   render() {
//     if (!this.state.isCameraLoaded) {
//       return (
//         <View>
//           <Text>Loading ...</Text>
//         </View>
//       );
//     }
//     return (
//       <ScrollView>
//         <View style={styles.imageGrid}>
//           {this.state.images.map(image => (
//             <Image
//               key={image.id}
//               style={styles.image}
//               source={{ uri: image.uri }}
//             />
//           ))}
//         </View>
//       </ScrollView>
//     );
//   }
// }

// const styles = {
//   textStyle: {
//     alignSelf: 'center',
//     color: '#FFFFFF',
//     fontSize: 16,
//     fontWeight: '600',
//     paddingTop: 5,
//     paddingBottom: 5,
//   },
//   image: {
//     width: 100,
//     height: 100,
//     margin: 10,
//   },
//   imageGrid: {
//     flex: 1,
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'center',
//   },
// };
