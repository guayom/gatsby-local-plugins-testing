// Require React to use jsx
const React = require("react");

// Create snippet that will be inserted in every page
const snippet = `
  if (!window.test) {
      window.test = function(text) {
          alert(text);
      };
  };
`

// When the body is rendered, add the script to the head
exports.onRenderBody = (
  { setHeadComponents }
) => {
  return setHeadComponents([
    <script
      key="test-snippet"
      dangerouslySetInnerHTML={{ __html: snippet }}
    />,
  ])
}

// Now in every page you can do window.test("string"). 
// It will alert the string you pass
