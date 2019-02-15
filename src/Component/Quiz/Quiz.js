import React from "react";
import {View,Text,Button,TouchableOpacity,StyleSheet} from "react-native";
import { clearLocalNotification,setLocalNotification,submitEntry} from "../../utils/helper";
export function Info({ onPress, style, text }){
	return (
		<TouchableOpacity onPress={onPress}>
			<Text style={style}>{text}</Text>
		</TouchableOpacity>
	)
}

class Quiz extends React.PureComponent{
  
  state={
      questionNumber: 0,
      correctanswered: 0,
      showAnswer: false,
      questionsAnswered: false
    };

    onChange = ()=>{
      this.setState(()=>{
        return {
            questionNumber: this.state.questionNumber+1,
            correctanswered: this.state.questionNumber+1
          };
      });
    };
    wrongButtononChange = ()=>{
      this.setState(()=>{
        return {
            questionNumber: this.state.questionNumber+1,
          };
      });
    };
    resetReults = ()=>{
      
        this.setState(()=>{
          return {
            questionNumber: 0,
            correctanswered: 0
          }
        });
        clearLocalNotification().then(setLocalNotification);
          submitEntry({
            "answeredquestions": true
            });
    };
    backtoDeck = () =>{
      const currentprops = this.props.navigation.state.params.entryId.check;
      this.props.navigation.navigate('DeckView',
      {
        entryId: {...currentprops}
      });
       clearLocalNotification().then(setLocalNotification);
        submitEntry({
          "answeredquestions": true
        });
        
    };
    showAnswer  = ()=>{
      this.setState(()=>{
        return{
           showAnswer: !this.state.showAnswer
        }
      })
    };
  render(){
    const {deck,currentDeck}=this.props.state;
     const check = this.props.navigation.state.params.entryId ;
     const hasAnyQustions = check.check.questions.length >=1 ;
     const {questionNumber,correctanswered}=this.state;
     if(hasAnyQustions && currentDeck.title !== undefined){
        const currentQuestionsArray = deck[currentDeck.title].questions ;
        const totalQuestions = currentQuestionsArray.length;
          if(currentQuestionsArray.length  > questionNumber ){
             const numberofQuestionAnswered = questionNumber+1;
             const currentQuestion = currentQuestionsArray[questionNumber];
            return(
            <View style={[styles.container,styles.contentTop]}>
               <Text style={styles.numberOfQuestions}>{numberofQuestionAnswered} / {totalQuestions} </Text>
               <Text style={styles.currentQuestionStyles}> {currentQuestion.question} </Text>
              {
                 this.state.showAnswer ?
                   <Text style={styles.answer}>
                    {currentQuestion.answer}
                   </Text>
					      : <Text> </Text>}

               {
                 !this.state.showAnswer ?
                 <Info text={"Show Answer"} style={{ color: "blue",fontSize: 16,margin: 20 }} onPress={this.showAnswer}/>
				        	    : <Info text={"Hide Answer"} style={{ color: "blue",fontSize: 16,margin: 20 }}  onPress={this.showAnswer}/>
                      }
              <Button
                onPress={this.onChange}
                style={styles.border}
                title="Correct"
                color="green"
                accessibilityLabel="Correct Answer BUTTON"
              />
              <Button
                onPress={this.wrongButtononChange}
                style={styles.border}
                title="Wrong"
                color="red"
                accessibilityLabel=" WRONG ANSWER BUTTON"
               />
            </View>
       )
          } else{
            const perecentage = correctanswered / totalQuestions*100;
                return (
                  <View style={styles.container}>
                    <Text style={[styles.text1,styles.fontWeightAndColor]}>{"Your Score Perencetage is"}</Text>
                    <Text style={[styles.text2,styles.fontWeightAndColor]}>{perecentage}%</Text>
                    <Button
                      onPress={this.resetReults}
                      style={styles.border}
                      title="Redo Quiz"
                      color="purple"
                      accessibilityLabel="resetting results "
                    />
                    <Button
                      onPress={this.backtoDeck}
                      style={styles.border}
                      title="Go back to Deck"
                      color="red"
                      accessibilityLabel="back to deck button"
                    />
                  </View>
                )
          }
     } else{
       return(
          <View style={[styles.container,styles.padding]}>
            <Text style={styles.fontSizecss}>
                No Questions in this Deck Add Questions to this deck inorder to answer.
             </Text>
          </View>
    );
     }
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: "center",
    alignItems:"center",
  },
  padding:{
    paddingLeft: 20,
    paddingRight:20
  },
  fontSizecss:{
    fontSize: 20,
    fontWeight: "100"
  },
  text1:{
    fontSize:28,
    padding:10
  },
  text2:{
    fontSize:34,
  },
  fontWeightAndColor:{
     fontWeight:"bold",
     color: "green"
  },
  border:{
    borderWidth: 1
  },
  currentQuestionStyles:{
    padding:10,
    alignItems:"center",
     textAlign:"center",
     fontSize: 20
  },
  numberOfQuestions:{
    alignSelf:"flex-start",
    padding: 20,
    fontSize: 16
  },
  contentTop:{
    justifyContent: "flex-start",
  },
  answer:{
   padding:20,
   fontSize: 18
  }

});
export default Quiz;
