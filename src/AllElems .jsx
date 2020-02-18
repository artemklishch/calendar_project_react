import React, { PureComponent } from 'react';
import MainElems from './MainElems';
import HeaderElems from './HeaderElems';
import {
  onRenderTitleDate,
  onGenerateCurrentWeek,
  onGenerateAnotherWeek
} from './funcsForRenderCommonElems';

class AllElems extends PureComponent {
  state = {
    arrDaysOfWeek: [],
    dateTitle: ''
  };

  componentDidMount() {
    this.generateCurrentWeek();
    this.renderTitleDate();
  }
  componentDidUpdate() {
    this.renderTitleDate();
  }

  generateCurrentWeek = () => this.setState({
    arrDaysOfWeek: onGenerateCurrentWeek(),
    dateTitle: ''
  });
  generateAnotherWeek = event => this.setState({
    arrDaysOfWeek: onGenerateAnotherWeek(event, this.state.arrDaysOfWeek)
  });
  renderTitleDate = () => this.setState({
    dateTitle: onRenderTitleDate(this.state.arrDaysOfWeek[0], this.state.arrDaysOfWeek[6])
  });

  

  render() {
    return (
      <>
        <HeaderElems
          arrDaysOfWeek={this.state.arrDaysOfWeek}
          dateTitle={this.state.dateTitle}
          onClickAnotherWeek={this.generateAnotherWeek}
          onClickTodayWeek={this.generateCurrentWeek}
        />
        <MainElems />
      </>
    )
  }
};
export default AllElems;