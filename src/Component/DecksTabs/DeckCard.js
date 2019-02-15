import React,{PureComponent} from 'react';
import {
  Card,
  CardTitle,
  CardAction,
  CardButton,
} from 'react-native-material-cards';
import { View, Text } from 'react-native';
import DeckView from '../DeckView/DeckView';

class DeckCard extends PureComponent {

  checkButtonFunction = () => {
    const {parentProps,title,questions} = this.props;
    parentProps.navigation.navigate('DeckView', {
      entryId: { title, questions},
  });
};
 render(){
    const { title, questions } = this.props;
    if (title) {
      const questionlength = questions.length;
      const cardText = questionlength > 1 ? `${questionlength} cards` : `${questionlength} card`;
      return (
      <View style={{flex:1,minHeight: 150}}>
        <Card>
        <CardTitle
          title={title}
          subtitle={cardText}
          style={{
            textAlign: 'center',
            flex: 1,
            justifyContent: 'center',
          }}
        />
        <CardAction
        separator={true}
         inColumn={true} >
            <CardButton
                onPress={this.checkButtonFunction}
                title="Check Deck"
                color="blue"
            />
        </CardAction>
        </Card>
      </View>
    );
  } else {
    return (
      <View>
        <Text>NO Deck Found </Text>
      </View>
    );
  }
 }
}
export default DeckCard;
