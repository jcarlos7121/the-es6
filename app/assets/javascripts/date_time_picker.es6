import request from 'browser-request';
class DateTimePickerExample {
  constructor() {
  }

  initDateTimePicker(firstTime, lastTime, increments=0.5) {
    // let [ firstTime, lastTime, increments ] = [7, 20, 0.5];
    let totalTimes = ((lastTime - firstTime) / increments) + 1;
    let timeI = firstTime;
    let timeOptionsHTML = '<option value="">Select Time</option>';
    let timeStr, labelStr;
        for (let i = 0; i < totalTimes; i++) {
            //create the time for the value of the input
            if (timeI < 10) {
                timeStr = '0';
            } else {
                timeStr = '';
            }

            //now make the label display
            if (timeI < 13) {
                labelStr = Math.floor(timeI).toString() + ':';
            } else {
                labelStr = (Math.floor(timeI) - 12).toString() + ':';
            }

            timeStr += Math.floor(timeI).toString() + ':';

            if (timeI % 1 == 0) {
                timeStr += '00';
                labelStr += '00';
            } else {
                timeStr += '30';
                labelStr += '30';
            }

            if (timeI < 12) {
                labelStr += 'AM';
            } else {
                labelStr += 'PM';
            }
            timeOptionsHTML += '<option value="' + timeStr + '">' + labelStr + '</option>';
            timeI += increments;
        }
        console.log(timeOptionsHTML);
        // On click modal-date-input, call time picker
        $('#modal-time-input').html(timeOptionsHTML);
  }


  init() {
    $('.date-time-selector').click(function() {
       // change the select for selecting user availabilities to nil
       $('#date-time-select-modal').modal('show');

    });

    // store date + time into input field when save button clicked
    $('#save').click(function() {
        let time = $('#modal-time-input').val();
        let date = $('#modal-date-input').val();
        let datetime = moment(date + ' ' + time).format();
        if (time.length === 0 || date.length === 0) {
            notificationService.error("please select both date and time.");
            return false;
        } else {
            $('.date-time-selector').val(moment(date + ' ' + time).format('MMMM Do YYYY, h:mm:ss a'));
        }
    });
    this.initDateTimePicker(7, 20);
  }


}

$(()=> {
  let dtp = new DateTimePickerExample();
  dtp.init();
});

export default DateTimePickerExample;
