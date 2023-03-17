import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItems.css';

function ExpenseItems(props) {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item-description">
          <h2>
            {props.title}
          </h2>
        </div>
        <div className="expense-item__price">${props.amount}</div>
      </Card>
    </li>
  )
}

export default ExpenseItems;