import React, { PureComponent } from 'react';
import MainElems from './main/MainElems';
import HeaderElems from './header/HeaderElems';
import {
  onRenderTitleDate,
  firstDayForCurrentOfWeek,
  onGenerateAnotherfirstDayOfWeek,
  generateArrayOfCurrentWeek,
} from './funcs/funcsForRenderCommonElems';
import ModalWindow from './modalWindow/ModalWindow';
import { forObjCreateBtn } from './funcs/forObjOnCreateBtn';


class App extends PureComponent {
  state = {
    firstDayOfWeek: firstDayForCurrentOfWeek(),
    isOpen: false
  };

  onTodayButton = () => this.setState({ firstDayOfWeek: firstDayForCurrentOfWeek() });
  onArrowBtns = event => this.setState({
    firstDayOfWeek: onGenerateAnotherfirstDayOfWeek(event, this.state.firstDayOfWeek)
  });
  hideForm = () => this.setState({isOpen: false});
  showFormOnCreateButton = () => {
    this.setState({isOpen: true});
    this.tempObj = forObjCreateBtn();
  }

  render() { 
    const arrDaysOfWeek = generateArrayOfCurrentWeek(this.state.firstDayOfWeek);
    const dateTitle = onRenderTitleDate(arrDaysOfWeek);
    return (
      <>
        <HeaderElems
          arrDaysOfWeek={arrDaysOfWeek}
          dateTitle={dateTitle}
          onArrowBtns={this.onArrowBtns}
          onClickTodayWeek={this.onTodayButton}
          onShowForm={this.showFormOnCreateButton}
        />
        <MainElems arrDaysOfWeek={arrDaysOfWeek} />
        <ModalWindow 
          isOpen={this.state.isOpen}
          onHideForm={this.hideForm}
          tempObj={this.tempObj}
         />
      </>
    )
  }
};
export default App;