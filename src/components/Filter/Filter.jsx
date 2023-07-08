import PropTypes from 'prop-types';
import css from './Filter.module.css';

const Filter = ({ onFilterInput }) => {
  return (
    <div className={css.filterInput}>
      <input placeholder="Search name..." onChange={onFilterInput}></input>
    </div>
  );
};

Filter.propTypes = {
  onFilterInput: PropTypes.func.isRequired,
};
export default Filter;
