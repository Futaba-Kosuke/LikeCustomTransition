/**
 * 検索画面を表示するコンポーネント
 */
import React, {
  Component
} from 'react';

//ReactNativeを使用したコンポーネントの呼び出し
import {
  StyleSheet,
} from 'react-native';

//NativeBaseを使用したコンポーネントの呼び出し
import {
  Container,
  Content,
  Header,
  Left,
  Right,
  Title,
  Body,
  Button,
  List,
  ListItem,
  Thumbnail,
  Icon,
  Text,
  Item,
  Input,
  Form
} from 'native-base';

//react-native-router-fluxのインポート宣言(Actionを使用)
import { Actions } from 'react-native-router-flux';

//コンポーネントの内容を定義する ※ ClassComponent
class SearchShopContents extends Component {

 //コンポーネントの内容をレンダリングする
 /**
  * Memo:
  *
  */
 render() {
   return (
     <Container>
      <Header iosBarStyle="light-content" style={styles.headerBackStyle} searchBar rounded>
        <Left>
          <Button transparent onPress={ () => Actions.pop() }>
            <Icon style={styles.backStyle} name='close' />
          </Button>
        </Left>
        <Body>
          <Title style={styles.titleStyle}>検索</Title>
        </Body>
        <Right>
        </Right>
      </Header>
      <Content>
        <Form>
          <Item>
            <Icon name="search" />
            <Input placeholder="お店を検索する" />
          </Item>
        </Form>
      </Content>
     </Container>
   );
 }
}

//このコンポーネントのスタイル設定
const styles = {
  headerBackStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
  },
  backStyle: {
    color: 'rgba(255, 255, 255, 1)',
  },
  titleStyle: {
    color: 'rgba(255, 255, 255, 1)',
  },
};

//このコンポーネントをインポート可能にする
export default SearchShopContents;
