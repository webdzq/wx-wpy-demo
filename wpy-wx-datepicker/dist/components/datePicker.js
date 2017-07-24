'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2, _initialiseProps;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DatePicker = (_temp2 = _class = function (_wepy$component) {
  _inherits(DatePicker, _wepy$component);

  function DatePicker() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, DatePicker);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DatePicker.__proto__ || Object.getPrototypeOf(DatePicker)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DatePicker, [{
    key: 'resolveDate',
    value: function resolveDate(vtime) {
      var datetime = vtime || '2000.1.1 00:00';
      // console.log('resolveDate=', datetime)
      var dateTimeArr = datetime.split(' ');
      var date = dateTimeArr[0];
      var time = dateTimeArr[1];
      // console.log('resolveDate=', date, time)
      var dateArr = date.split('.');
      var timeArr = time.split(':');
      var year = dateArr[0];
      var month = dateArr[1];
      var day = dateArr[2];
      var hour = timeArr[0];
      var minute = timeArr[1];
      return {
        year: year,
        month: month,
        day: day,
        hour: hour,
        minute: minute
      };
    }
  }, {
    key: 'getParentDate',
    value: function getParentDate(curPickTime) {
      // console.log('onShow..curPickTime=', this.curPickTime)
      var dateTime = this.resolveDate(curPickTime);
      this.year = dateTime.year;
      this.month = dateTime.month;
      this.day = dateTime.day;
      this.minute = dateTime.minute;
      this.hour = dateTime.hour;
      this.value[0] = this.year - this.startYear;
      this.value[1] = this.month - 1;
      this.value[2] = this.day - 1;
      this.value1[0] = this.hour;
      this.value1[1] = this.minute;
      return this.curPickTime;
    }
  }, {
    key: 'initDatePicker',
    value: function initDatePicker() {
      // console.log('initDatePicker...', this.curPickTime)
      var date = new Date();
      var years = [];
      var months = [];
      var days = [];
      var hours = [];
      var minutes = [];
      this.year = date.getFullYear() || this.startYear;
      this.month = date.getMonth() + 1 || '01';
      this.day = date.getDate() || '01';
      this.hour = date.getHours() || '00';
      this.minute = date.getMinutes() || '00';
      this.month = this.month < 10 ? '0' + this.month : this.month;
      this.day = this.day < 10 ? '0' + this.day : this.day;
      this.hour = this.hour < 10 ? '0' + this.hour : this.hour;
      this.minute = this.minute < 10 ? '0' + this.minute : this.minute;
      for (var i = 2000; i <= date.getFullYear() + 50; i++) {
        years.push(i);
      }
      for (var _i = 1; _i <= 12; _i++) {
        if (_i < 10) {
          _i = '0' + _i;
        }
        months.push(_i);
      }
      var dayNum = this.getDayNum(this.year, this.month);
      for (var _i2 = 1; _i2 <= dayNum; _i2++) {
        if (_i2 < 10) {
          _i2 = '0' + _i2;
        }
        days.push(_i2);
      }
      for (var _i3 = 0; _i3 <= 23; _i3++) {
        if (_i3 < 10) {
          _i3 = '0' + _i3;
        }
        hours.push(_i3);
      }
      for (var _i4 = 0; _i4 <= 59; _i4++) {
        if (_i4 < 10) {
          _i4 = '0' + _i4;
        }
        minutes.push(_i4);
      }
      this.years = years;
      this.months = months;
      this.days = days;
      this.hours = hours;
      this.minutes = minutes;
    }
  }, {
    key: 'getDayNum',
    value: function getDayNum(vyear, vmonth) {
      // console.log('getDayNum..', vyear, vmonth)
      var that = this;
      var year = vyear;
      var month = vmonth;
      var dataObj = {
        '01': 31,
        '02': function () {
          if (that.isLeapYear(year)) {
            return 29;
          } else {
            return 28;
          }
        }(),
        '03': 31,
        '04': 30,
        '05': 31,
        '06': 30,
        '07': 31,
        '08': 31,
        '09': 30,
        '10': 31,
        '11': 30,
        '12': 31
      };
      return dataObj[month];
    }
  }, {
    key: 'isLeapYear',
    value: function isLeapYear(vyear) {
      var year = vyear || 2000;
      if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {
      // console.log('onLoad...', this.hidden)
      this.initDatePicker();
    }
  }]);

  return DatePicker;
}(_wepy2.default.component), _initialiseProps = function _initialiseProps() {
  this.props = {
    hidden: {
      type: Boolean,
      default: false,
      twoWay: true
    },
    curPickTime: {
      type: String,
      default: '',
      twoWay: true
    }
  };
  this.data = {
    height: 35,
    year: '',
    month: '',
    day: '',
    hour: '',
    minute: '',
    years: [],
    months: [],
    days: [],
    hours: [],
    minutes: [],
    startYear: 2000,
    value: [1, 0, 0],
    value1: [0, 0]
  };
  this.computed = {
    getDays: function getDays() {
      var dayNum = this.getDayNum(this.year, this.month) || 31;
      var tmpdays = [];
      for (var i = 1; i <= dayNum; i++) {
        if (i < 10) {
          i = '0' + i;
        }
        tmpdays.push(i);
      }
      this.days = tmpdays;
      // console.log('watch..month..=', dayNum, tmpdays)
      return this.days;
    }
  };
  this.methods = {
    bindChangeDate: function bindChangeDate(e) {
      var val = e.detail.value;
      // console.log('bindChangeDate...', val)
      this.year = this.years[val[0]];
      this.month = this.months[val[1]];
      this.day = this.days[val[2]];
    },
    bindChangeTime: function bindChangeTime(e) {
      var val = e.detail.value;
      this.hour = this.hours[val[0]];
      this.minute = this.minutes[val[1]];
      // console.log('bindChangeTime...', val[0])
    },
    cancel: function cancel() {
      this.hidden = true;
    },
    sumbit: function sumbit() {
      this.hidden = true;
      this.curPickTime = this.year + '.' + this.month + '.' + this.day + ' ' + this.hour + ':' + this.minute;
      // console.log('sumbit...', this.month, this.day, this.curPickTime)
      var standardtime = new Date(this.year, this.month - 1, this.day, this.hour, this.minute).getTime();
      this.$emit('emit-sumbitTime', this.curPickTime, standardtime);
    }
  };
  this.events = {
    'broadcast-initDatePicker': function broadcastInitDatePicker(args) {
      // console.log('broadcast-initDatePicker...', args)
      this.getParentDate(args.curPickTime);
    }
  };
}, _temp2);
exports.default = DatePicker;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGVQaWNrZXIuanMiXSwibmFtZXMiOlsiRGF0ZVBpY2tlciIsInZ0aW1lIiwiZGF0ZXRpbWUiLCJkYXRlVGltZUFyciIsInNwbGl0IiwiZGF0ZSIsInRpbWUiLCJkYXRlQXJyIiwidGltZUFyciIsInllYXIiLCJtb250aCIsImRheSIsImhvdXIiLCJtaW51dGUiLCJjdXJQaWNrVGltZSIsImRhdGVUaW1lIiwicmVzb2x2ZURhdGUiLCJ2YWx1ZSIsInN0YXJ0WWVhciIsInZhbHVlMSIsIkRhdGUiLCJ5ZWFycyIsIm1vbnRocyIsImRheXMiLCJob3VycyIsIm1pbnV0ZXMiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsImdldEhvdXJzIiwiZ2V0TWludXRlcyIsImkiLCJwdXNoIiwiZGF5TnVtIiwiZ2V0RGF5TnVtIiwidnllYXIiLCJ2bW9udGgiLCJ0aGF0IiwiZGF0YU9iaiIsImlzTGVhcFllYXIiLCJpbml0RGF0ZVBpY2tlciIsImNvbXBvbmVudCIsInByb3BzIiwiaGlkZGVuIiwidHlwZSIsIkJvb2xlYW4iLCJkZWZhdWx0IiwidHdvV2F5IiwiU3RyaW5nIiwiZGF0YSIsImhlaWdodCIsImNvbXB1dGVkIiwiZ2V0RGF5cyIsInRtcGRheXMiLCJtZXRob2RzIiwiYmluZENoYW5nZURhdGUiLCJlIiwidmFsIiwiZGV0YWlsIiwiYmluZENoYW5nZVRpbWUiLCJjYW5jZWwiLCJzdW1iaXQiLCJzdGFuZGFyZHRpbWUiLCJnZXRUaW1lIiwiJGVtaXQiLCJldmVudHMiLCJhcmdzIiwiZ2V0UGFyZW50RGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dDQTRDUEMsSyxFQUFPO0FBQ2pCLFVBQU1DLFdBQVdELFNBQVMsZ0JBQTFCO0FBQ0E7QUFDQSxVQUFJRSxjQUFjRCxTQUFTRSxLQUFULENBQWUsR0FBZixDQUFsQjtBQUNBLFVBQU1DLE9BQU9GLFlBQVksQ0FB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QUFDQSxXQUFLNUMsTUFBTCxHQUFjLEtBQUtZLE9BQUwsQ0FBYWdDLElBQUksQ0FBSixDQUFiLENBQWQ7QUFDQTtBQUNELEtBYk87QUFjUkcsVUFkUSxvQkFjQztBQUNQLFdBQUtqQixNQUFMLEdBQWMsSUFBZDtBQUNELEtBaEJPO0FBaUJSa0IsVUFqQlEsb0JBaUJDO0FBQ1AsV0FBS2xCLE1BQUwsR0FBYyxJQUFkO0FBQ0EsV0FBSzdCLFdBQUwsR0FBbUIsS0FBS0wsSUFBTCxHQUFZLEdBQVosR0FBa0IsS0FBS0MsS0FBdkIsR0FBK0IsR0FBL0IsR0FBcUMsS0FBS0MsR0FBMUMsR0FBZ0QsR0FBaEQsR0FBc0QsS0FBS0MsSUFBM0QsR0FBa0UsR0FBbEUsR0FBd0UsS0FBS0MsTUFBaEc7QUFDQTtBQUNBLFVBQU1pRCxlQUFlLElBQUkxQyxJQUFKLENBQVMsS0FBS1gsSUFBZCxFQUFvQixLQUFLQyxLQUFMLEdBQWEsQ0FBakMsRUFBb0MsS0FBS0MsR0FBekMsRUFBOEMsS0FBS0MsSUFBbkQsRUFBeUQsS0FBS0MsTUFBOUQsRUFBc0VrRCxPQUF0RSxFQUFyQjtBQUNBLFdBQUtDLEtBQUwsQ0FBVyxpQkFBWCxFQUE4QixLQUFLbEQsV0FBbkMsRUFBZ0RnRCxZQUFoRDtBQUNEO0FBdkJPLEc7T0F5QlZHLE0sR0FBUztBQUNQLGdDQUE0QixpQ0FBU0MsSUFBVCxFQUFlO0FBQ3pDO0FBQ0EsV0FBS0MsYUFBTCxDQUFtQkQsS0FBS3BELFdBQXhCO0FBQ0Q7QUFKTSxHOztrQkFoTVVkLFUiLCJmaWxlIjoiZGF0ZVBpY2tlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRlUGlja2VyIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgIHByb3BzID0ge1xuICAgICAgaGlkZGVuOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgICB0d29XYXk6IHRydWVcbiAgICAgIH0sXG4gICAgICBjdXJQaWNrVGltZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIGRlZmF1bHQ6ICcnLFxuICAgICAgICB0d29XYXk6IHRydWVcbiAgICAgIH1cbiAgICB9XG4gICAgZGF0YSA9IHtcbiAgICAgIGhlaWdodDogMzUsXG4gICAgICB5ZWFyOiAnJyxcbiAgICAgIG1vbnRoOiAnJyxcbiAgICAgIGRheTogJycsXG4gICAgICBob3VyOiAnJyxcbiAgICAgIG1pbnV0ZTogJycsXG4gICAgICB5ZWFyczogW10sXG4gICAgICBtb250aHM6IFtdLFxuICAgICAgZGF5czogW10sXG4gICAgICBob3VyczogW10sXG4gICAgICBtaW51dGVzOiBbXSxcbiAgICAgIHN0YXJ0WWVhcjogMjAwMCxcbiAgICAgIHZhbHVlOiBbMSwgMCwgMF0sXG4gICAgICB2YWx1ZTE6IFswLCAwXVxuICAgIH1cbiAgICBjb21wdXRlZCA9IHtcbiAgICAgIGdldERheXMoKSB7XG4gICAgICAgIGNvbnN0IGRheU51bSA9IHRoaXMuZ2V0RGF5TnVtKHRoaXMueWVhciwgdGhpcy5tb250aCkgfHwgMzFcbiAgICAgICAgbGV0IHRtcGRheXMgPSBbXVxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBkYXlOdW07IGkrKykge1xuICAgICAgICAgIGlmIChpIDwgMTApIHtcbiAgICAgICAgICAgIGkgPSAnMCcgKyBpXG4gICAgICAgICAgfVxuICAgICAgICAgIHRtcGRheXMucHVzaChpKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGF5cyA9IHRtcGRheXNcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3dhdGNoLi5tb250aC4uPScsIGRheU51bSwgdG1wZGF5cylcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF5c1xuICAgICAgfVxuICAgIH1cbiAgICByZXNvbHZlRGF0ZSh2dGltZSkge1xuICAgICAgY29uc3QgZGF0ZXRpbWUgPSB2dGltZSB8fCAnMjAwMC4xLjEgMDA6MDAnXG4gICAgICAvLyBjb25zb2xlLmxvZygncmVzb2x2ZURhdGU9JywgZGF0ZXRpbWUpXG4gICAgICBsZXQgZGF0ZVRpbWVBcnIgPSBkYXRldGltZS5zcGxpdCgnICcpXG4gICAgICBjb25zdCBkYXRlID0gZGF0ZVRpbWVBcnJbMF1cbiAgICAgIGNvbnN0IHRpbWUgPSBkYXRlVGltZUFyclsxXVxuICAgICAgLy8gY29uc29sZS5sb2coJ3Jlc29sdmVEYXRlPScsIGRhdGUsIHRpbWUpXG4gICAgICBjb25zdCBkYXRlQXJyID0gZGF0ZS5zcGxpdCgnLicpXG4gICAgICBjb25zdCB0aW1lQXJyID0gdGltZS5zcGxpdCgnOicpXG4gICAgICBjb25zdCB5ZWFyID0gZGF0ZUFyclswXVxuICAgICAgY29uc3QgbW9udGggPSBkYXRlQXJyWzFdXG4gICAgICBjb25zdCBkYXkgPSBkYXRlQXJyWzJdXG4gICAgICBjb25zdCBob3VyID0gdGltZUFyclswXVxuICAgICAgY29uc3QgbWludXRlID0gdGltZUFyclsxXVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgeWVhcjogeWVhcixcbiAgICAgICAgbW9udGg6IG1vbnRoLFxuICAgICAgICBkYXk6IGRheSxcbiAgICAgICAgaG91cjogaG91cixcbiAgICAgICAgbWludXRlOiBtaW51dGVcbiAgICAgIH1cbiAgICB9XG4gICAgZ2V0UGFyZW50RGF0ZShjdXJQaWNrVGltZSkge1xuICAgICAgLy8gY29uc29sZS5sb2coJ29uU2hvdy4uY3VyUGlja1RpbWU9JywgdGhpcy5jdXJQaWNrVGltZSlcbiAgICAgIGNvbnN0IGRhdGVUaW1lID0gdGhpcy5yZXNvbHZlRGF0ZShjdXJQaWNrVGltZSlcbiAgICAgIHRoaXMueWVhciA9IGRhdGVUaW1lLnllYXJcbiAgICAgIHRoaXMubW9udGggPSBkYXRlVGltZS5tb250aFxuICAgICAgdGhpcy5kYXkgPSBkYXRlVGltZS5kYXlcbiAgICAgIHRoaXMubWludXRlID0gZGF0ZVRpbWUubWludXRlXG4gICAgICB0aGlzLmhvdXIgPSBkYXRlVGltZS5ob3VyXG4gICAgICB0aGlzLnZhbHVlWzBdID0gdGhpcy55ZWFyIC0gdGhpcy5zdGFydFllYXJcbiAgICAgIHRoaXMudmFsdWVbMV0gPSB0aGlzLm1vbnRoIC0gMVxuICAgICAgdGhpcy52YWx1ZVsyXSA9IHRoaXMuZGF5IC0gMVxuICAgICAgdGhpcy52YWx1ZTFbMF0gPSB0aGlzLmhvdXJcbiAgICAgIHRoaXMudmFsdWUxWzFdID0gdGhpcy5taW51dGVcbiAgICAgIHJldHVybiB0aGlzLmN1clBpY2tUaW1lXG4gICAgfVxuICAgIGluaXREYXRlUGlja2VyKCkge1xuICAgICAgLy8gY29uc29sZS5sb2coJ2luaXREYXRlUGlja2VyLi4uJywgdGhpcy5jdXJQaWNrVGltZSlcbiAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpXG4gICAgICBjb25zdCB5ZWFycyA9IFtdXG4gICAgICBjb25zdCBtb250aHMgPSBbXVxuICAgICAgY29uc3QgZGF5cyA9IFtdXG4gICAgICBjb25zdCBob3VycyA9IFtdXG4gICAgICBjb25zdCBtaW51dGVzID0gW11cbiAgICAgIHRoaXMueWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKSB8fCB0aGlzLnN0YXJ0WWVhclxuICAgICAgdGhpcy5tb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIDEgfHwgJzAxJ1xuICAgICAgdGhpcy5kYXkgPSBkYXRlLmdldERhdGUoKSB8fCAnMDEnXG4gICAgICB0aGlzLmhvdXIgPSBkYXRlLmdldEhvdXJzKCkgfHwgJzAwJ1xuICAgICAgdGhpcy5taW51dGUgPSBkYXRlLmdldE1pbnV0ZXMoKSB8fCAnMDAnXG4gICAgICB0aGlzLm1vbnRoID0gdGhpcy5tb250aCA8IDEwID8gJzAnICsgdGhpcy5tb250aCA6IHRoaXMubW9udGhcbiAgICAgIHRoaXMuZGF5ID0gdGhpcy5kYXkgPCAxMCA/ICcwJyArIHRoaXMuZGF5IDogdGhpcy5kYXlcbiAgICAgIHRoaXMuaG91ciA9IHRoaXMuaG91ciA8IDEwID8gJzAnICsgdGhpcy5ob3VyIDogdGhpcy5ob3VyXG4gICAgICB0aGlzLm1pbnV0ZSA9IHRoaXMubWludXRlIDwgMTAgPyAnMCcgKyB0aGlzLm1pbnV0ZSA6IHRoaXMubWludXRlXG4gICAgICBmb3IgKGxldCBpID0gMjAwMDsgaSA8PSBkYXRlLmdldEZ1bGxZZWFyKCkgKyA1MDsgaSsrKSB7XG4gICAgICAgIHllYXJzLnB1c2goaSlcbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDEyOyBpKyspIHtcbiAgICAgICAgaWYgKGkgPCAxMCkge1xuICAgICAgICAgIGkgPSAnMCcgKyBpXG4gICAgICAgIH1cbiAgICAgICAgbW9udGhzLnB1c2goaSlcbiAgICAgIH1cbiAgICAgIGNvbnN0IGRheU51bSA9IHRoaXMuZ2V0RGF5TnVtKHRoaXMueWVhciwgdGhpcy5tb250aClcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IGRheU51bTsgaSsrKSB7XG4gICAgICAgIGlmIChpIDwgMTApIHtcbiAgICAgICAgICBpID0gJzAnICsgaVxuICAgICAgICB9XG4gICAgICAgIGRheXMucHVzaChpKVxuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gMjM7IGkrKykge1xuICAgICAgICBpZiAoaSA8IDEwKSB7XG4gICAgICAgICAgaSA9ICcwJyArIGlcbiAgICAgICAgfVxuICAgICAgICBob3Vycy5wdXNoKGkpXG4gICAgICB9XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSA1OTsgaSsrKSB7XG4gICAgICAgIGlmIChpIDwgMTApIHtcbiAgICAgICAgICBpID0gJzAnICsgaVxuICAgICAgICB9XG4gICAgICAgIG1pbnV0ZXMucHVzaChpKVxuICAgICAgfVxuICAgICAgdGhpcy55ZWFycyA9IHllYXJzXG4gICAgICB0aGlzLm1vbnRocyA9IG1vbnRoc1xuICAgICAgdGhpcy5kYXlzID0gZGF5c1xuICAgICAgdGhpcy5ob3VycyA9IGhvdXJzXG4gICAgICB0aGlzLm1pbnV0ZXMgPSBtaW51dGVzXG4gICAgfVxuICAgIGdldERheU51bSh2eWVhciwgdm1vbnRoKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnZ2V0RGF5TnVtLi4nLCB2eWVhciwgdm1vbnRoKVxuICAgICAgY29uc3QgdGhhdCA9IHRoaXNcbiAgICAgIGxldCB5ZWFyID0gdnllYXJcbiAgICAgIGxldCBtb250aCA9IHZtb250aFxuICAgICAgY29uc3QgZGF0YU9iaiA9IHtcbiAgICAgICAgJzAxJzogMzEsXG4gICAgICAgICcwMic6IChmdW5jdGlvbigpIHtcbiAgICAgICAgICBpZiAodGhhdC5pc0xlYXBZZWFyKHllYXIpKSB7XG4gICAgICAgICAgICByZXR1cm4gMjlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIDI4XG4gICAgICAgICAgfVxuICAgICAgICB9KSgpLFxuICAgICAgICAnMDMnOiAzMSxcbiAgICAgICAgJzA0JzogMzAsXG4gICAgICAgICcwNSc6IDMxLFxuICAgICAgICAnMDYnOiAzMCxcbiAgICAgICAgJzA3JzogMzEsXG4gICAgICAgICcwOCc6IDMxLFxuICAgICAgICAnMDknOiAzMCxcbiAgICAgICAgJzEwJzogMzEsXG4gICAgICAgICcxMSc6IDMwLFxuICAgICAgICAnMTInOiAzMVxuICAgICAgfVxuICAgICAgcmV0dXJuIGRhdGFPYmpbbW9udGhdXG4gICAgfVxuICAgIGlzTGVhcFllYXIodnllYXIpIHtcbiAgICAgIGNvbnN0IHllYXIgPSB2eWVhciB8fCAyMDAwXG4gICAgICBpZiAoKCh5ZWFyICUgNCkgPT09IDAgJiYgKHllYXIgJSAxMDApICE9PSAwKSB8fCAoeWVhciAlIDQwMCkgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH1cbiAgICBtZXRob2RzID0ge1xuICAgICAgYmluZENoYW5nZURhdGUoZSkge1xuICAgICAgICBjb25zdCB2YWwgPSBlLmRldGFpbC52YWx1ZVxuICAgICAgICAvLyBjb25zb2xlLmxvZygnYmluZENoYW5nZURhdGUuLi4nLCB2YWwpXG4gICAgICAgIHRoaXMueWVhciA9IHRoaXMueWVhcnNbdmFsWzBdXVxuICAgICAgICB0aGlzLm1vbnRoID0gdGhpcy5tb250aHNbdmFsWzFdXVxuICAgICAgICB0aGlzLmRheSA9IHRoaXMuZGF5c1t2YWxbMl1dXG4gICAgICB9LFxuICAgICAgYmluZENoYW5nZVRpbWUoZSkge1xuICAgICAgICBjb25zdCB2YWwgPSBlLmRldGFpbC52YWx1ZVxuICAgICAgICB0aGlzLmhvdXIgPSB0aGlzLmhvdXJzW3ZhbFswXV1cbiAgICAgICAgdGhpcy5taW51dGUgPSB0aGlzLm1pbnV0ZXNbdmFsWzFdXVxuICAgICAgICAvLyBjb25zb2xlLmxvZygnYmluZENoYW5nZVRpbWUuLi4nLCB2YWxbMF0pXG4gICAgICB9LFxuICAgICAgY2FuY2VsKCkge1xuICAgICAgICB0aGlzLmhpZGRlbiA9IHRydWVcbiAgICAgIH0sXG4gICAgICBzdW1iaXQoKSB7XG4gICAgICAgIHRoaXMuaGlkZGVuID0gdHJ1ZVxuICAgICAgICB0aGlzLmN1clBpY2tUaW1lID0gdGhpcy55ZWFyICsgJy4nICsgdGhpcy5tb250aCArICcuJyArIHRoaXMuZGF5ICsgJyAnICsgdGhpcy5ob3VyICsgJzonICsgdGhpcy5taW51dGVcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3N1bWJpdC4uLicsIHRoaXMubW9udGgsIHRoaXMuZGF5LCB0aGlzLmN1clBpY2tUaW1lKVxuICAgICAgICBjb25zdCBzdGFuZGFyZHRpbWUgPSBuZXcgRGF0ZSh0aGlzLnllYXIsIHRoaXMubW9udGggLSAxLCB0aGlzLmRheSwgdGhpcy5ob3VyLCB0aGlzLm1pbnV0ZSkuZ2V0VGltZSgpXG4gICAgICAgIHRoaXMuJGVtaXQoJ2VtaXQtc3VtYml0VGltZScsIHRoaXMuY3VyUGlja1RpbWUsIHN0YW5kYXJkdGltZSlcbiAgICAgIH1cbiAgICB9XG4gICAgZXZlbnRzID0ge1xuICAgICAgJ2Jyb2FkY2FzdC1pbml0RGF0ZVBpY2tlcic6IGZ1bmN0aW9uKGFyZ3MpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2Jyb2FkY2FzdC1pbml0RGF0ZVBpY2tlci4uLicsIGFyZ3MpXG4gICAgICAgIHRoaXMuZ2V0UGFyZW50RGF0ZShhcmdzLmN1clBpY2tUaW1lKVxuICAgICAgfVxuICAgIH1cbiAgICBvbkxvYWQoKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnb25Mb2FkLi4uJywgdGhpcy5oaWRkZW4pXG4gICAgICB0aGlzLmluaXREYXRlUGlja2VyKClcbiAgICB9XG4gIH1cbiJdfQ==