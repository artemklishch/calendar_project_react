import React from 'react';
import './popup.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const ModalWindow = ({
  isOpen,
  onHideForm,
  tempObj,
  onCreateEvent,
  backgroundColor,
  isEditing,
  onDeleteEvent,
  onValidate,
  validateText,
  onLateEditing }) => {

  if (!isOpen) return null;

  const basketDeleteClass = classNames('event__btn-delete',
    { 'btn-delete_block': isEditing });
    
  return (
    <div className="popup-layer">
      <form className="popup event" onSubmit={onCreateEvent} >
        <span className="popup__btn-close" onClick={onHideForm}><img className="close" src="https://img.icons8.com/color/48/000000/close-window.png" alt="close" /></span>
        <input className="event__name" name="header" type="text" placeholder="Add title " defaultValue={tempObj.header} disabled={onLateEditing} />
        <div className="popup__picker" onInput={onValidate}>
          <img className="clock" src="https://img.icons8.com/pastel-glyph/64/000000/time.png" alt="clock" />
          <input className="event__date-start input" name="startDate" required type="date" defaultValue={tempObj.startDate} disabled={onLateEditing} />
          <input type="time" className="startTime_place input" name="startTimePlace" defaultValue={tempObj.startTime} disabled={onLateEditing} />
          <span className='line'></span>
          <input type="time" className="endTime_place input" name="endTimePlace" defaultValue={tempObj.endTime} disabled={onLateEditing} />
          <input className="event__date-end input" name="endDate" required type="date" defaultValue={tempObj.endDate} disabled={onLateEditing} />
        </div>
        <div className="centerData">
          <img className="multiline" src="https://img.icons8.com/windows/32/000000/multiline-text.png" alt="mutiline" />
          <textarea type="text" className="multiline__text" placeholder="add description" name="description" defaultValue={tempObj.description} disabled={onLateEditing}></textarea>
          <input type="color" className="pick_color" name="backgroundColor" defaultValue={backgroundColor} />
        </div>
        <div className="footer-popup">
          <p className="message_validation">{validateText}</p>
          <div className="buttons">
            <img id='delete-img' className={basketDeleteClass} src="https://img.icons8.com/windows/32/000000/trash.png" alt="basket" onClick={onDeleteEvent} />
            <button type="submit" className="event__btn-save btn_save">Save</button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default ModalWindow;


ModalWindow.propTypes = {
  isOpen: PropTypes.bool,
  onHideForm: PropTypes.func.isRequired,
  onDeleteEvent: PropTypes.func.isRequired,
  onValidate: PropTypes.func.isRequired,
  validateText: PropTypes.string,
  backgroundColor: PropTypes.string,
}
ModalWindow.defaultProps = {
  validateText: '',
  backgroundColor: '#0851f6',
}