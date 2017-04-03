/**
 * カード型のUIを表示するコンポーネント
 */
import React, {
  Component
} from 'react';

//ReactNativeを使用したコンポーネントの呼び出し
import {
  ScrollView,
  View,
  Text
} from 'react-native';

//NativeBaseを使用したコンポーネントの呼び出し
import {
  Spinner
} from 'native-base';

//アルバム詳細用の共通コンポーネントのインポート宣言
import CommonCard from '../common/CommonCard';

//HTTP通信用のライブラリ'axios'のインポート宣言
import axios from 'axios';

//コンポーネントの内容を定義する ※ ClassComponent
class ShopList extends Component {

  //ステートの初期化を行う
  state = { albums: [], isLoading: true };

  //コンポーネントの内容がMountされる前に行う処理
  componentWillMount() {
    //Memo: 自作APIとバインドする（ここはRails4.1.7で構築）
    axios.get('https://immense-journey-38002.herokuapp.com/articles.json')
    .then(response => this.setState({ albums: response.data.article.contents, isLoading: false }));
  }

  //アルバムデータのレンダリングを行う
  renderAlbums() {
    return this.state.albums.map(album =>
      <CommonCard key={album.title} album={album} />
    );
  }

  //コンポーネントの内容をレンダリングする
  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.spinnerWrapperStyle}>
          <Spinner color="#999" />
          <Text style={styles.spinnerInnerText}>データ取得中...</Text>
        </View>
      );
    }

    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

//このコンポーネントのスタイル設定
const styles = {
  spinnerWrapperStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  spinnerInnerText: {
    fontSize: 13,
    textAlign: 'center',
    color: '#999',
  },
};

//インポート可能にする宣言
export default ShopList;