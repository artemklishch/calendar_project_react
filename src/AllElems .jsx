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
  };

  onTodayButton = () => this.setState({ firstDayOfWeek: firstDayForCurrentOfWeek() });
  onArrowBtns = event => this.setState({
    firstDayOfWeek: onGenerateAnotherfirstDayOfWeek(event, this.state.firstDayOfWeek)
  });
  onClickOnFieldOfDays = () => {
    return <ModalWindow />;
  };

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
        />
        <MainElems arrDaysOfWeek={arrDaysOfWeek} />
      </>
    )
  }
};
export default AllElems;