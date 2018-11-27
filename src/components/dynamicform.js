import React from 'react';

export default class DynamicForm extends React.Component {

    onSubmit = (e) => {
        e.preventDefault();
    }

    renderForm() {
        let formUi = this.props.model.map((value) => {
            return (

                <div
                    className="form-group"
                    key={value.key}
                >
                    <label
                        key={`key-$value.key`}
                        htmlFor={value.key}>{value.label}</label>
                    <input
                        {...value.props} 
                        type={value.type || 'text'} 
                        key={`i-$value.key`}
                        ref={(key) => {this[value.key] = key}}
                        onChange={(e) => {this.onChangeHandler(value.key,e)}}
                        className="form-control" />
                </div>
            )
        })
        return formUi
    }

    onChangeHandler(key) {
        console.log('aca')
    }

    render() {
        let title = this.props.title || "Dynamic Form";

        return (
            <div className="panel panel-info">

                <div class="panel-heading">
                    <h3 className="form-title">{title}</h3>
                </div>

                <div className="panel-body" >
                    <form className="dynamic-form" onSubmit={(e) => { this.onSubmit(e) }}>
                        {this.renderForm()}


                        <div className="form-actions">
                            <button type="submit">Add product</button>
                        </div>
                    </form>
                </div>
            </div>


        )
    }
}