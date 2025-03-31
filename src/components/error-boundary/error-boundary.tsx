// ErrorBoundary.tsx

import React, {Component} from 'react';
import {View} from 'react-native';
import {Text} from '../text';
// import { ErrorReporting } from "@services/error";

export class ErrorBoundary extends Component<any, {hasError: boolean}> {
  constructor(props: any) {
    super(props);
    this.state = {hasError: false};
  }

  static getDerivedStateFromError() {
    return {hasError: true};
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught in ErrorBoundary:', error, errorInfo);
    // You can log the error to an error reporting service like Sentry
    // ErrorReporting.logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Please display something nicer to the user lol
      return (
        <View>
          <Text>The app was about to crash, but I got ya!</Text>
        </View>
      );
    }

    return this.props.children;
  }
}
