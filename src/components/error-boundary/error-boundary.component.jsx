import React from "react";
import "./error-boundary.styles.scss";
class ErrorBoundary extends React.Component {
  state = { hasErrored: false };
  static getDerivedStateFromError(error) {
    return {
      hasErrored: true,
    };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <div className="error-overlay">
          <div className="image-container" />
          <h2 className="title">Sorry page is broken</h2>
        </div>
      );
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
