import React from 'react'

export class ErrorBoundary extends React.Component {
  state = {
    error: null,
    hasError: false,
    errorStack: []
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error
    }
  }

  // componentDidCatch(error, errorInfo) {
  //   this.setState({ error, errorStack: errorInfo })
  // }

  render() {
    const {hasError, error} = this.state;
    if (hasError) {
      return <div role="alert">{error.message}</div>
    } 

    return this.props.children;
  }
}