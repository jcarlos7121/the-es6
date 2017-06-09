import request from 'browser-request';
class DateTimePickerExample {
  constructor() {
  }

  initDateTimePicker() {
    let [ firstTime, lastTime, increments ] = [7, 20, 0.5];
    let totalTimes = ((lastTime - firstTime) / increments) + 1;
    let timeI = firstTime;
    let timeOptionsHTML = '<option value="">Select Time</option>';
        for (let i = 0; i < totalTimes; i += 1) {
            //create the time for the value of the input
            if (timeI < 10) {
                var timeStr = '0';
            } else {
                var timeStr = '';
            }
            timeStr += Math.floor(timeI).toString() + ':';
            if (timeI % 1 == 0) {
                timeStr += '00';
            } else {
                timeStr += '30';
            }
            //now make the label display
            if (timeI < 13) {
                var labelStr = Math.floor(timeI).toString() + ':';
            } else {
                var labelStr = (Math.floor(timeI) - 12).toString() + ':';
            }

            if (timeI % 1 == 0) {
                labelStr += '00';
            } else{
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

        // On click modal-date-input, call date picker
        // $('#modal-date-input').datepicker({
        //     dateFormat: 'M d, yy',
        //     minDate: 0
        // });

        // On click modal-date-input, call time picker
        $('#modal-time-input').html(timeOptionsHTML);
  }


  setup() {
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
    this.initDateTimePicker();
  }


}

$(()=> {
  let dtp = new DateTimePickerExample();
  dtp.setup();
});

export default DateTimePickerExample;
