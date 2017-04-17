/**
 * コラム一覧ページを表示するコンポーネント
 */
import React, {
  Component
} from 'react';

//ReactNativeを使用したコンポーネントの呼び出し
import {
  ScrollView,
  View,
  Dimensions
} from 'react-native';

//NativeBaseを使用したコンポーネントの呼び出し
import {
  Container,
  Content,
  Spinner,
  Button,
  ListItem,
  Left,
  Body,
  Right,
  Thumbnail,
  Separator,
  Text,
} from 'native-base';

//react-native-router-fluxのインポート宣言(Actionを使用)
import { Actions } from 'react-native-router-flux';

//react-native-snap-carouselのインポート宣言
import Carousel from 'react-native-snap-carousel';

//コラム一覧表示の共通コンポーネントのインポート宣言
import CommonSliderItem from '../common/CommonSliderItem';
import CommonColumnListItem from '../common/CommonColumnListItem';

//デバイスのサイズ取得
const {
  width: DEVICE_WIDTH,
} = Dimensions.get('window');

//ギャラリーの幅と高さの設定
const sliderWidth = DEVICE_WIDTH;
const sliderHeight = DEVICE_WIDTH / 2;

//データスタブ
const sliderItems = [
  {
    title: 'コラムタイトル1',
    image_url: 'https://s3-ap-northeast-1.amazonaws.com/otsuka-shop/images/column/column1.jpg'
  },
  {
    title: 'コラムタイトル2',
    image_url: 'https://s3-ap-northeast-1.amazonaws.com/otsuka-shop/images/column/column2.jpg'
  },
  {
    title: 'コラムタイトル3',
    image_url: 'https://s3-ap-northeast-1.amazonaws.com/otsuka-shop/images/column/column3.jpg'
  },
  {
    title: 'コラムタイトル4',
    image_url: 'https://s3-ap-northeast-1.amazonaws.com/otsuka-shop/images/column/column4.jpg'
  },
  {
    title: 'コラムタイトル5',
    image_url: 'https://s3-ap-northeast-1.amazonaws.com/otsuka-shop/images/column/column5.jpg'
  }
];

const archiveItems = [
  {
    id: 1,
    title: 'パスタのお店',
    catchcopy: '美味しいパスタを楽しむことができます。',
    image_url: require('../../assets/pasta_sample.jpg'),
  },
  {
    id: 2,
    title: 'ワインのお店',
    catchcopy: '美味しいワインを楽しむことができます。',
    image_url: require('../../assets/wine_sample.jpg'),
  },
];

//コンポーネントの内容を定義する ※ ClassComponent
class ColumnList extends Component {

  //スライド用のコンポーネントを組み立てる処理
  _getSlides () {
    return sliderItems.map((slider, index) => {
      return (
        <CommonSliderItem key={index} slider={slider} />
      );
    });
  }

  //リスト用のコンポーネントを組み立てる処理
  _getArchives () {
    return archiveItems.map((archive, index) => {
      return (
        <CommonColumnListItem key={index} archive={archive} />
      );
    });
  }

  //コンポーネントの内容をレンダリングする
  render() {
    return (
      <Container style={styles.backgroundContainer}>
        {/* 1. スライドメニュー */}
        <View style={styles.containerWrappedViewStyle}>
          <Carousel
            ref={(carousel) => { this._carousel = carousel; }}　
            sliderWidth={sliderWidth}
            itemWidth={sliderWidth}
            firstItem={0}
            inactiveSlideScale={0.86}
            inactiveSlideOpacity={0.38}
            enableMomentum={false}
            containerCustomStyle={styles.containerCustomStyle}
            contentContainerCustomStyle={styles.contentContainerCustomStyle}
            showsHorizontalScrollIndicator={false}
            snapOnAndroid={true}
            >
            {/* スライド用のコンテンツを表示する */}
            {this._getSlides()}
          </Carousel>
        </View>
        {/* 2. アーカイブ部分 */}
        <ScrollView>
          <Content>
            <Separator bordered>
              <Text>過去のアーカイブ</Text>
            </Separator>
            {/* アーカイブ用のコンテンツを表示する */}
            {this._getArchives()}
          </Content>
          <Separator bordered>
            <Text>コラムについて</Text>
          </Separator>
          <Text style={styles.backgroundDescription}>歴史がありながらも最近の発展やまちづくりにも目覚ましい下町情緒が溢れるあたたかな街、大塚。オフィス街・地域のお祭り・ライブハウス・隠れ家的な名店等、様々な表情をこの街は見せてくれます。</Text>
        </ScrollView>
      </Container>
    );
  }
}

//このコンポーネントのスタイル設定
const styles = {
  backgroundContainer: {
    backgroundColor: '#fff',
  },
  backgroundDescription: {
    color: '#666',
    textAlign: 'left',
    fontSize: 14,
    marginTop: 16,
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 16,
    lineHeight: 20,
  },
  buttonTextStyle: {
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },
  containerWrappedViewStyle: {
    height: sliderHeight,
  },
  contentContainerCustomStyle: {
    height: sliderHeight,
  },
};

//インポート可能にする宣言
export default ColumnList;
