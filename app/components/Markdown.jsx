var React = require("react");
var MarkdownText = require("MarkdownText");
var MarkdownDisplay = require("MarkdownDisplay");

var Markdown = React.createClass({
  getInitialState: function() {
    return {
      text: "# H1\n## H2\n### H3\nAlternatively, for H1 and H2, an underline-ish style:\nAlt-H1\n======\nAlt-H2\n------\nEmphasis, aka italics, with *asterisks* or _underscores_.\n\nStrong emphasis, aka bold, with **asterisks** or __underscores__.\n\nCombined emphasis with **asterisks and _underscores_**.\n\nStrikethrough uses two tildes. ~~Scratch this.~~\n1. First ordered list item\n2. Another item\n1. Actual numbers don't matter, just that it's a number\n4. And another item.\n* Unordered list can use asterisks\n- Or minuses\n+ Or pluses\n\n[Douglas Dunn](https://www.freecodecamp.com/douglasdunn)"
    };
  },
  handleDisplayChange: function(changedText) {
    this.setState({
      text: changedText
    });
  },
  render: function() {
    var text = this.state.text;

    return (
      <div>
        <h1 className="text-center">Markdown Previewer</h1>
        <div className="row">
          <MarkdownText text={text} displayChange={this.handleDisplayChange}/>
          <MarkdownDisplay text={text}/>
        </div>
      </div>
    );
  }
});

module.exports = Markdown;
