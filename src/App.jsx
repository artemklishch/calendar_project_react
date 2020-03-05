import React, { PureComponent } from 'react';
import MainBars from './main/MainBars';
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
    onLateEditing: false,
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        positionOfRedLine: getPosOfRedLine(),
      });
    }, 1000);
    this.onRenderAfterGetData();
  }
  componentWillUnmount() { clearInterval(this.interval); }

  onRenderAfterGetData = () => {
    fetchForGetData()
      .then(array => this.setState({ arrayOfEvents: array }))
      .catch(() => alert('Internal Server Error. Can`t display events'));
  };

  onTodayButton = () => this.setState({ firstDayOfWeek: firstDayForCurrentOfWeek() });

  onArrowBtns = event => this.setState({ firstDayOfWeek: onGenerateAnotherfirstDayOfWeek(event, this.state.firstDayOfWeek) });

  hideForm = () => this.setState({ isOpen: false, isEditing: false, onLateEditing:false, validateText: '' });

  showFormOnCreateButton = () => {
    this.tempObj = forObjCreateBtn();
    this.setState({ isOpen: true, validateText: onClickValidate({ ...this.tempObj }, this.state.arrayOfEvents) });
  }

  showFormOnClickOnField = event => {
    if (forObjectOnClickOnField(event, generateArrayOfCurrentWeek(this.state.firstDayOfWeek)) === null) return;
    this.tempObj = forObjectOnClickOnField(event, generateArrayOfCurrentWeek(this.state.firstDayOfWeek));
    this.setState({ isOpen: true, validateText: onClickValidate({ ...this.tempObj }, this.state.arrayOfEvents) });
  }

  showFormOnEditing = event => {
    this.tempObj = forObjectOnClickOnEvent(event, this.state.arrayOfEvents);
    this.setState({ isOpen: true, isEditing: this.tempObj._id });
    this.setState({ validateText: onCheckLateEffortOfDeleteOrEdite({ ...this.tempObj }), });
    const unacceptableEffortToDelete = 'You can`t change or delete event after 15 minutes to event';
    if (onCheckLateEffortOfDeleteOrEdite({ ...this.tempObj }) === unacceptableEffortToDelete){
      this.setState({onLateEditing: true});}; 
  };

  onFormSubmit = event => {
    event.preventDefault();
    if (this.state.validateText !== '') return;
    if (this.state.isEditing) {
      const object = onFormObject(event);
      object._id = this.tempObj._id;
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

  onDeleteEvent = () => {
    const unacceptableEffortToDelete = 'You can`t change or delete event after 15 minutes to event';
    if (this.state.validateText === unacceptableEffortToDelete) return;
    onDeleteEventInArray(this.tempObj.id)
      .then(() => this.onRenderAfterGetData())
      .catch(error => alert(error.message));
    this.hideForm();
  };

  onValidate = event =>
    this.setState({ validateText: onInputValidate(event, this.state.isEditing, this.state.arrayOfEvents) });

  render() {
    const arrayOfEventsForRender = forChangingEventsArray(this.state.arrayOfEvents);
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
        <MainBars
          arrDaysOfWeek={arrDaysOfWeek}
          onShowForm={this.showFormOnClickOnField}
          arrayOfEventsForRender={arrayOfEventsForRender}
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
          onLateEditing={this.state.onLateEditing}
        />
      </>
    )
  }
};
export default App;