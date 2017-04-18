/**
 * キャンペーンリスト表示用UIのベース部分を表示するコンポーネント
 */
import React from 'react';

//NativeBaseを使用したコンポーネントの呼び出し
import {
  ListItem,
  Left,
  Body,
  Right,
  Text,
  Button,
  Thumbnail
} from 'native-base';

//react-native-router-fluxのインポート宣言(Actionを使用)
import { Actions } from 'react-native-router-flux';

//一覧シンプルリスト表示用のベースコンポーネントの内容を定義する
const CommonColumnListItem = ({ archive }) => {

  //取得した引数（オブジェクト：{ archive }）を分割する
  const { id, title, catchcopy, image_url } = archive;

  //表示する要素を返す
  return (
    <ListItem thumbnail>
      <Left>
        <Thumbnail square size={80} source={image_url} />
      </Left>
      <Body>
        <Text>{title}</Text>
        <Text note>{catchcopy}</Text>
      </Body>
      <Right>
        <Button transparent onPress={ () => console.log("Work In Progress.") }>
          <Text>詳細</Text>
        </Button>
      </Right>
    </ListItem>
  );
};

//このコンポーネントをインポート可能にする
export default CommonColumnListItem;
