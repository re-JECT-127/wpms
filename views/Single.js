import React, {useEffect, useState} from 'react';
import {Image} from 'react-native';
import PropTypes from 'prop-types';
import {
  Card,
  CardItem,
  Left,
  Icon,
  Title,
  Text,
  Content,
  Container,
} from 'native-base';

const mediaUrl = 'http://media.mw.metropolia.fi/wbma/uploads/';
const [image, setImage] = useState(null);
const [fileType, setType] = useState('image');
const Single = ({route}) => {
  const {file} = route.params;
  console.log('kuva', mediaUrl + file.filename);
  return (
    <Container>
      <Content padder>
        <Card>
          <CardItem>
            <Left>
              <Icon name={'image'} />
              <Text>{file.title}</Text>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <>
            {fileType === 'image' ?
            <Image source={{uri: mediaUrl + file.filename}}
              style={{height: 400, width: null, flex: 1}}
            />:
            <Video
            source={{uri: image}}
            style={{height: 400, width: null, flex: 1}}
            useNativeControls={true}
            rate={1.0}
            volume={1.0}
            isMuted={false}
            resizedMode='cover'
            shouldPlay
            isLooping
            />
          }
          </>
          </CardItem>
          <CardItem>
            <Text>
              {file.description}
            </Text>
          </CardItem>
        </Card>
      </Content>
    </Container>

  );
};

Single.propTypes = {
  route: PropTypes.object,
};

export default Single;
