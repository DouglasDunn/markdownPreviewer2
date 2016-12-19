var React = require("react");

var MarkdownText = React.createClass({
  handleChange: function() {
    var textArea = this.refs.textArea.value;
    this.props.displayChange(textArea);
  },
  render: function() {
    var text = this.props.text;

    return (
      <div className="col-xs-12 col-lg-6">
        <form>
          <textarea defaultValue={text} onChange={this.handleChange} ref="textArea" rows="25" cols="70"/>
        </form>
      </div>
    );
  }
});

module.exports = MarkdownText;
