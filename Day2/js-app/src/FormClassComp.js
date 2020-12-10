import React from 'react';
import { handleAgeValidation } from './Validations';

class FormClassComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            empName: '',
            email: '',
            age: 0,
            errormsg: ''
        };
    }

    handleInput(e) {
        const nm = e.target.name;
        const val = e.target.value;
        if (nm === 'age') {
            this.setState({ errormsg: handleAgeValidation(val) })
        }
        this.setState({ [nm]: val });
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(e, this.state);
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={e => this.handleSubmit(e)} noValidate>
                    <div className="mb-3">
                        <label className="form-label">Employee Name</label>
                        <input type="text" className="form-control" id="empName" name="empName" placeholder="Employee Name"
                            onChange={e => this.handleInput(e)} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Employee Email</label>
                        <input type="email" className="form-control" id="email" name="email" placeholder="Employee Email"
                            onChange={e => this.handleInput(e)} required />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Employee Age</label>
                        <input type="number" className="form-control" id="age" name="age" placeholder="Employee Age"
                            onChange={e => this.handleInput(e)} required />
                        <span className=".text-danger">{this.state.errormsg}</span>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    // componentDidUpdate() {
    //     console.log('State', this.state);
    // }
}

export default FormClassComp;
