var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Task = function (_React$Component) {
  _inherits(Task, _React$Component);

  function Task(props) {
    _classCallCheck(this, Task);

    var _this = _possibleConstructorReturn(this, (Task.__proto__ || Object.getPrototypeOf(Task)).call(this, props));

    _this.edit = function () {
      _this.setState({ edit: true });
    };

    _this.remove = function () {
      _this.props.deleteBlock(_this.props.index);
    };

    _this.save = function () {
      var value = _this.refs.newTxt.value;
      _this.props.updateText(_this.refs.newTxt.value, _this.props.index);
      _this.setState({ edit: false });
    };

    _this.rendNorm = function () {
      return React.createElement(
        "div",
        { className: "box" },
        React.createElement(
          "div",
          { className: "text" },
          _this.props.children
        ),
        React.createElement(
          "button",
          { onClick: _this.edit, className: "btn light" },
          "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C"
        ),
        React.createElement(
          "button",
          { onClick: _this.remove, className: "btn red" },
          "\u0423\u0434\u0430\u043B\u0438\u0442\u044C"
        )
      );
    };

    _this.rendEdit = function () {
      return React.createElement(
        "div",
        { className: "box" },
        React.createElement("textarea", { ref: "newTxt", defaultValue: _this.props.children }),
        React.createElement(
          "button",
          { onClick: _this.save, className: "btn success" },
          "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"
        )
      );
    };

    _this.state = {
      edit: false
    };
    return _this;
  }

  _createClass(Task, [{
    key: "render",
    value: function render() {
      if (this.state.edit) {
        return this.rendEdit();
      } else {
        return this.rendNorm();
      }
    }
  }]);

  return Task;
}(React.Component);

var Field = function (_React$Component2) {
  _inherits(Field, _React$Component2);

  function Field(props) {
    _classCallCheck(this, Field);

    var _this2 = _possibleConstructorReturn(this, (Field.__proto__ || Object.getPrototypeOf(Field)).call(this, props));

    _this2.add = function (text) {
      var arr = _this2.state.tasks;
      arr.push(text);
      _this2.setState({ tasks: arr });
    };

    _this2.deleteBlock = function (i) {
      var arr = _this2.state.tasks;
      arr.splice(i, 1);
      _this2.setState({ tasks: arr });
    };

    _this2.updateText = function (text, i) {
      var arr = _this2.state.tasks;
      arr[i] = text;
      _this2.setState({ tasks: arr });
    };

    _this2.eachTask = function (item, i) {
      return React.createElement(
        Task,
        { key: i, index: i, updateText: _this2.updateText, deleteBlock: _this2.deleteBlock },
        item
      );
    };

    _this2.state = {
      tasks: []
    };
    return _this2;
  }

  _createClass(Field, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "field" },
        React.createElement(
          "button",
          { onClick: this.add.bind(null, 'Простое задание'), className: "btn new" },
          "\u041D\u043E\u0432\u043E\u0435 \u0437\u0430\u0434\u0430\u043D\u0438\u0435"
        ),
        this.state.tasks.map(this.eachTask)
      );
    }
  }]);

  return Field;
}(React.Component);

var app = document.getElementById("program");

ReactDOM.render(React.createElement(Field, null), app);