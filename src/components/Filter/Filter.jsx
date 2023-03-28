import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => (
  <div>
    <label>
      Filter
      <input type="name" value={value} onChange={onChange} />
    </label>
  </div>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
