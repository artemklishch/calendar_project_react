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
import { forObjectOnClickOnField } from './funcs/forObjectOnClickOnField';
import { array } from './storage';
import { forChangingEventsArray } from './funcs/funcForRenderEvents';
import { onFormObject } from './funcs/onFormObject';
import { forObjectOnClickOnEvent } from './funcs/forObjectOnClickOnEvent';


class App extends PureComponent {
  state = {
    firstDayOfWeek: firstDayForCurrentOfWeek(),
    isOpen: false,
    arrayOfEvents: array,
    isEditing: false
  };

  onTodayButton = () => this.setState({ firstDayOfWeek: firstDayForCurrentOfWeek() });
  onArrowBtns = event => this.setState({
    firstDayOfWeek: onGenerateAnotherfirstDayOfWeek(event, this.state.firstDayOfWeek)
  });
  hideForm = () => this.setState({ isOpen: false, isEditing: false });
  showFormOnCreateButton = () => {
    this.setState({ isOpen: true });
    this.tempObj = forObjCreateBtn();
  }
  showFormOnClickOnField = event => {
    if (!event.target.classList.contains('main__sidebar_days_hours')) return;
    this.setState({ isOpen: true });
    const arrDaysOfWeek = generateArrayOfCurrentWeek(this.state.firstDayOfWeek);
    this.tempObj = forObjectOnClickOnField(event, arrDaysOfWeek);
  }
  showFormOnEditing = event => {
    if (!event.target.classList.contains('main__sidebar_day_object')) return;
    this.tempObj = forObjectOnClickOnEvent(event, this.state.arrayOfEvents);
    this.setState({
      isOpen: true,
      isEditing: this.tempObj.id
    });
  };
  onFormSubmit = event => {
    event.preventDefault();
    const [...arr] = this.state.arrayOfEvents;
    const tempObj = onFormObject(event);
    let indexElement;
    if (this.state.isEditing !== false) {
      arr.forEach((elem, index) => {
        if (elem.id === this.state.isEditing) indexElement = index;
      });
      arr.splice(indexElement, 1, tempObj);
    } else arr.push(tempObj);
    this.setState({ arrayOfEvents: arr });
    this.hideForm();
  }
  onDeleteEvent = () => {
    const [...arr] = this.state.arrayOfEvents;
    let indexElement;
    arr.forEach((elem, index) => {
      if (elem.id === this.state.isEditing) indexElement = index;
    });
    arr.splice(indexElement, 1);
    this.setState({ arrayOfEvents: arr });
    this.hideForm();
  };

  render() {
    const arrayForRender = forChangingEventsArray(this.state.arrayOfEvents);
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
        <MainElems
          arrDaysOfWeek={arrDaysOfWeek}
          onShowForm={this.showFormOnClickOnField}
          arrayForRender={arrayForRender}
          onShowFormOnEditing={this.showFormOnEditing}
        />
        <ModalWindow
          isOpen={this.state.isOpen}
          onHideForm={this.hideForm}
          tempObj={this.tempObj}
          onCreateEvent={this.onFormSubmit}
          isEditing={this.state.isEditing}
          onDeleteEvent={this.onDeleteEvent}
        />
      </>
    )
  }
};
export default App;