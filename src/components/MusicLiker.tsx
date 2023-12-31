import React, { useState } from 'react';
import { Button } from 'react-native-paper';

interface Props {}

const MusicLiker = (props:Props) =>{
  const [like,setLike] = useState<boolean>(false);

  const handlePress=()=>{
    setLike(!like);
  };

  return <Button onPress={handlePress}>{like '❤️' : '🖤'}</Button>;
};

export default MusicLiker;
