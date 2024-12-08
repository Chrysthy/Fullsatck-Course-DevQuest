import PropTypes from 'prop-types';
import "./style.css";

const Count = (props) => {

  return (

    <>
      <div className="card">

        <button onClick={props.incrementCount}>

          count is {props.count}

        </button>

      </div>

    </>
  )

}

Count.propTypes = {
  count: PropTypes.number.isRequired,
  incrementCount: PropTypes.func.isRequired
}

export default Count;