import { Component } from "react";
import "./employers-list-item.css"

class EmployersListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            increase: false,
            like: false
        }
    }

    onIncrease = () => {
        this.setState(({ increase }) => ({
            increase: !increase
        }))
    }
    onLike = () => {
        this.setState(({ like }) => ({
            like: !like
        }))
    }


    render() {
        console.log('hey, i am new here ')
        const { name, salary } = this.props
        const { increase, like } = this.state

        let classNames = "list-group-item d-flex justify-content-between";
        if (increase) {
            classNames += ' increase';
        }

        if (like) {
            classNames += ' like';
        }
        return (

            <li className={classNames} >
                <span onClick={this.onLike} className="list-group-item-label">{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary} />
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm"
                        onClick={this.onIncrease}>
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button type="button"
                        className="btn-trash btn-sm ">
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }
}

export default EmployersListItem;