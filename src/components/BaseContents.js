/**
 * ベースコンテンツ用のコンポーネント
 */
import React, { Component } from 'react';
import {
 StyleSheet,
 Text,
 View
} from 'react-native';

//NativeBaseを使用したコンポーネントの呼び出し
import {
  Container,
  Drawer,
  Header,
  Left,
  Right,
  Title,
  Body,
  Button,
  Icon
} from 'native-base';

//ドロワー用コンポーネントの宣言
import SideContents from './SideContents';

//コンテンツ用コンポーネントの宣言
import ShopList from './screen/ShopList';
import ShopDetail from './screen/ShopDetail';

//コンポーネントの内容を定義する ※ ClassComponent
class BaseContents extends Component {
  //ドロワーメニューのステートに関する処理
  state = {
    drawerOpen: false,
    drawerDisabled: false,
  };
  //ドロワーメニューを閉じる際に関する設定をする
  closeDrawer = () => {
    this._drawer._root.close()
  };
  //ドロワーメニューを開く際に関する設定をする
  openDrawer = () => {
    this._drawer._root.open()
  };
  //コンポーネントの内容をレンダリングする
  /**
   * Memo:
   * NativeBaseのDrawerは下記のライブラリを拡張して作られている
   * (各種プロパティの参考) React Native Drawer
   * https://github.com/root-two/react-native-drawer#props
   */
  render() {
    return (
      <Drawer
        ref={ (ref) => this._drawer = ref }
        type="overlay"
        content={
          <SideContents closeDrawer={this.closeDrawer} />
        }
        onOpen={ () => {
          console.log('Drawer Open.')
          this.setState({drawerOpen: true})
        }}
        onClose={ () => {
          console.log('Drawer Close.')
          this.setState({drawerOpen: false})
        }}
        tweenHandler={ (ratio) => {
          return {
            mainOverlay: { opacity: ratio / 2, backgroundColor: 'black' }
          }
        }}
        captureGestures={true}
        tweenDuration={200}
        disabled={this.state.drawerDisabled}
        openDrawerOffset={ (viewport) => {
          return 80
        }}
        side={"left"}
        closedDrawerOffset={ () => 0 }
        panOpenMask={0.04}
        negotiatePan={true}
        >

        {/* Header <Start> */}
        <Header iosBarStyle="light-content" style={styles.headerBackStyle} hasTabs>
          <Left>
            {/*
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
            */}
            <Button transparent onPress={ () => this.openDrawer() }>
              <Icon name='menu' style={styles.menuStyle} />
            </Button>
          </Left>
          <Body>
            <Title style={styles.titleStyle}>大塚Deお買い物</Title>
          </Body>
          <Right>
            {/* Remark: 何もない場合にはここはブランクにする */}
          </Right>
        </Header>
        {/* Header <End> */}

        {/* Container <Start> */}
        <Container>
          {/* Memo: この中にコンテンツのコンポーネントを入れる (ReduxはデータのCrudで用いる　→ App.js側で導入) */}
          <ShopList />
          {/* <ShopDetail /> */}
        </Container>
        {/* Container <End> */}

      </Drawer>
    );
  }
}

//このコンポーネントのスタイル設定
const styles = {
  headerBackStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.85)'
  },
  titleStyle: {
    color: 'rgba(255, 255, 255, 1)'
  },
  menuStyle: {
    color: 'rgba(255, 255, 255, 1)'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
};

export default BaseContents;
