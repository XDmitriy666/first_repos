import { Component } from "react";


export class ErrorBoundaryc extends Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      // Обновить состояние с тем, чтобы следующий рендер показал запасной UI.
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
      // Можно также сохранить информацию об ошибке в соответствующую службу журнала ошибок
      console.log(error, errorInfo + 'ERROR BOUNDARY');
    }
  
    reload() {
        window.location.reload()
    }

    render() {
      if (this.state.hasError) {
        // Можно отрендерить запасной UI произвольного вида
        return (<div onClick={this.reload}>
                <h1>Что-то пошло не так.</h1>
            </div>)
      }
  
      return this.props.children; 
    }
  }