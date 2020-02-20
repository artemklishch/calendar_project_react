import React from 'react';

const ModalWindow = ({isOpen, onHideForm, tempObj}) => {
  if(!isOpen) return null;
  return (
    <div className="popup-layer">
      <form className="popup event" data-id-event="">
        <span className="popup__btn-close" onClick={onHideForm}><img className="close" src="https://img.icons8.com/color/48/000000/close-window.png" alt="close" /></span>
        <input className="event__name" name="header" type="text" placeholder="Add title " />
        <div className="popup__picker">
          <img className="clock" src="https://img.icons8.com/pastel-glyph/64/000000/time.png" alt="clock" />
          <input className="event__date-start" name="startTime" required type="date" defaultValue={tempObj.date} />
          <input type="time" className="startTime_place" name="startTimePlace" defaultValue={tempObj.startTime} />
          <span className='line'></span>
          <input type="time" className="endTime_place" name="endTimePlace" defaultValue={tempObj.endTime} />
          <input className="event__date-end" name="endTime" required type="date" defaultValue={tempObj.date} />
        </div>
        <div className="centerData">
          <img className="multiline" src="https://img.icons8.com/windows/32/000000/multiline-text.png" alt="mutiline" />
          <textarea type="text" className="multiline__text" placeholder="add description" name="description"></textarea>
          <input type="color" className="pick_color" name="backgroundColor" />
        </div>
        <div className="footer-popup">
          <p className="message_validation"></p>
          <div className="buttons">
            <img className="event__btn-delete" src="https://img.icons8.com/windows/32/000000/trash.png" alt="basket" />
            <button type="submit" className="event__btn-save btn_save">Save</button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default ModalWindow;