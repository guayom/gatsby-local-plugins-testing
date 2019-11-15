exports.onRouteUpdate = ({ location, prevLocation }) => {
  if(!prevLocation) {
    window.test("We just started!")
  } else {
    window.test(
      `We were in ${prevLocation.pathname} and navigated to ${location.pathname}`
    )
  }
}