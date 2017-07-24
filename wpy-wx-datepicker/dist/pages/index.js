'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2, _initialiseProps;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _panel = require('./../components/panel.js');

var _panel2 = _interopRequireDefault(_panel);

var _datePicker = require('./../components/datePicker.js');

var _datePicker2 = _interopRequireDefault(_datePicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = (_temp2 = _class = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      this.$parent.getUserInfo(function (userInfo) {
        if (userInfo) {
          self.userInfo = userInfo;
        }
      });
    }
  }]);

  return Index;
}(_wepy2.default.page), _initialiseProps = function _initialiseProps() {
  this.config = {
    navigationBarTitleText: 'datePicker'
  };
  this.$props = { "DatePicker": { "v-bind:hidden.sync": "hidden", "v-bind:curPickTime.sync": "curPickTime" } };
  this.$events = { "DatePicker": { "v-on:initDateemit": "nitDateemitHandle" } };
  this.components = {
    panel: _panel2.default,
    DatePicker: _datePicker2.default
  };
  this.data = {
    curPickId: '1',
    curPickTime: '2000.01.01 20:00',
    publish_time: '2000.01.01 00:00',
    end_time: '2000.01.01 22:00',
    hidden: true
  };
  this.computed = {
    now: function now() {
      return +new Date();
    },
    getPublish_time: function getPublish_time() {
      console.log('getPublish_time...', this.curPickId);
      if (this.curPickId === '1') {
        this.publish_time = this.curPickTime;
      }
      return this.publish_time;
    },
    getEnd_time: function getEnd_time() {
      console.log('getEnd_time...', this.curPickId);
      if (this.curPickId === '2') {
        this.end_time = this.curPickTime;
      }
      // console.log('getEnd_time...endtime=', this.curPickTime, this.end_time)
      return this.end_time;
    }
  };
  this.methods = {
    initDateemitHandle: function initDateemitHandle() {
      console.log('initDateemitHandle...');
    },
    selectPicker: function selectPicker(e) {
      this.hidden = false;
      this.curPickId = e.target.dataset.id;
      console.log('111111', this.hidden, this.curPickId);
      if (this.curPickId === '1') {
        this.curPickTime = this.publish_time;
      } else if (this.curPickId === '2') {
        this.curPickTime = this.end_time;
      }
      this.$broadcast('broadcast-initDatePicker', {
        curPickTime: this.curPickTime
      });
    }
  };
  this.events = {
    'initDateemit': function initDateemit() {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      console.log('initDateemit...', args);
    }
  };
}, _temp2);

Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4Iiwic2VsZiIsIiRwYXJlbnQiLCJnZXRVc2VySW5mbyIsInVzZXJJbmZvIiwicGFnZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInBhbmVsIiwiRGF0ZVBpY2tlciIsImRhdGEiLCJjdXJQaWNrSWQiLCJjdXJQaWNrVGltZSIsInB1Ymxpc2hfdGltZSIsImVuZF90aW1lIiwiaGlkZGVuIiwiY29tcHV0ZWQiLCJub3ciLCJEYXRlIiwiZ2V0UHVibGlzaF90aW1lIiwiY29uc29sZSIsImxvZyIsImdldEVuZF90aW1lIiwibWV0aG9kcyIsImluaXREYXRlZW1pdEhhbmRsZSIsInNlbGVjdFBpY2tlciIsImUiLCJ0YXJnZXQiLCJkYXRhc2V0IiwiaWQiLCIkYnJvYWRjYXN0IiwiZXZlbnRzIiwiYXJncyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkE0RFY7QUFDUCxVQUFJQyxPQUFPLElBQVg7QUFDQSxXQUFLQyxPQUFMLENBQWFDLFdBQWIsQ0FBeUIsVUFBU0MsUUFBVCxFQUFtQjtBQUMxQyxZQUFJQSxRQUFKLEVBQWM7QUFDWkgsZUFBS0csUUFBTCxHQUFnQkEsUUFBaEI7QUFDRDtBQUNGLE9BSkQ7QUFLRDs7OztFQW5FZ0MsZUFBS0MsSTtPQUN0Q0MsTSxHQUFTO0FBQ1BDLDRCQUF3QjtBQURqQixHO09BR1ZDLE0sR0FBUyxFQUFDLGNBQWEsRUFBQyxzQkFBcUIsUUFBdEIsRUFBK0IsMkJBQTBCLGFBQXpELEVBQWQsRTtPQUNaQyxPLEdBQVUsRUFBQyxjQUFhLEVBQUMscUJBQW9CLG1CQUFyQixFQUFkLEU7T0FDVEMsVSxHQUFhO0FBQ1JDLDBCQURRO0FBRVJDO0FBRlEsRztPQUlWQyxJLEdBQU87QUFDTEMsZUFBVyxHQUROO0FBRUxDLGlCQUFhLGtCQUZSO0FBR0xDLGtCQUFjLGtCQUhUO0FBSUxDLGNBQVUsa0JBSkw7QUFLTEMsWUFBUTtBQUxILEc7T0FPUEMsUSxHQUFXO0FBQ1RDLE9BRFMsaUJBQ0g7QUFDSixhQUFPLENBQUMsSUFBSUMsSUFBSixFQUFSO0FBQ0QsS0FIUTtBQUlUQyxtQkFKUyw2QkFJUztBQUNoQkMsY0FBUUMsR0FBUixDQUFZLG9CQUFaLEVBQWtDLEtBQUtWLFNBQXZDO0FBQ0EsVUFBSSxLQUFLQSxTQUFMLEtBQW1CLEdBQXZCLEVBQTRCO0FBQzFCLGFBQUtFLFlBQUwsR0FBb0IsS0FBS0QsV0FBekI7QUFDRDtBQUNELGFBQU8sS0FBS0MsWUFBWjtBQUNELEtBVlE7QUFXVFMsZUFYUyx5QkFXSztBQUNaRixjQUFRQyxHQUFSLENBQVksZ0JBQVosRUFBOEIsS0FBS1YsU0FBbkM7QUFDQSxVQUFJLEtBQUtBLFNBQUwsS0FBbUIsR0FBdkIsRUFBNEI7QUFDMUIsYUFBS0csUUFBTCxHQUFnQixLQUFLRixXQUFyQjtBQUNEO0FBQ0Q7QUFDQSxhQUFPLEtBQUtFLFFBQVo7QUFDRDtBQWxCUSxHO09Bb0JYUyxPLEdBQVU7QUFDUkMsc0JBRFEsZ0NBQ2E7QUFDbkJKLGNBQVFDLEdBQVIsQ0FBWSx1QkFBWjtBQUNELEtBSE87QUFJUkksZ0JBSlEsd0JBSUtDLENBSkwsRUFJUTtBQUNkLFdBQUtYLE1BQUwsR0FBYyxLQUFkO0FBQ0EsV0FBS0osU0FBTCxHQUFpQmUsRUFBRUMsTUFBRixDQUFTQyxPQUFULENBQWlCQyxFQUFsQztBQUNBVCxjQUFRQyxHQUFSLENBQVksUUFBWixFQUFzQixLQUFLTixNQUEzQixFQUFtQyxLQUFLSixTQUF4QztBQUNBLFVBQUksS0FBS0EsU0FBTCxLQUFtQixHQUF2QixFQUE0QjtBQUMxQixhQUFLQyxXQUFMLEdBQW1CLEtBQUtDLFlBQXhCO0FBQ0QsT0FGRCxNQUVPLElBQUksS0FBS0YsU0FBTCxLQUFtQixHQUF2QixFQUE0QjtBQUNqQyxhQUFLQyxXQUFMLEdBQW1CLEtBQUtFLFFBQXhCO0FBQ0Q7QUFDRCxXQUFLZ0IsVUFBTCxDQUFnQiwwQkFBaEIsRUFBNEM7QUFDMUNsQixxQkFBYSxLQUFLQTtBQUR3QixPQUE1QztBQUdEO0FBaEJPLEc7T0FrQlZtQixNLEdBQVM7QUFDUCxvQkFBZ0Isd0JBQWE7QUFBQSx5Q0FBVEMsSUFBUztBQUFUQSxZQUFTO0FBQUE7O0FBQzNCWixjQUFRQyxHQUFSLENBQVksaUJBQVosRUFBK0JXLElBQS9CO0FBQ0Q7QUFITSxHOztrQkF2RFVuQyxLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuICBpbXBvcnQgUGFuZWwgZnJvbSAnLi4vY29tcG9uZW50cy9wYW5lbCdcclxuICBpbXBvcnQgRGF0ZVBpY2tlciBmcm9tICcuLi9jb21wb25lbnRzL2RhdGVQaWNrZXInXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAnZGF0ZVBpY2tlcidcclxuICAgIH1cclxuICAgJHByb3BzID0ge1wiRGF0ZVBpY2tlclwiOntcInYtYmluZDpoaWRkZW4uc3luY1wiOlwiaGlkZGVuXCIsXCJ2LWJpbmQ6Y3VyUGlja1RpbWUuc3luY1wiOlwiY3VyUGlja1RpbWVcIn19O1xyXG4kZXZlbnRzID0ge1wiRGF0ZVBpY2tlclwiOntcInYtb246aW5pdERhdGVlbWl0XCI6XCJuaXREYXRlZW1pdEhhbmRsZVwifX07XHJcbiBjb21wb25lbnRzID0ge1xyXG4gICAgICBwYW5lbDogUGFuZWwsXHJcbiAgICAgIERhdGVQaWNrZXI6IERhdGVQaWNrZXJcclxuICAgIH1cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIGN1clBpY2tJZDogJzEnLFxyXG4gICAgICBjdXJQaWNrVGltZTogJzIwMDAuMDEuMDEgMjA6MDAnLFxyXG4gICAgICBwdWJsaXNoX3RpbWU6ICcyMDAwLjAxLjAxIDAwOjAwJyxcclxuICAgICAgZW5kX3RpbWU6ICcyMDAwLjAxLjAxIDIyOjAwJyxcclxuICAgICAgaGlkZGVuOiB0cnVlXHJcbiAgICB9XHJcbiAgICBjb21wdXRlZCA9IHtcclxuICAgICAgbm93KCkge1xyXG4gICAgICAgIHJldHVybiArbmV3IERhdGUoKVxyXG4gICAgICB9LFxyXG4gICAgICBnZXRQdWJsaXNoX3RpbWUoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2dldFB1Ymxpc2hfdGltZS4uLicsIHRoaXMuY3VyUGlja0lkKVxyXG4gICAgICAgIGlmICh0aGlzLmN1clBpY2tJZCA9PT0gJzEnKSB7XHJcbiAgICAgICAgICB0aGlzLnB1Ymxpc2hfdGltZSA9IHRoaXMuY3VyUGlja1RpbWVcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHVibGlzaF90aW1lXHJcbiAgICAgIH0sXHJcbiAgICAgIGdldEVuZF90aW1lKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdnZXRFbmRfdGltZS4uLicsIHRoaXMuY3VyUGlja0lkKVxyXG4gICAgICAgIGlmICh0aGlzLmN1clBpY2tJZCA9PT0gJzInKSB7XHJcbiAgICAgICAgICB0aGlzLmVuZF90aW1lID0gdGhpcy5jdXJQaWNrVGltZVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnZ2V0RW5kX3RpbWUuLi5lbmR0aW1lPScsIHRoaXMuY3VyUGlja1RpbWUsIHRoaXMuZW5kX3RpbWUpXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZW5kX3RpbWVcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgaW5pdERhdGVlbWl0SGFuZGxlKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdpbml0RGF0ZWVtaXRIYW5kbGUuLi4nKVxyXG4gICAgICB9LFxyXG4gICAgICBzZWxlY3RQaWNrZXIoZSkge1xyXG4gICAgICAgIHRoaXMuaGlkZGVuID0gZmFsc2VcclxuICAgICAgICB0aGlzLmN1clBpY2tJZCA9IGUudGFyZ2V0LmRhdGFzZXQuaWRcclxuICAgICAgICBjb25zb2xlLmxvZygnMTExMTExJywgdGhpcy5oaWRkZW4sIHRoaXMuY3VyUGlja0lkKVxyXG4gICAgICAgIGlmICh0aGlzLmN1clBpY2tJZCA9PT0gJzEnKSB7XHJcbiAgICAgICAgICB0aGlzLmN1clBpY2tUaW1lID0gdGhpcy5wdWJsaXNoX3RpbWVcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY3VyUGlja0lkID09PSAnMicpIHtcclxuICAgICAgICAgIHRoaXMuY3VyUGlja1RpbWUgPSB0aGlzLmVuZF90aW1lXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuJGJyb2FkY2FzdCgnYnJvYWRjYXN0LWluaXREYXRlUGlja2VyJywge1xyXG4gICAgICAgICAgY3VyUGlja1RpbWU6IHRoaXMuY3VyUGlja1RpbWVcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBldmVudHMgPSB7XHJcbiAgICAgICdpbml0RGF0ZWVtaXQnOiAoLi4uYXJncykgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdpbml0RGF0ZWVtaXQuLi4nLCBhcmdzKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgIGxldCBzZWxmID0gdGhpc1xyXG4gICAgICB0aGlzLiRwYXJlbnQuZ2V0VXNlckluZm8oZnVuY3Rpb24odXNlckluZm8pIHtcclxuICAgICAgICBpZiAodXNlckluZm8pIHtcclxuICAgICAgICAgIHNlbGYudXNlckluZm8gPSB1c2VySW5mb1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcbiJdfQ==