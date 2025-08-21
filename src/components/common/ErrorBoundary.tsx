import React, { Component, ErrorInfo, ReactNode } from 'react'
import { AlertTriangle, RefreshCw, Home, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface Props {
  children: ReactNode
  fallback?: ReactNode
  onError?: (error: Error, errorInfo: ErrorInfo) => void
}

interface State {
  hasError: boolean
  error: Error | null
  errorInfo: ErrorInfo | null
  errorId: string
}

class ErrorBoundary extends Component<Props, State> {
  private retryCount = 0
  private maxRetries = 3

  public state: State = {
    hasError: false,
    error: null,
    errorInfo: null,
    errorId: '',
  }

  public static getDerivedStateFromError(error: Error): State {
    // Generate unique error ID for tracking
    const errorId = `ERR_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    
    return {
      hasError: true,
      error,
      errorInfo: null,
      errorId,
    }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo,
    })

    // Log error details for debugging
    console.error('ErrorBoundary caught an error:', error, errorInfo)
    
    // Call optional error handler
    if (this.props.onError) {
      this.props.onError(error, errorInfo)
    }

    // Send error to monitoring service (e.g., Sentry)
    this.logErrorToService(error, errorInfo)
  }

  private logErrorToService(error: Error, errorInfo: ErrorInfo) {
    // Mock error logging - replace with actual service like Sentry
    const errorData = {
      errorId: this.state.errorId,
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
      retryCount: this.retryCount,
    }

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error logged:', errorData)
    }

    // In production, send to error tracking service
    // Example: Sentry.captureException(error, { extra: errorData })
  }

  private handleRetry = () => {
    if (this.retryCount < this.maxRetries) {
      this.retryCount++
      this.setState({
        hasError: false,
        error: null,
        errorInfo: null,
        errorId: '',
      })
    }
  }

  private handleReload = () => {
    window.location.reload()
  }

  private handleGoHome = () => {
    window.location.href = '/'
  }

  private copyErrorDetails = () => {
    const errorText = `
Error ID: ${this.state.errorId}
Error: ${this.state.error?.message}
Stack: ${this.state.error?.stack}
Component Stack: ${this.state.errorInfo?.componentStack}
URL: ${window.location.href}
Timestamp: ${new Date().toISOString()}
User Agent: ${navigator.userAgent}
    `.trim()

    navigator.clipboard.writeText(errorText).then(() => {
      // Could show a toast notification here
      console.log('Error details copied to clipboard')
    })
  }

  public render() {
    if (this.state.hasError && this.props.fallback) {
      return this.props.fallback
    }

    if (this.state.hasError) {
      const canRetry = this.retryCount < this.maxRetries
      const isNetworkError = this.state.error?.message.includes('fetch') || 
                            this.state.error?.message.includes('network')
      const isChunkError = this.state.error?.message.includes('Loading chunk')

      return (
        <div className="min-h-screen bg-rnm-purple-900 flex items-center justify-center p-4">
          <Card variant="default" className="max-w-2xl w-full">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-rnm-danger/20 rounded-full flex items-center justify-center">
                  <AlertTriangle className="w-8 h-8 text-rnm-danger" />
                </div>
              </div>
              
              <CardTitle className="text-2xl text-rnm-neutral-100 mb-2">
                Oops! Something went wrong
              </CardTitle>
              
              <div className="flex justify-center space-x-2 mb-4">
                <Badge variant="destructive" size="sm">
                  Error ID: {this.state.errorId}
                </Badge>
                {isNetworkError && (
                  <Badge variant="warning" size="sm">
                    Network Issue
                  </Badge>
                )}
                {isChunkError && (
                  <Badge variant="info" size="sm">
                    Loading Issue
                  </Badge>
                )}
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Error Message */}
              <div className="text-center">
                <p className="text-rnm-neutral-300 mb-4">
                  {isNetworkError 
                    ? "We're having trouble connecting to our servers. Please check your internet connection and try again."
                    : isChunkError
                    ? "There was an issue loading part of the application. This usually fixes itself with a refresh."
                    : "An unexpected error occurred while loading the page. Our team has been notified and will investigate."
                  }
                </p>
                
                {this.retryCount > 0 && (
                  <p className="text-sm text-rnm-neutral-400">
                    Retry attempts: {this.retryCount}/{this.maxRetries}
                  </p>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                {canRetry && (
                  <Button 
                    variant="primary" 
                    onClick={this.handleRetry}
                    className="flex items-center space-x-2"
                  >
                    <RefreshCw className="w-4 h-4" />
                    <span>Try Again</span>
                  </Button>
                )}
                
                <Button 
                  variant="secondary" 
                  onClick={this.handleReload}
                  className="flex items-center space-x-2"
                >
                  <RefreshCw className="w-4 h-4" />
                  <span>Reload Page</span>
                </Button>
                
                <Button 
                  variant="outline" 
                  onClick={this.handleGoHome}
                  className="flex items-center space-x-2"
                >
                  <Home className="w-4 h-4" />
                  <span>Go Home</span>
                </Button>
              </div>

              {/* Support Section */}
              <div className="bg-rnm-neutral-800/50 rounded-lg p-4 text-center">
                <p className="text-sm text-rnm-neutral-300 mb-3">
                  Still having issues? Get help from our support team:
                </p>
                
                <div className="flex flex-col sm:flex-row gap-2 justify-center">
                  <Button 
                    variant="outline" 
                    size="sm"
                    href="https://discord.gg/rnm-server"
                    external
                    className="flex items-center space-x-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Discord Support</span>
                  </Button>
                  
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={this.copyErrorDetails}
                    className="flex items-center space-x-2"
                  >
                    <span>Copy Error Details</span>
                  </Button>
                </div>
              </div>

              {/* Development Error Details */}
              {process.env.NODE_ENV === 'development' && this.state.error && (
                <details className="bg-rnm-neutral-900 rounded-lg p-4 text-xs">
                  <summary className="cursor-pointer text-rnm-neutral-300 font-semibold mb-2">
                    Development Error Details
                  </summary>
                  <div className="space-y-2 text-rnm-neutral-400">
                    <div>
                      <strong>Error:</strong> {this.state.error.message}
                    </div>
                    <div>
                      <strong>Stack:</strong>
                      <pre className="mt-1 overflow-auto text-xs bg-rnm-neutral-800 p-2 rounded">
                        {this.state.error.stack}
                      </pre>
                    </div>
                    {this.state.errorInfo && (
                      <div>
                        <strong>Component Stack:</strong>
                        <pre className="mt-1 overflow-auto text-xs bg-rnm-neutral-800 p-2 rounded">
                          {this.state.errorInfo.componentStack}
                        </pre>
                      </div>
                    )}
                  </div>
                </details>
              )}
            </CardContent>
          </Card>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
