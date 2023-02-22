import classes from './list.module.css';

const List = (props) => {
  const listItems = props.links.map((link) => <li key={link.id}>{link.task}</li>)
  return (
        <div>
        <div className={classes.list__list}>
          <div className= {classes.list__item}>
            <ul>
             {listItems}
            </ul>
          </div>
        </div>
      </div>
  )
}

export default List