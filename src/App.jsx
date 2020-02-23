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
import { forChangingEventsArray } from './funcs/funcForRenderEvents';
import { forObjectOnClickOnEvent } from './funcs/forObjectOnClickOnEvent';
import { getPosOfRedLine } from './funcs/onPositionOfRedLine';
import { onInputValidate, onClickValidate, onCheckLateEffortOfDeleteOrEdite } from './funcs/validate';
import { onCreateEventAfterSubmit, onChangeEventAfterSubmit, onDeleteEventInArray, fetchForGetData } from './funcs/eventsGateway';
import { onFormObject } from './funcs/onFormObject';


class App extends PureComponent {
  state = {
    firstDayOfWeek: firstDayForCurrentOfWeek(),
    isOpen: false,
    arrayOfEvents: [],
    isEditing: false,
    positionOfRedLine: getPosOfRedLine(),
    validateText: '',
  };
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        positionOfRedLine: getPosOfRedLine(),
      });
    }, 1000);
    this.onRenderAfterGetData();
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onRenderAfterGetData = () => {
    fetchForGetData()
      .then(array => this.setState({ arrayOfEvents: array }))
      .catch(() => alert('Internal Server Error. Can`t display events'));
  };
  onTodayButton = () => this.setState({ firstDayOfWeek: firstDayForCurrentOfWeek() });
  onArrowBtns = event => this.setState({ firstDayOfWeek: onGenerateAnotherfirstDayOfWeek(event, this.state.firstDayOfWeek) });
  hideForm = () => this.setState({ isOpen: false, isEditing: false });
  showFormOnCreateButton = () => {
    this.tempObj = forObjCreateBtn();
    this.setState({ isOpen: true, validateText: onClickValidate({ ...this.tempObj }, this.state.arrayOfEvents) });
  }
  showFormOnClickOnField = event => {
    if (!event.target.classList.contains('main__sidebar_days_hours')) return;
    this.tempObj = forObjectOnClickOnField(event, generateArrayOfCurrentWeek(this.state.firstDayOfWeek));
    this.setState({ isOpen: true, validateText: onClickValidate({ ...this.tempObj }, this.state.arrayOfEvents) });
  }
  showFormOnEditing = event => {
    if (!event.target.classList.contains('eventObj')) return;
    this.tempObj = forObjectOnClickOnEvent(event, this.state.arrayOfEvents);
    this.setState({ isOpen: true, isEditing: this.tempObj.id });
    this.setState({ validateText: onCheckLateEffortOfDeleteOrEdite({ ...this.tempObj }), });
  };
  onFormSubmit = event => {
    event.preventDefault();
    if (this.state.validateText !== '') return;
    if (this.state.isEditing !== false) {
     const object = onFormObject(event);
     object.id = this.tempObj.id;
      onChangeEventAfterSubmit(object, this.tempObj.id)
        .then(() => this.onRenderAfterGetData())
        .catch(error => alert(error.message));
    } else {
      const object = onFormObject(event);
      onCreateEventAfterSubmit(object)
        .then(() => this.onRenderAfterGetData())
        .catch(error => alert(error.message));
    }
    this.hideForm();
  }
  onDeleteEvent = event => {
    if (this.state.validateText === 'You can`t change or delete event after 15 minutes to event') return;
    const object = onFormObject(event);
     object.id = this.tempObj.id;
     onDeleteEventInArray(this.tempObj.id)
        .then(() => this.onRenderAfterGetData())
        .catch(error => alert(error.message));
    this.hideForm();
  };
  onValidate = event =>
    this.setState({ validateText: onInputValidate(event, this.state.isEditing, this.state.arrayOfEvents) });

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
          positionOfRedLine={this.state.positionOfRedLine}
        />
        <ModalWindow
          isOpen={this.state.isOpen}
          onHideForm={this.hideForm}
          tempObj={this.tempObj}
          onCreateEvent={this.onFormSubmit}
          isEditing={this.state.isEditing}
          onDeleteEvent={this.onDeleteEvent}
          onValidate={this.onValidate}
          validateText={this.state.validateText}
        />
      </>
    )
  }
};
export default App;