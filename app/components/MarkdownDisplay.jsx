var React = require("react");
var Marked = require("marked");

var MarkdownDisplay = React.createClass({
  createMarkup: function(text) {
    text = Marked(text, {
  renderer: new Marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false
});

    return {__html: text};
  },
  render: function() {
    var text = this.props.text;

    return (
      <div dangerouslySetInnerHTML={this.createMarkup(text)} className="col-xs-12 col-lg-6"/>
    );
  }
});

module.exports = MarkdownDisplay;
