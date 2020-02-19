import React, { PureComponent } from 'react';
import MainElems from './MainElems';
import HeaderElems from './HeaderElems';
import {
  onRenderTitleDate,
  firstDayForCurrentOfWeek,
  onGenerateAnotherfirstDayOfWeek,
  generateArrayOfCurrentWeek,
} from './funcsForRenderCommonElems';
import ModalWindow from './ModalWindow';


class AllElems extends PureComponent {
  state = {
    firstDayOfWeek: firstDayForCurrentOfWeek(),
    isOpen: false
  };

  onTodayButton = () => this.setState({ firstDayOfWeek: firstDayForCurrentOfWeek() });
  onArrowBtns = event => this.setState({
    firstDayOfWeek: onGenerateAnotherfirstDayOfWeek(event, this.state.firstDayOfWeek)
  });
  hideForm = () => this.setState({isOpen: false});
  showFormOnCreateButton = () => this.setState({isOpen: true});

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
         />
      </>
    )
  }
};
export default AllElems;