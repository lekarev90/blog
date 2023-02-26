import { Component, type ErrorInfo, type ReactNode, Suspense } from 'react'
import { types } from 'sass'
import { ErrorPage } from 'widgets/ErrorPage'
import Error = types.Error

interface ErrorBoundaryProps {
    children: ReactNode
}

interface ErrorBoundaryState {
    hasError: boolean
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor (props: ErrorBoundaryProps) {
        super(props)
        this.state = { hasError: false }
    }

    // eslint-disable-next-line n/handle-callback-err
    static getDerivedStateFromError (): any {
        return { hasError: true }
    }

    componentDidCatch (error: Error, errorInfo: ErrorInfo): void {
        console.log(error, errorInfo)
    }

    render (): JSX.Element {
        const { hasError } = this.state
        const { children } = this.props
        console.log(hasError)
        if (hasError) {
            return <Suspense fallback=""><ErrorPage/></Suspense>
        }
        console.log('ya tut')
        return children as JSX.Element
    }
}
